import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/features/auth/data/model/employee_login/employee_login_model.dart';

abstract class AuthLocalDataSource {
  Future<Unit> cacheLogin({required String token,required String idStore});
}

@LazySingleton(as: AuthLocalDataSource)
class AuthLocalDataSourceImpl implements AuthLocalDataSource {
  final SharedPreferences sharedPreferences;

  AuthLocalDataSourceImpl(this.sharedPreferences);
  @override
  Future<Unit> cacheLogin({required String token,required String idStore}) {
    sharedPreferences.setString("CACHE_TOKEN", token);
    sharedPreferences.setString("CACHE_ID_STORE", idStore);
    return Future.value(unit);
  }
}
