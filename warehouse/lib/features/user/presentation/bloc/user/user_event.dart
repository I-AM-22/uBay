part of 'user_bloc.dart';

@freezed
abstract class UserEvent with _$UserEvent {
  const factory UserEvent.updateMyPasswordEvent(
      String currentPassword, String password) = _updateMyPasswordEvent;
  const factory UserEvent.changeIconVisibilityEvent(bool isVisible)=_changeIconVisibilityEvent;
}
