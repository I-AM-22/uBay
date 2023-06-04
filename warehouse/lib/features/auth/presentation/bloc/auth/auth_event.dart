part of 'auth_bloc.dart';

@freezed
abstract class AuthEvent with _$AuthEvent {
  const factory AuthEvent.loginEvent(
      {required String email, required String password}) = _loginEvent;
  const factory AuthEvent.signupEvent(
      {required String userName,
      required String email,
      required String password,
      required String passwordConfirm}) = _signupEvent;
  const factory AuthEvent.changeIconVisibilityEvent(bool isVisible) =
      _changeIconVisibilityEvent;
  const factory AuthEvent.forgotPasswordEvent(String email) =
      _forgetPasswordEvent;
  const factory AuthEvent.resetPasswordEvent(String token, String password) =
      _resetPasswordEvent;
}
