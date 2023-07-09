import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import '../model/employee_model/employee_model.dart';


abstract class EmployeeLocalDataSource {
  Future<Unit> cacheLogin({required EmployeeModel employeeModel});
  Future<Unit> cacheMyProfile({required EmployeeModel employeeModel});
  Future<Unit> getCacheLogin();
  Future<EmployeeModel> getCacheMyProfile();
  Future<Unit> logOut();
}

@LazySingleton(as: EmployeeLocalDataSource)
class EmployeeLocalDataSourceImplement implements EmployeeLocalDataSource {
  final SharedPreferences sharedPreferences;

  EmployeeLocalDataSourceImplement(this.sharedPreferences);
  @override
  Future<Unit> cacheLogin({required EmployeeModel employeeModel}) {
    final userToJson = employeeModel.toJson();
    sharedPreferences.setString("EMPLOYEE_MODEL", json.encode(userToJson));
    return Future.value(unit);
  }

  @override
  Future<Unit> cacheMyProfile({required EmployeeModel employeeModel}) {
    final userToJson = employeeModel.toJson();
    sharedPreferences.setString("MY_PROFILE", json.encode(userToJson));
    return Future.value(unit);
  }

  @override
  Future<Unit> getCacheLogin() {
    final jsonString=sharedPreferences.getString('EMPLOYEE_MODEL');
    if(jsonString!=null) {
      //TODO change employeeModel to employeeLoginModel
     // employeeDetails=EmployeeModel.fromJson(json.decode(jsonString));
    }
    return Future.value(unit);

  }

  @override
  Future<EmployeeModel> getCacheMyProfile() {
    final jsonString=sharedPreferences.getString('MY_PROFILE');
    if(jsonString!=null){
      final employeeModel=EmployeeModel.fromJson(json.decode(jsonString));
      return Future.value(employeeModel);
    }else{
      throw EmptyCacheException();
    }
  }

  @override
  Future<Unit> logOut() {
    sharedPreferences.remove('CACHE_LOGIN');
    sharedPreferences.remove('MY_PROFILE');
    return Future.value(unit);
  }
}
