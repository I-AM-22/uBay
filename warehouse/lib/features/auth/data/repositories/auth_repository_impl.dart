import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:image_picker/image_picker.dart';
import 'package:warehouse/features/auth/data/model/user_login_model.dart';
import '../../../../core/errors/exceptions.dart';
import '../../../../core/errors/failures.dart';
import '../../../../core/network_info.dart';
import '../../domain/repositories/auth_repository.dart';
import '../datasources/auth_local_datasources.dart';
import '../datasources/auth_remote_datasource.dart';

class AuthRepositoryImpl implements AuthRepository {
  final AuthRemoteDataSource authRemoteDataSource;
  final AuthLocalDataSource authLocalDataSource;
  final NetworkInfo networkInfo;

  AuthRepositoryImpl(
      {required this.authRemoteDataSource,
      required this.authLocalDataSource,
      required this.networkInfo});

  @override
  Future<Either<Failure, UserLogin>> login(
      String email, String password) async {
    if (await networkInfo.isConnected) {
      try {
        final userLogin = await authRemoteDataSource.login(email, password);
        await authLocalDataSource.cacheLogin(userLogin: userLogin);
        return Right(userLogin);
      } on ServerException catch (e) {
        print(e.toString());
        return Left(ServerFailure());
      }
    } else {
      return Left(OfflineFailure());
    }
  }

  @override
  Future<Either<Failure, Unit>> signup(String userName, String email,
      String password, String passwordConfirm) async {
    if (await networkInfo.isConnected) {
      try {
        await authRemoteDataSource.signup(
            userName, email, password, passwordConfirm);
        return const Right(unit);
      } on ServerException {
        return Left(ServerFailure());
      }
    } else {
      return Left(OfflineFailure());
    }
  }

  @override
  Future<Either<Failure, File>> pickProfileImage(ImageSource source) async {
    final image = await ImagePicker().pickImage(source: source);
    if (image != null) {
      return Right(File(image.path));
    } else {
      return Left(NoImageFailure());
    }
  }
}
