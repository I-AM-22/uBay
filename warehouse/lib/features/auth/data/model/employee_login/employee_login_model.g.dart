// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'employee_login_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_EmployeeLoginModel _$$_EmployeeLoginModelFromJson(
        Map<String, dynamic> json) =>
    _$_EmployeeLoginModel(
      token: json['token'] as String,
      employee: Employee.fromJson(json['employee'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_EmployeeLoginModelToJson(
        _$_EmployeeLoginModel instance) =>
    <String, dynamic>{
      'token': instance.token,
      'employee': instance.employee,
    };

_$_Employee _$$_EmployeeFromJson(Map<String, dynamic> json) => _$_Employee(
      name: json['name'] as String,
      email: json['email'] as String,
      store: Store.fromJson(json['store'] as Map<String, dynamic>),
      address: json['address'] as String,
      createdAt: DateTime.parse(json['createdAt'] as String),
      updatedAt: DateTime.parse(json['updatedAt'] as String),
      role: json['role'] as String,
      id: json['id'] as String,
    );

Map<String, dynamic> _$$_EmployeeToJson(_$_Employee instance) =>
    <String, dynamic>{
      'name': instance.name,
      'email': instance.email,
      'store': instance.store,
      'address': instance.address,
      'createdAt': instance.createdAt.toIso8601String(),
      'updatedAt': instance.updatedAt.toIso8601String(),
      'role': instance.role,
      'id': instance.id,
    };

_$_Store _$$_StoreFromJson(Map<String, dynamic> json) => _$_Store(
      id: json['id'] as String,
      name: json['name'] as String,
      address: json['address'] as String,
      city: City.fromJson(json['city'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_StoreToJson(_$_Store instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'address': instance.address,
      'city': instance.city,
    };

_$_City _$$_CityFromJson(Map<String, dynamic> json) => _$_City(
      id: json['id'] as String,
      name: json['name'] as String,
    );

Map<String, dynamic> _$$_CityToJson(_$_City instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
    };
