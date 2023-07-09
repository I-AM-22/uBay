
import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/core/strings/id_and_token.dart';

import '../model/employee_model/employee_model.dart';

abstract class EmployeeRemoteDataSource {
  Future<EmployeeModel> getMyProfile();
}

@Injectable(as: EmployeeRemoteDataSource)
class EmployeeRemoteDataSourceImplement implements EmployeeRemoteDataSource {
  @override
  Future<EmployeeModel> getMyProfile() async {
    EmployeeModel? employeeModel;
    await DioHelper.getData(url: MY_PROFILE, token: employeeDetails!.token)
        .then((value) {
      employeeModel = EmployeeModel.fromJson(value.data);
      return Future.value(employeeModel);
    }).catchError((error) {
      if (error.response != null) {
        SERVER_FAILURE = _mapResponseError(error.response);
      }
      throw ServerException();
    });
    return Future.value(employeeModel);
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
