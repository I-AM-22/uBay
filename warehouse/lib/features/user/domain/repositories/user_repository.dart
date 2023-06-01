import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';

abstract class UserRepository {
  Future<Either<Failure, UserLogin>> updateMyPassword(
      String currentPassword, String password);
}
