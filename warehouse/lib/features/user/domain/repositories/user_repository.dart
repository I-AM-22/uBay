import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';

abstract class UserRepository {
  Future<Either<Failure, UserLogin>> updateMyPassword(
      String currentPassword, String password);
  Future<Either<Failure,UserModel>> updateMyProfile(String name,String email,File? photo);
  Future<Either<Failure,UserModel>> getMyProfile();
  Future<Either<Failure,Unit>> deleteMyAccount();
  Future<Unit> logOut();
}
