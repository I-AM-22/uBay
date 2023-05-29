import 'package:dio/dio.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';

abstract class AuthRemoteDataSource {
  Future<UserLogin> login(String email, String password);

  Future<UserLogin> signup(
      String userName, String email, String password, String passwordConfirm);
}

class AuthRemoteDataSourceImplement implements AuthRemoteDataSource {
  UserLogin? userModel;
  @override
  Future<UserLogin> login(String email, String password) async {
    await DioHelper.postData(
        url: LOGIN, data: {'email': email, 'password': password}).then((value) {
      userModel = UserLogin.fromJson(value.data);
      return Future.value(userModel);
    }).catchError((error) {
      DioError errorBody = error;
      if (errorBody.response != null) {
        SERVER_FAILURE = _mapResponseError(errorBody.response!);
        print(SERVER_FAILURE);
      }
      throw ServerException();
    });
    return Future.value(userModel);
  }

  @override
  Future<UserLogin> signup(String userName, String email, String password,
      String passwordConfirm) async {
    UserLogin? userLogin;
    await DioHelper.postData(url: SIGN_UP, data: {
      'name': userName,
      'email': email,
      'password': password,
      'passwordConfirm': passwordConfirm
    }).then((value) {
      userLogin = UserLogin.fromJson(value.data);
      return Future.value(userLogin);
    }).catchError((error) {
      DioError dioError = error;
      if (error.response != null) {
        SERVER_FAILURE = _mapResponseError(dioError.response!);
        print(SERVER_FAILURE);
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
