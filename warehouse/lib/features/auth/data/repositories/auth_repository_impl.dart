import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/strings/id_and_token.dart';

import '../../../../core/errors/exceptions.dart';
import '../../../../core/errors/failures.dart';
import '../../../../core/network_info.dart';
import '../../domain/repositories/auth_repository.dart';
import '../datasources/auth_local_datasources.dart';
import '../datasources/auth_remote_datasource.dart';
import '../model/employee_login/employee_login_model.dart';

@Injectable(as: AuthRepository)
class AuthRepositoryImplement implements AuthRepository {
  final AuthRemoteDataSource authRemoteDataSource;
  final AuthLocalDataSource authLocalDataSource;
  final NetworkInfo networkInfo;

  AuthRepositoryImplement(
      {required this.authRemoteDataSource,
      required this.authLocalDataSource,
      required this.networkInfo});

  @override
  Future<Either<Failure, EmployeeLoginModel>> login(
      String email, String password) async {
    if (await networkInfo.isConnected) {
      try {
        final employeeLoginModel =
            await authRemoteDataSource.login(email, password);
        await authLocalDataSource.cacheLogin(
            token: employeeLoginModel.token,
            idStore: employeeLoginModel.employee.store.id,
            idEmployee: employeeLoginModel.employee.id);
        token = employeeLoginModel.token;
        idStore = employeeLoginModel.employee.store.id;
        idEmployee = employeeLoginModel.employee.id;
        return Right(employeeLoginModel);
      } on ServerException {
        return Left(ServerFailure());
      }
    } else {
      return Left(OfflineFailure());
    }
  }
}
