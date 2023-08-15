import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/features/auth/data/model/employee_login/employee_login_model.dart';

abstract class AuthRemoteDataSource {
  Future<EmployeeLoginModel> login(String email, String password);
}

@Injectable(as: AuthRemoteDataSource)
class AuthRemoteDataSourceImplement implements AuthRemoteDataSource {
  EmployeeLoginModel? employeeLoginModel;
  @override
  Future<EmployeeLoginModel> login(String email, String password) async {
    await DioHelper.postData(
        url: LOGIN, data: {'email': email, 'password': password}).then((value) {
      employeeLoginModel = EmployeeLoginModel.fromJson(value.data);
      return Future.value(employeeLoginModel);
    }).catchError((error) {
      DioError errorBody = error;
      if (errorBody.response != null) {
        SERVER_FAILURE = _mapResponseError(errorBody.response!);
      }
      throw ServerException();
    });
    return Future.value(employeeLoginModel);
  }
}

String _mapResponseError(Response response) {
  switch (response.data['type']) {
    case 'default':
      return response.data['message'];
    case 'form':
      return response.data['errors'][0]['message'];
    default:
      return SERVER_FAILURE;
  }
}
