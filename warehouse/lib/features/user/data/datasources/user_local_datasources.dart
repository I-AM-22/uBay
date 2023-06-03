import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/features/auth/data/model/user_login/user_login_model.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';

abstract class UserLocalDataSource {
  Future<Unit> cacheLogin({required UserLogin userLogin});
  Future<Unit> cacheMyProfile({required UserModel userModel});
  Future<Unit> getCacheLogin();
  Future<UserModel> getCacheMyProfile();
}

@LazySingleton(as: UserLocalDataSource)
class AuthLocalDataSourceImpl implements UserLocalDataSource {
  final SharedPreferences sharedPreferences;

  AuthLocalDataSourceImpl(this.sharedPreferences);
  @override
  Future<Unit> cacheLogin({required UserLogin userLogin}) {
    final userToJson = userLogin.toJson();
    sharedPreferences.setString("USER_LOGIN", json.encode(userToJson));
    return Future.value(unit);
  }

  @override
  Future<Unit> cacheMyProfile({required UserModel userModel}) {
    final userToJson = userModel.toJson();
    sharedPreferences.setString("MY_PROFILE", json.encode(userToJson));
    return Future.value(unit);
  }

  @override
  Future<Unit> getCacheLogin() {
    final jsonString=sharedPreferences.getString('CACHE_LOGIN');
    if(jsonString!=null) {
      userDetails=UserLogin.fromJson(json.decode(jsonString));
    }
    print(userDetails!.token);
    return Future.value(unit);

  }

  @override
  Future<UserModel> getCacheMyProfile() {
    final jsonString=sharedPreferences.getString('MY_PROFILE');
    if(jsonString!=null){
      final userLogin=UserModel.fromJson(json.decode(jsonString));
      return Future.value(userLogin);
    }else{
      throw OfflineException();
    }
  }
}
