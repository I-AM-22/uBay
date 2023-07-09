import 'package:dartz/dartz.dart';
import 'package:warehouse/features/auth/data/model/employee_login/employee_login_model.dart';
import '../../../../core/errors/failures.dart';

abstract class AuthRepository {
  Future<Either<Failure, EmployeeLoginModel>> login(String email, String password);
}
