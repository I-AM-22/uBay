import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import '../../../../core/errors/failures.dart';
import '../../data/model/user_login/user_login_model.dart';

abstract class AuthRepository {
  Future<Either<Failure, UserLogin>> login(String email, String password);
  Future<Either<Failure, UserLogin>> signup(
      String userName, String email, String password, String passwordConfirm);
  Future<Either<Failure, String>> forgetPassword(String email);
  Future<Either<Failure, UserLogin>> resetPassword(
      String token, String password);
}
