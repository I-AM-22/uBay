import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/user/domain/repositories/user_repository.dart';

@lazySingleton
class LogOutUseCase{
  final UserRepository userRepository;

  LogOutUseCase(this.userRepository);

  Future<Unit> call()async{
    return await userRepository.logOut();
  }
}