// This file is "main.dart"
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter/foundation.dart';

part 'employee_login_model.freezed.dart';

part 'employee_login_model.g.dart';

@freezed
class EmployeeLoginModel with _$EmployeeLoginModel {
  factory EmployeeLoginModel({required String token, required Employee employee}) =
      _EmployeeLoginModel;

  factory EmployeeLoginModel.fromJson(Map<String, dynamic> json) =>
      _$EmployeeLoginModelFromJson(json);
}

@freezed
class Employee with _$Employee {
  factory Employee(
      {required String name,
      required String email,
      required Store store,
      required String address,
      required DateTime createdAt,
      required DateTime updatedAt,
      required String role,
      required String id}) = _Employee;

  factory Employee.fromJson(Map<String, dynamic> json) =>
      _$EmployeeFromJson(json);
}

@freezed
class Store with _$Store {
  factory Store(
      {required String id,
      required String name,
      required String address,
      required City city}) = _Store;

  factory Store.fromJson(Map<String, dynamic> json) => _$StoreFromJson(json);
}

@freezed
class City with _$City {
  factory City({required String id, required String name}) = _City;

  factory City.fromJson(Map<String, dynamic> json) => _$CityFromJson(json);
}
