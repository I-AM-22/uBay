import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart';

class ResetPasswordUseCase{
  final AuthRepository authRepository;

  ResetPasswordUseCase(this.authRepository);

  Future<Either<Failure,UserLogin>> call(String token,String password)async{
    return await authRepository.resetPassword(token, password);
  }
}