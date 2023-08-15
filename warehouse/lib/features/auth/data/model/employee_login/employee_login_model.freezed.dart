// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'employee_login_model.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

EmployeeLoginModel _$EmployeeLoginModelFromJson(Map<String, dynamic> json) {
  return _EmployeeLoginModel.fromJson(json);
}

/// @nodoc
mixin _$EmployeeLoginModel {
  String get token => throw _privateConstructorUsedError;
  Employee get employee => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $EmployeeLoginModelCopyWith<EmployeeLoginModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EmployeeLoginModelCopyWith<$Res> {
  factory $EmployeeLoginModelCopyWith(
          EmployeeLoginModel value, $Res Function(EmployeeLoginModel) then) =
      _$EmployeeLoginModelCopyWithImpl<$Res, EmployeeLoginModel>;
  @useResult
  $Res call({String token, Employee employee});

  $EmployeeCopyWith<$Res> get employee;
}

/// @nodoc
class _$EmployeeLoginModelCopyWithImpl<$Res, $Val extends EmployeeLoginModel>
    implements $EmployeeLoginModelCopyWith<$Res> {
  _$EmployeeLoginModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? token = null,
    Object? employee = null,
  }) {
    return _then(_value.copyWith(
      token: null == token
          ? _value.token
          : token // ignore: cast_nullable_to_non_nullable
              as String,
      employee: null == employee
          ? _value.employee
          : employee // ignore: cast_nullable_to_non_nullable
              as Employee,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $EmployeeCopyWith<$Res> get employee {
    return $EmployeeCopyWith<$Res>(_value.employee, (value) {
      return _then(_value.copyWith(employee: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_EmployeeLoginModelCopyWith<$Res>
    implements $EmployeeLoginModelCopyWith<$Res> {
  factory _$$_EmployeeLoginModelCopyWith(_$_EmployeeLoginModel value,
          $Res Function(_$_EmployeeLoginModel) then) =
      __$$_EmployeeLoginModelCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String token, Employee employee});

  @override
  $EmployeeCopyWith<$Res> get employee;
}

/// @nodoc
class __$$_EmployeeLoginModelCopyWithImpl<$Res>
    extends _$EmployeeLoginModelCopyWithImpl<$Res, _$_EmployeeLoginModel>
    implements _$$_EmployeeLoginModelCopyWith<$Res> {
  __$$_EmployeeLoginModelCopyWithImpl(
      _$_EmployeeLoginModel _value, $Res Function(_$_EmployeeLoginModel) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? token = null,
    Object? employee = null,
  }) {
    return _then(_$_EmployeeLoginModel(
      token: null == token
          ? _value.token
          : token // ignore: cast_nullable_to_non_nullable
              as String,
      employee: null == employee
          ? _value.employee
          : employee // ignore: cast_nullable_to_non_nullable
              as Employee,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_EmployeeLoginModel
    with DiagnosticableTreeMixin
    implements _EmployeeLoginModel {
  _$_EmployeeLoginModel({required this.token, required this.employee});

  factory _$_EmployeeLoginModel.fromJson(Map<String, dynamic> json) =>
      _$$_EmployeeLoginModelFromJson(json);

  @override
  final String token;
  @override
  final Employee employee;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'EmployeeLoginModel(token: $token, employee: $employee)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'EmployeeLoginModel'))
      ..add(DiagnosticsProperty('token', token))
      ..add(DiagnosticsProperty('employee', employee));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_EmployeeLoginModel &&
            (identical(other.token, token) || other.token == token) &&
            (identical(other.employee, employee) ||
                other.employee == employee));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, token, employee);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_EmployeeLoginModelCopyWith<_$_EmployeeLoginModel> get copyWith =>
      __$$_EmployeeLoginModelCopyWithImpl<_$_EmployeeLoginModel>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_EmployeeLoginModelToJson(
      this,
    );
  }
}

abstract class _EmployeeLoginModel implements EmployeeLoginModel {
  factory _EmployeeLoginModel(
      {required final String token,
      required final Employee employee}) = _$_EmployeeLoginModel;

  factory _EmployeeLoginModel.fromJson(Map<String, dynamic> json) =
      _$_EmployeeLoginModel.fromJson;

  @override
  String get token;
  @override
  Employee get employee;
  @override
  @JsonKey(ignore: true)
  _$$_EmployeeLoginModelCopyWith<_$_EmployeeLoginModel> get copyWith =>
      throw _privateConstructorUsedError;
}

Employee _$EmployeeFromJson(Map<String, dynamic> json) {
  return _Employee.fromJson(json);
}

/// @nodoc
mixin _$Employee {
  String get name => throw _privateConstructorUsedError;
  String get email => throw _privateConstructorUsedError;
  Store get store => throw _privateConstructorUsedError;
  String get address => throw _privateConstructorUsedError;
  DateTime get createdAt => throw _privateConstructorUsedError;
  DateTime get updatedAt => throw _privateConstructorUsedError;
  String get role => throw _privateConstructorUsedError;
  String get id => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $EmployeeCopyWith<Employee> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EmployeeCopyWith<$Res> {
  factory $EmployeeCopyWith(Employee value, $Res Function(Employee) then) =
      _$EmployeeCopyWithImpl<$Res, Employee>;
  @useResult
  $Res call(
      {String name,
      String email,
      Store store,
      String address,
      DateTime createdAt,
      DateTime updatedAt,
      String role,
      String id});

  $StoreCopyWith<$Res> get store;
}

/// @nodoc
class _$EmployeeCopyWithImpl<$Res, $Val extends Employee>
    implements $EmployeeCopyWith<$Res> {
  _$EmployeeCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? email = null,
    Object? store = null,
    Object? address = null,
    Object? createdAt = null,
    Object? updatedAt = null,
    Object? role = null,
    Object? id = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      store: null == store
          ? _value.store
          : store // ignore: cast_nullable_to_non_nullable
              as Store,
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updatedAt: null == updatedAt
          ? _value.updatedAt
          : updatedAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      role: null == role
          ? _value.role
          : role // ignore: cast_nullable_to_non_nullable
              as String,
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $StoreCopyWith<$Res> get store {
    return $StoreCopyWith<$Res>(_value.store, (value) {
      return _then(_value.copyWith(store: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_EmployeeCopyWith<$Res> implements $EmployeeCopyWith<$Res> {
  factory _$$_EmployeeCopyWith(
          _$_Employee value, $Res Function(_$_Employee) then) =
      __$$_EmployeeCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String name,
      String email,
      Store store,
      String address,
      DateTime createdAt,
      DateTime updatedAt,
      String role,
      String id});

  @override
  $StoreCopyWith<$Res> get store;
}

/// @nodoc
class __$$_EmployeeCopyWithImpl<$Res>
    extends _$EmployeeCopyWithImpl<$Res, _$_Employee>
    implements _$$_EmployeeCopyWith<$Res> {
  __$$_EmployeeCopyWithImpl(
      _$_Employee _value, $Res Function(_$_Employee) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? email = null,
    Object? store = null,
    Object? address = null,
    Object? createdAt = null,
    Object? updatedAt = null,
    Object? role = null,
    Object? id = null,
  }) {
    return _then(_$_Employee(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      store: null == store
          ? _value.store
          : store // ignore: cast_nullable_to_non_nullable
              as Store,
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updatedAt: null == updatedAt
          ? _value.updatedAt
          : updatedAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      role: null == role
          ? _value.role
          : role // ignore: cast_nullable_to_non_nullable
              as String,
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Employee with DiagnosticableTreeMixin implements _Employee {
  _$_Employee(
      {required this.name,
      required this.email,
      required this.store,
      required this.address,
      required this.createdAt,
      required this.updatedAt,
      required this.role,
      required this.id});

  factory _$_Employee.fromJson(Map<String, dynamic> json) =>
      _$$_EmployeeFromJson(json);

  @override
  final String name;
  @override
  final String email;
  @override
  final Store store;
  @override
  final String address;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final String role;
  @override
  final String id;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'Employee(name: $name, email: $email, store: $store, address: $address, createdAt: $createdAt, updatedAt: $updatedAt, role: $role, id: $id)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'Employee'))
      ..add(DiagnosticsProperty('name', name))
      ..add(DiagnosticsProperty('email', email))
      ..add(DiagnosticsProperty('store', store))
      ..add(DiagnosticsProperty('address', address))
      ..add(DiagnosticsProperty('createdAt', createdAt))
      ..add(DiagnosticsProperty('updatedAt', updatedAt))
      ..add(DiagnosticsProperty('role', role))
      ..add(DiagnosticsProperty('id', id));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Employee &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.store, store) || other.store == store) &&
            (identical(other.address, address) || other.address == address) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt) &&
            (identical(other.updatedAt, updatedAt) ||
                other.updatedAt == updatedAt) &&
            (identical(other.role, role) || other.role == role) &&
            (identical(other.id, id) || other.id == id));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, name, email, store, address, createdAt, updatedAt, role, id);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_EmployeeCopyWith<_$_Employee> get copyWith =>
      __$$_EmployeeCopyWithImpl<_$_Employee>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_EmployeeToJson(
      this,
    );
  }
}

abstract class _Employee implements Employee {
  factory _Employee(
      {required final String name,
      required final String email,
      required final Store store,
      required final String address,
      required final DateTime createdAt,
      required final DateTime updatedAt,
      required final String role,
      required final String id}) = _$_Employee;

  factory _Employee.fromJson(Map<String, dynamic> json) = _$_Employee.fromJson;

  @override
  String get name;
  @override
  String get email;
  @override
  Store get store;
  @override
  String get address;
  @override
  DateTime get createdAt;
  @override
  DateTime get updatedAt;
  @override
  String get role;
  @override
  String get id;
  @override
  @JsonKey(ignore: true)
  _$$_EmployeeCopyWith<_$_Employee> get copyWith =>
      throw _privateConstructorUsedError;
}

Store _$StoreFromJson(Map<String, dynamic> json) {
  return _Store.fromJson(json);
}

/// @nodoc
mixin _$Store {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get address => throw _privateConstructorUsedError;
  City get city => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $StoreCopyWith<Store> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $StoreCopyWith<$Res> {
  factory $StoreCopyWith(Store value, $Res Function(Store) then) =
      _$StoreCopyWithImpl<$Res, Store>;
  @useResult
  $Res call({String id, String name, String address, City city});

  $CityCopyWith<$Res> get city;
}

/// @nodoc
class _$StoreCopyWithImpl<$Res, $Val extends Store>
    implements $StoreCopyWith<$Res> {
  _$StoreCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? address = null,
    Object? city = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
              as String,
      city: null == city
          ? _value.city
          : city // ignore: cast_nullable_to_non_nullable
              as City,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $CityCopyWith<$Res> get city {
    return $CityCopyWith<$Res>(_value.city, (value) {
      return _then(_value.copyWith(city: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_StoreCopyWith<$Res> implements $StoreCopyWith<$Res> {
  factory _$$_StoreCopyWith(_$_Store value, $Res Function(_$_Store) then) =
      __$$_StoreCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String id, String name, String address, City city});

  @override
  $CityCopyWith<$Res> get city;
}

/// @nodoc
class __$$_StoreCopyWithImpl<$Res> extends _$StoreCopyWithImpl<$Res, _$_Store>
    implements _$$_StoreCopyWith<$Res> {
  __$$_StoreCopyWithImpl(_$_Store _value, $Res Function(_$_Store) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? address = null,
    Object? city = null,
  }) {
    return _then(_$_Store(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
              as String,
      city: null == city
          ? _value.city
          : city // ignore: cast_nullable_to_non_nullable
              as City,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Store with DiagnosticableTreeMixin implements _Store {
  _$_Store(
      {required this.id,
      required this.name,
      required this.address,
      required this.city});

  factory _$_Store.fromJson(Map<String, dynamic> json) =>
      _$$_StoreFromJson(json);

  @override
  final String id;
  @override
  final String name;
  @override
  final String address;
  @override
  final City city;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'Store(id: $id, name: $name, address: $address, city: $city)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'Store'))
      ..add(DiagnosticsProperty('id', id))
      ..add(DiagnosticsProperty('name', name))
      ..add(DiagnosticsProperty('address', address))
      ..add(DiagnosticsProperty('city', city));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Store &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.address, address) || other.address == address) &&
            (identical(other.city, city) || other.city == city));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name, address, city);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_StoreCopyWith<_$_Store> get copyWith =>
      __$$_StoreCopyWithImpl<_$_Store>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_StoreToJson(
      this,
    );
  }
}

abstract class _Store implements Store {
  factory _Store(
      {required final String id,
      required final String name,
      required final String address,
      required final City city}) = _$_Store;

  factory _Store.fromJson(Map<String, dynamic> json) = _$_Store.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  String get address;
  @override
  City get city;
  @override
  @JsonKey(ignore: true)
  _$$_StoreCopyWith<_$_Store> get copyWith =>
      throw _privateConstructorUsedError;
}

City _$CityFromJson(Map<String, dynamic> json) {
  return _City.fromJson(json);
}

/// @nodoc
mixin _$City {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $CityCopyWith<City> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $CityCopyWith<$Res> {
  factory $CityCopyWith(City value, $Res Function(City) then) =
      _$CityCopyWithImpl<$Res, City>;
  @useResult
  $Res call({String id, String name});
}

/// @nodoc
class _$CityCopyWithImpl<$Res, $Val extends City>
    implements $CityCopyWith<$Res> {
  _$CityCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_CityCopyWith<$Res> implements $CityCopyWith<$Res> {
  factory _$$_CityCopyWith(_$_City value, $Res Function(_$_City) then) =
      __$$_CityCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String id, String name});
}

/// @nodoc
class __$$_CityCopyWithImpl<$Res> extends _$CityCopyWithImpl<$Res, _$_City>
    implements _$$_CityCopyWith<$Res> {
  __$$_CityCopyWithImpl(_$_City _value, $Res Function(_$_City) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
  }) {
    return _then(_$_City(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_City with DiagnosticableTreeMixin implements _City {
  _$_City({required this.id, required this.name});

  factory _$_City.fromJson(Map<String, dynamic> json) => _$$_CityFromJson(json);

  @override
  final String id;
  @override
  final String name;

  @override
  String toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) {
    return 'City(id: $id, name: $name)';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
      ..add(DiagnosticsProperty('type', 'City'))
      ..add(DiagnosticsProperty('id', id))
      ..add(DiagnosticsProperty('name', name));
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_City &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_CityCopyWith<_$_City> get copyWith =>
      __$$_CityCopyWithImpl<_$_City>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_CityToJson(
      this,
    );
  }
}

abstract class _City implements City {
  factory _City({required final String id, required final String name}) =
      _$_City;

  factory _City.fromJson(Map<String, dynamic> json) = _$_City.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  @JsonKey(ignore: true)
  _$$_CityCopyWith<_$_City> get copyWith => throw _privateConstructorUsedError;
}
