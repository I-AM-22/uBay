import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart';

@Injectable()
class ForgotPasswordUseCase {
  final AuthRepository authRepository;

  ForgotPasswordUseCase(this.authRepository);

  Future<Either<Failure, String>> call(String email) async {
    return await authRepository.forgotPassword(email);
  }
}
