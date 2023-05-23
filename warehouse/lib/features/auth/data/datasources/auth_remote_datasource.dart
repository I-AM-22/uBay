import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/features/auth/data/model/user_login_model.dart';

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
        print(errorBody.response!.data['message']);
        SERVER_FAILURE = errorBody.response!.data['message'];
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
      if (dioError.response != null) {
        SERVER_FAILURE = dioError.response!.data['errors'][0]['message'];
      }

      throw ServerException();
    });
    return Future.value(userLogin);
  }
}
