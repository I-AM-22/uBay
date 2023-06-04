part of 'auth_bloc.dart';

@freezed
abstract class AuthState with _$AuthState {
  const factory AuthState.authInitial() = _authInitial;
  const factory AuthState.loading() = _loading;
  const factory AuthState.successLoginState(String message) =
      _successLoginState;
  const factory AuthState.errorLoginState(String message) = _errorLoginState;
  const factory AuthState.changeIconVisibilityState(bool isVisible) =
      _changeIconVisibilityState;
  const factory AuthState.successForgotPasswordState(String message) =
      _successForgetPasswordState;
  const factory AuthState.errorForgotPasswordState(String message) =
      _errorForgotPasswordState;
  const factory AuthState.successResetPasswordState(String message) =
      _successResetPasswordState;
  const factory AuthState.errorResetPasswordState(String message) =
      _errorResetPasswordState;
}
