part of 'employee_bloc.dart';

@freezed
abstract class EmployeeState with _$EmployeeState {
  const factory EmployeeState.userInitial() = _userInitial;
  const factory EmployeeState.loading() = _loading;
  const factory EmployeeState.successChangeIconVisibilityState(bool isVisible)=_changeIconVisibilityState;
  const factory EmployeeState.successPickImageProfileState(File image)=_successPickImageProfileState;
  const factory EmployeeState.errorPickImageProfileState()=_errorPickImageProfileState;
  const factory EmployeeState.successGetMyProfileState(EmployeeModel employeeModel)=_successGetMyProfileState;
  const factory EmployeeState.errorGetMyProfileState(String message)=_errorGetMyProfileState;
  const factory EmployeeState.successLogOutState(String message)=_successLogOutState;
}
