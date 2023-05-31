part of 'user_bloc.dart';

@freezed
abstract class UserState with _$UserState {
  const factory UserState.userInitial() = _userInitial;
  const factory UserState.loading() = _loading;
  const factory UserState.successUpdateMyPasswordState(String message)=_successUpdateMyPasswordState;
  const factory UserState.errorUpdateMyPasswordState(String message)=_errorUpdateMyPasswordState;
  const factory UserState.successChangeIconVisibilityState(bool isVisible)=_changeIconVisibilityState;
}
