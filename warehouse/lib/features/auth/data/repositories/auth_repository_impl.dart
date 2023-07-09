import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';

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
        final userLogin = await authRemoteDataSource.login(email, password);
        await authLocalDataSource.cacheLogin(userLogin: userLogin);
        return Right(userLogin);
      } on ServerException  {
        return Left(ServerFailure());
      }
    } else {
      return Left(OfflineFailure());
    }
  }
}
