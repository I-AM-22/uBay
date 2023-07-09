

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/employee/data/datasources/employee_local_datasources.dart';
import 'package:warehouse/features/employee/data/datasources/employee_remote_datasource.dart';
import 'package:warehouse/features/employee/domain/repositories/employee_repository.dart';

import '../../../../core/network_info.dart';
import '../model/employee_model/employee_model.dart';

@Injectable(as: EmployeeRepository)
class EmployeeRepositoryImplement implements EmployeeRepository {
  final EmployeeRemoteDataSource employeeRemoteDataSource;
  final EmployeeLocalDataSource employeeLocalDataSource;
  final NetworkInfo networkInfo;

  EmployeeRepositoryImplement(this.employeeRemoteDataSource,
      {required this.employeeLocalDataSource, required this.networkInfo});


  @override
  Future<Either<Failure, EmployeeModel>> getMyProfile()async {
    await employeeLocalDataSource.getCacheLogin();
    if(await networkInfo.isConnected){
      try{
        final employeeModel=await employeeRemoteDataSource.getMyProfile();
        //await employeeLocalDataSource.cacheMyProfile(employeeModel: employeeModel);
        return Right(employeeModel);
      }on ServerException{
        return Left(ServerFailure());
      }
    }else{
      try{
        final employeeModel=await employeeLocalDataSource.getCacheMyProfile();
        return Right(employeeModel);
      }on EmptyCacheException{
        return Left(EmptyCacheFailure());
      }
    }
  }

  @override
  Future<Unit> logOut() async{
    await employeeLocalDataSource.logOut();
    return Future.value(unit);
  }
}
