import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';
import 'package:warehouse/features/user/data/datasources/user_local_datasources.dart';
import 'package:warehouse/features/user/data/datasources/user_remote_datasource.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';
import 'package:warehouse/features/user/domain/repositories/user_repository.dart';

import '../../../../core/network_info.dart';

@Injectable(as: UserRepository)
class UserRepositoryImplement implements UserRepository {
  final UserRemoteDataSource userRemoteDataSource;
  final UserLocalDataSource userLocalDataSource;
  final NetworkInfo networkInfo;

  UserRepositoryImplement(this.userLocalDataSource,
      {required this.userRemoteDataSource, required this.networkInfo});

  @override
  Future<Either<Failure, UserLogin>> updateMyPassword(
      String currentPassword, String password) async {
    if (await networkInfo.isConnected) {
      try {
        final userLogin = await userRemoteDataSource.updateMyPassword(
            currentPassword, password);
        await userLocalDataSource.cacheLogin(userLogin: userLogin);
        return Right(userLogin);
      } on ServerException {
        return Left(ServerFailure());
      }
    } else {
      return Left(OfflineFailure());
    }
  }

  @override
  Future<Either<Failure, UserModel>> updateMyProfile(String name, String email, File? photo) async{

    if(await networkInfo.isConnected) {
      try {
        final userModel = await userRemoteDataSource.updateMyProfile(
            name, email, photo);
        return Right(userModel);
      }on ServerException{
        return Left(ServerFailure());
      }
    }else{
      return Left(OfflineFailure());
    }
  }

  @override
  Future<Either<Failure, UserModel>> getMyProfile()async {
    await userLocalDataSource.getCacheLogin();
    if(await networkInfo.isConnected){
      try{
        final userModel=await userRemoteDataSource.getMyProfile();
        await userLocalDataSource.cacheMyProfile(userModel: userModel);
        return Right(userModel);
      }on ServerException{
        return Left(ServerFailure());
      }
    }else{
      try{
        final userModel=await userLocalDataSource.getCacheMyProfile();
        return Right(userModel);
      }on EmptyCacheException{
        return Left(EmptyCacheFailure());
      }
    }
  }
}
