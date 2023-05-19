import 'dart:io';

import 'package:image_picker/image_picker.dart';

abstract class AuthEvent {
  const AuthEvent();

  @override
  List<Object?> get props => [];
}

class LoginEvent extends AuthEvent {
  final String email;
  final String password;

  const LoginEvent(this.email, this.password);
}

class SignupEvent extends AuthEvent {
  final String userName;
  final String email;
  final String password;
  File? profileImage;

  SignupEvent(this.userName, this.email, this.password, this.profileImage);
}

class PickProfileImageEvent extends AuthEvent {
  final ImageSource source;

  const PickProfileImageEvent(this.source);
}
