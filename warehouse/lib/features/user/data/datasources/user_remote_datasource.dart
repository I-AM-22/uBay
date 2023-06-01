import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/core/strings/id_and_token.dart';

import '../../../auth/data/model/user_login/user_login_model.dart';

abstract class UserRemoteDataSource {
  Future<UserLogin> updateMyPassword(String currentPassword, String password);
}

@Injectable(as: UserRemoteDataSource)
class UserRemoteDataSourceImplement implements UserRemoteDataSource {
  @override
  Future<UserLogin> updateMyPassword(
      String currentPassword, String password) async {
    UserLogin? userLogin;
    await DioHelper.patchData(
            url: UPDATE_MY_PASSWORD,
            token: token,
            data: {'passwordCurrent': currentPassword, 'password': password})
        .then((value) {
      userLogin = UserLogin.fromJson(value.data);
      return Future.value(userLogin);
    }).catchError((error) {
      DioError dioError = error;
      if(error.response!=null) {
        SERVER_FAILURE = _mapResponseError(dioError.response!);
      }
      throw ServerException();
    });
    return Future.value(userLogin);
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
