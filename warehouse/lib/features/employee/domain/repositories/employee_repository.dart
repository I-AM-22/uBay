

import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';

import '../../data/model/employee_model/employee_model.dart';


abstract class EmployeeRepository {
  Future<Either<Failure,EmployeeModel>> getMyProfile();
  Future<Unit> logOut();
}
