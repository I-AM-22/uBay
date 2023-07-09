import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/employee/domain/repositories/employee_repository.dart';

@lazySingleton
class LogOutUseCase{
  final EmployeeRepository employeeRepository;

  LogOutUseCase(this.employeeRepository);

  Future<Unit> call()async{
    return await employeeRepository.logOut();
  }
}