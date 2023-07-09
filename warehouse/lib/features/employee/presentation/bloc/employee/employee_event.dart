

part of 'employee_bloc.dart';

@freezed
abstract class EmployeeEvent with _$EmployeeEvent {
  const factory EmployeeEvent.changeIconVisibilityEvent(bool isVisible)=_changeIconVisibilityEvent;
  const factory EmployeeEvent.pickProfileImageEvent(ImageSource imageSource)=_pickProfileImageEvent;
  const factory EmployeeEvent.getMyProfileEvent()=_getMyProfileEvent;
  const factory EmployeeEvent.logOutEvent()=_logOutEvent;
}
