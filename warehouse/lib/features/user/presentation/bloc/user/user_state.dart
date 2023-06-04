part of 'user_bloc.dart';

@freezed
abstract class UserState with _$UserState {
  const factory UserState.userInitial() = _userInitial;
  const factory UserState.loading() = _loading;
  const factory UserState.successUpdateMyPasswordState(String message)=_successUpdateMyPasswordState;
  const factory UserState.errorUpdateMyPasswordState(String message)=_errorUpdateMyPasswordState;
  const factory UserState.successChangeIconVisibilityState(bool isVisible)=_changeIconVisibilityState;
  const factory UserState.successPickImageProfileState(File image)=_successPickImageProfileState;
  const factory UserState.errorPickImageProfileState()=_errorPickImageProfileState;
  const factory UserState.successUpdateMyProfileState(UserModel userModel)=_successUpdateMyProfileState;
  const factory UserState.errorUpdateMyProfileState(String message)=_errorUpdateMyProfileState;
  const factory UserState.successGetMyProfileState(UserModel userModel)=_successGetMyProfileState;
  const factory UserState.errorGetMyProfileState(String message)=_errorGetMyProfileState;
  const factory UserState.successDeleteMyAccountState(String message)=_successDeleteMyAccountState;
  const factory UserState.errorDeleteMyAccountState(String message)=_errorDeleteMyAccountState;
  const factory UserState.successLogOutState(String message)=_successLogOutState;
}
