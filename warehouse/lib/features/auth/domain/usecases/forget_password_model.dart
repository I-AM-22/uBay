import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart';

class ForgetPasswordUseCase{
  final AuthRepository authRepository;

  ForgetPasswordUseCase(this.authRepository);

  Future<Either<Failure,String>> call(String email)async{
    return await authRepository.forgetPassword(email);
  }
}