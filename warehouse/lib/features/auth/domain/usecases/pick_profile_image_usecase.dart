import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:image_picker/image_picker.dart';
import '../../../../core/errors/failures.dart';
import '../repositories/auth_repository.dart';

class PickProfileImageUseCase {
  final AuthRepository authRepository;

  PickProfileImageUseCase(this.authRepository);

  Future<Either<Failure, File>> call(ImageSource source) async {
    return await authRepository.pickProfileImage(source);
  }
}
