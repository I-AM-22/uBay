import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';
import 'package:warehouse/features/user/data/datasources/user_remote_datasource.dart';
import 'package:warehouse/features/user/domain/repositories/user_repository.dart';

import '../../../../core/network_info.dart';

@Injectable(as: UserRepository)
class UserRepositoryImplement implements UserRepository {
  final UserRemoteDataSource userRemoteDataSource;
  final NetworkInfo networkInfo;

  UserRepositoryImplement(
      {required this.userRemoteDataSource, required this.networkInfo});

  @override
  Future<Either<Failure, UserLogin>> updateMyPassword(
      String currentPassword, String password) async {
    if (await networkInfo.isConnected) {
      try {
        final userLogin = await userRemoteDataSource.updateMyPassword(
            currentPassword, password);
        return Right(userLogin);
      } on ServerException {
        return Left(ServerFailure());
      }
    } else {
      return Left(OfflineFailure());
    }
  }
}
