import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';

import '../repositories/user_repository.dart';

@injectable
class UpdateMyProfileUseCase{
  final UserRepository userRepository;

  UpdateMyProfileUseCase(this.userRepository);
  Future<Either<Failure,UserModel>> call(String name,String email,File? photo)async{
    return await userRepository.updateMyProfile(name, email, photo);
  }
}