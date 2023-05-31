
import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';
import 'package:warehouse/features/user/domain/repositories/user_repository.dart';

@injectable
class UpdatePasswordUseCase{
final UserRepository userRepository;

  UpdatePasswordUseCase(this.userRepository);

  Future<Either<Failure,UserLogin>> call(String currentPassword,String password)async{
    return await userRepository.updateMyPassword(currentPassword, password);
  }
}