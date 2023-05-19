import 'dart:io';

import 'package:dartz/dartz.dart';

import '../../../../core/errors/failures.dart';
import '../repositories/auth_repository.dart';

class SignupUseCase {
  final AuthRepository authRepository;

  SignupUseCase(this.authRepository);

  Future<Either<Failure, Unit>> call(String userName, String email,
      String password, String passwordConfirm) async {
    return await authRepository.signup(
        userName, email, password, passwordConfirm);
  }
}
