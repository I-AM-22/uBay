import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';

import '../../../../core/errors/failures.dart';
import '../repositories/auth_repository.dart';

@Injectable()
class SignupUseCase {
  final AuthRepository authRepository;

  SignupUseCase(this.authRepository);

  Future<Either<Failure, UserLogin>> call(String userName, String email,
      String password, String passwordConfirm) async {
    return await authRepository.signup(
        userName, email, password, passwordConfirm);
  }
}
