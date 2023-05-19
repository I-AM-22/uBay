import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:image_picker/image_picker.dart';
import '../../../../core/errors/failures.dart';
import '../../data/model/user_login_model.dart';

abstract class AuthRepository {
  Future<Either<Failure, UserLogin>> login(String email, String password);
  Future<Either<Failure, Unit>> signup(
      String userName, String email, String password, File? profileImage);
  Future<Either<Failure, File>> pickProfileImage(ImageSource source);
}
