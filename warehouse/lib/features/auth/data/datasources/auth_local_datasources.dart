import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/features/auth/data/model/user_login_model.dart';

abstract class AuthLocalDataSource {
  Future<Unit> cacheLogin({required UserLogin userLogin});
}

class AuthLocalDataSourceImpl implements AuthLocalDataSource {
  final SharedPreferences sharedPreferences;

  AuthLocalDataSourceImpl(this.sharedPreferences);
  @override
  Future<Unit> cacheLogin({required UserLogin userLogin}) {
    final userToJson = userLogin.toJson();
    sharedPreferences.setString("USER_LOGIN", json.encode(userToJson));
    return Future.value(unit);
  }
}
