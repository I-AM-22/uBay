import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/user/domain/repositories/user_repository.dart';
@lazySingleton
class DeleteMyAccountUseCase{
  final UserRepository userRepository;

  DeleteMyAccountUseCase(this.userRepository);
  Future<Either<Failure,Unit>> call()async{
    return await userRepository.deleteMyAccount();
  }
}