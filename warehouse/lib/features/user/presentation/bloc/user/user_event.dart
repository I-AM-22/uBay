

part of 'user_bloc.dart';

@freezed
abstract class UserEvent with _$UserEvent {
  const factory UserEvent.updateMyPasswordEvent(
      String currentPassword, String password) = _updateMyPasswordEvent;
  const factory UserEvent.changeIconVisibilityEvent(bool isVisible)=_changeIconVisibilityEvent;
  const factory UserEvent.pickProfileImageEvent(ImageSource imageSource)=_pickProfileImageEvent;
  const factory UserEvent.updateMyProfileEvent(String name,String email,File? photo)=_updateMyProfileEvent;
  const factory UserEvent.getMyProfileEvent()=_getMyProfileEvent;
  const factory UserEvent.deleteMyAccountEvent()=_deleteMyAccountEvent;
  const factory UserEvent.logOutEvent()=_logOutEvent;
}
