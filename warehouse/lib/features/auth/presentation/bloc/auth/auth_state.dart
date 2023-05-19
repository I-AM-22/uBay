import 'dart:io';

abstract class AuthState {
  const AuthState();
}

class AuthInitial extends AuthState {}

class LoadingLoginState extends AuthState {}

class SuccessLoginState extends AuthState {
  final String message;

  const SuccessLoginState(this.message);
}

class ErrorLoginState extends AuthState {
  final String error;

  const ErrorLoginState(this.error);
}

class SuccessSignupState extends AuthState {
  final String message;
  final String userName;
  File? profileImage;
  final String email;
  final String password;

  SuccessSignupState(this.message, this.userName, this.profileImage, this.email,
      this.password);
}

class ErrorSignupState extends AuthState {
  final String error;

  const ErrorSignupState(this.error);
}

class SuccessCreateUserState extends AuthState {
  final String message;

  const SuccessCreateUserState(this.message);
}

class ErrorCreateUserState extends AuthState {
  final String error;

  const ErrorCreateUserState(this.error);
}

class SuccessPickImageState extends AuthState {
  final File image;
  const SuccessPickImageState(this.image);
}

class ErrorPickImageState extends AuthState {
  const ErrorPickImageState();
}
