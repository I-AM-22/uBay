import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/features/auth/data/model/user_login_model.dart';

abstract class AuthRemoteDataSource {
  Future<UserLogin> login(String email, String password);

  Future<Unit> signup(
      String userName, String email, String password, File? profileImage);
}

class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
  @override
  Future<UserLogin> login(String email, String password) async {
    final response = await DioHelper.postData(
        url: LOGIN, data: {'email': email, 'password': password});
    if (response.statusCode == 201) {
      print(response.data);
      final userModel = UserLogin.fromJson(response.data);
      return Future.value(userModel);
    } else {
      print(response.statusMessage);
      throw ServerException();
    }
  }

  @override
  Future<Unit> signup(String userName, String email, String password,
      File? profileImage) async {
    return Future.value(unit);
  }
}
