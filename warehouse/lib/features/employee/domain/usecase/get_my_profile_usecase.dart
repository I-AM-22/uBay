import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/employee/domain/repositories/employee_repository.dart';

import '../../data/model/employee_model/employee_model.dart';


@injectable
class GetMyProfileUseCase {
  final EmployeeRepository employeeRepository;

  GetMyProfileUseCase(this.employeeRepository);

  Future<Either<Failure, EmployeeModel>> call() async {
    return await employeeRepository.getMyProfile();
  }
}
