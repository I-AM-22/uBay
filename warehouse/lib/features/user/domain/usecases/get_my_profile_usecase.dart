import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';
import 'package:warehouse/features/user/domain/repositories/user_repository.dart';

@injectable
class GetMyProfileUseCase {
  final UserRepository userRepository;

  GetMyProfileUseCase(this.userRepository);

  Future<Either<Failure, UserModel>> call() async {
    return await userRepository.getMyProfile();
  }
}
