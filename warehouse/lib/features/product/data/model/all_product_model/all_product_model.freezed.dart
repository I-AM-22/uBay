// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'all_product_model.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

AllProductModel _$AllProductModelFromJson(Map<String, dynamic> json) {
  return _AllProductModel.fromJson(json);
}

/// @nodoc
mixin _$AllProductModel {
  Product get product => throw _privateConstructorUsedError;
  Employee get employee => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $AllProductModelCopyWith<AllProductModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AllProductModelCopyWith<$Res> {
  factory $AllProductModelCopyWith(
          AllProductModel value, $Res Function(AllProductModel) then) =
      _$AllProductModelCopyWithImpl<$Res, AllProductModel>;
  @useResult
  $Res call({Product product, Employee employee});

  $ProductCopyWith<$Res> get product;
  $EmployeeCopyWith<$Res> get employee;
}

/// @nodoc
class _$AllProductModelCopyWithImpl<$Res, $Val extends AllProductModel>
    implements $AllProductModelCopyWith<$Res> {
  _$AllProductModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? product = null,
    Object? employee = null,
  }) {
    return _then(_value.copyWith(
      product: null == product
          ? _value.product
          : product // ignore: cast_nullable_to_non_nullable
              as Product,
      employee: null == employee
          ? _value.employee
          : employee // ignore: cast_nullable_to_non_nullable
              as Employee,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $ProductCopyWith<$Res> get product {
    return $ProductCopyWith<$Res>(_value.product, (value) {
      return _then(_value.copyWith(product: value) as $Val);
    });
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
abstract class _$$_AllProductModelCopyWith<$Res>
    implements $AllProductModelCopyWith<$Res> {
  factory _$$_AllProductModelCopyWith(
          _$_AllProductModel value, $Res Function(_$_AllProductModel) then) =
      __$$_AllProductModelCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({Product product, Employee employee});

  @override
  $ProductCopyWith<$Res> get product;
  @override
  $EmployeeCopyWith<$Res> get employee;
}

/// @nodoc
class __$$_AllProductModelCopyWithImpl<$Res>
    extends _$AllProductModelCopyWithImpl<$Res, _$_AllProductModel>
    implements _$$_AllProductModelCopyWith<$Res> {
  __$$_AllProductModelCopyWithImpl(
      _$_AllProductModel _value, $Res Function(_$_AllProductModel) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? product = null,
    Object? employee = null,
  }) {
    return _then(_$_AllProductModel(
      product: null == product
          ? _value.product
          : product // ignore: cast_nullable_to_non_nullable
              as Product,
      employee: null == employee
          ? _value.employee
          : employee // ignore: cast_nullable_to_non_nullable
              as Employee,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_AllProductModel implements _AllProductModel {
  const _$_AllProductModel({required this.product, required this.employee});

  factory _$_AllProductModel.fromJson(Map<String, dynamic> json) =>
      _$$_AllProductModelFromJson(json);

  @override
  final Product product;
  @override
  final Employee employee;

  @override
  String toString() {
    return 'AllProductModel(product: $product, employee: $employee)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_AllProductModel &&
            (identical(other.product, product) || other.product == product) &&
            (identical(other.employee, employee) ||
                other.employee == employee));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, product, employee);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_AllProductModelCopyWith<_$_AllProductModel> get copyWith =>
      __$$_AllProductModelCopyWithImpl<_$_AllProductModel>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_AllProductModelToJson(
      this,
    );
  }
}

abstract class _AllProductModel implements AllProductModel {
  const factory _AllProductModel(
      {required final Product product,
      required final Employee employee}) = _$_AllProductModel;

  factory _AllProductModel.fromJson(Map<String, dynamic> json) =
      _$_AllProductModel.fromJson;

  @override
  Product get product;
  @override
  Employee get employee;
  @override
  @JsonKey(ignore: true)
  _$$_AllProductModelCopyWith<_$_AllProductModel> get copyWith =>
      throw _privateConstructorUsedError;
}

Employee _$EmployeeFromJson(Map<String, dynamic> json) {
  return _employee.fromJson(json);
}

/// @nodoc
mixin _$Employee {
  String get id => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get email => throw _privateConstructorUsedError;

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
  $Res call({String id, String name, String email});
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
    Object? id = null,
    Object? name = null,
    Object? email = null,
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
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_employeeCopyWith<$Res> implements $EmployeeCopyWith<$Res> {
  factory _$$_employeeCopyWith(
          _$_employee value, $Res Function(_$_employee) then) =
      __$$_employeeCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String id, String name, String email});
}

/// @nodoc
class __$$_employeeCopyWithImpl<$Res>
    extends _$EmployeeCopyWithImpl<$Res, _$_employee>
    implements _$$_employeeCopyWith<$Res> {
  __$$_employeeCopyWithImpl(
      _$_employee _value, $Res Function(_$_employee) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? name = null,
    Object? email = null,
  }) {
    return _then(_$_employee(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_employee implements _employee {
  const _$_employee(
      {required this.id, required this.name, required this.email});

  factory _$_employee.fromJson(Map<String, dynamic> json) =>
      _$$_employeeFromJson(json);

  @override
  final String id;
  @override
  final String name;
  @override
  final String email;

  @override
  String toString() {
    return 'Employee(id: $id, name: $name, email: $email)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_employee &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.email, email) || other.email == email));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, name, email);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_employeeCopyWith<_$_employee> get copyWith =>
      __$$_employeeCopyWithImpl<_$_employee>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_employeeToJson(
      this,
    );
  }
}

abstract class _employee implements Employee {
  const factory _employee(
      {required final String id,
      required final String name,
      required final String email}) = _$_employee;

  factory _employee.fromJson(Map<String, dynamic> json) = _$_employee.fromJson;

  @override
  String get id;
  @override
  String get name;
  @override
  String get email;
  @override
  @JsonKey(ignore: true)
  _$$_employeeCopyWith<_$_employee> get copyWith =>
      throw _privateConstructorUsedError;
}

Product _$ProductFromJson(Map<String, dynamic> json) {
  return _product.fromJson(json);
}

/// @nodoc
mixin _$Product {
  String get id => throw _privateConstructorUsedError;
  String get title => throw _privateConstructorUsedError;
  String get content => throw _privateConstructorUsedError;
  List<dynamic> get coupons => throw _privateConstructorUsedError;
  List<String> get photos => throw _privateConstructorUsedError;
  int get price => throw _privateConstructorUsedError;
  DateTime get createdAt => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $ProductCopyWith<Product> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ProductCopyWith<$Res> {
  factory $ProductCopyWith(Product value, $Res Function(Product) then) =
      _$ProductCopyWithImpl<$Res, Product>;
  @useResult
  $Res call(
      {String id,
      String title,
      String content,
      List<dynamic> coupons,
      List<String> photos,
      int price,
      DateTime createdAt});
}

/// @nodoc
class _$ProductCopyWithImpl<$Res, $Val extends Product>
    implements $ProductCopyWith<$Res> {
  _$ProductCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? title = null,
    Object? content = null,
    Object? coupons = null,
    Object? photos = null,
    Object? price = null,
    Object? createdAt = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      title: null == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String,
      content: null == content
          ? _value.content
          : content // ignore: cast_nullable_to_non_nullable
              as String,
      coupons: null == coupons
          ? _value.coupons
          : coupons // ignore: cast_nullable_to_non_nullable
              as List<dynamic>,
      photos: null == photos
          ? _value.photos
          : photos // ignore: cast_nullable_to_non_nullable
              as List<String>,
      price: null == price
          ? _value.price
          : price // ignore: cast_nullable_to_non_nullable
              as int,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_productCopyWith<$Res> implements $ProductCopyWith<$Res> {
  factory _$$_productCopyWith(
          _$_product value, $Res Function(_$_product) then) =
      __$$_productCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String title,
      String content,
      List<dynamic> coupons,
      List<String> photos,
      int price,
      DateTime createdAt});
}

/// @nodoc
class __$$_productCopyWithImpl<$Res>
    extends _$ProductCopyWithImpl<$Res, _$_product>
    implements _$$_productCopyWith<$Res> {
  __$$_productCopyWithImpl(_$_product _value, $Res Function(_$_product) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? title = null,
    Object? content = null,
    Object? coupons = null,
    Object? photos = null,
    Object? price = null,
    Object? createdAt = null,
  }) {
    return _then(_$_product(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      title: null == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String,
      content: null == content
          ? _value.content
          : content // ignore: cast_nullable_to_non_nullable
              as String,
      coupons: null == coupons
          ? _value._coupons
          : coupons // ignore: cast_nullable_to_non_nullable
              as List<dynamic>,
      photos: null == photos
          ? _value._photos
          : photos // ignore: cast_nullable_to_non_nullable
              as List<String>,
      price: null == price
          ? _value.price
          : price // ignore: cast_nullable_to_non_nullable
              as int,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_product implements _product {
  const _$_product(
      {required this.id,
      required this.title,
      required this.content,
      required final List<dynamic> coupons,
      required final List<String> photos,
      required this.price,
      required this.createdAt})
      : _coupons = coupons,
        _photos = photos;

  factory _$_product.fromJson(Map<String, dynamic> json) =>
      _$$_productFromJson(json);

  @override
  final String id;
  @override
  final String title;
  @override
  final String content;
  final List<dynamic> _coupons;
  @override
  List<dynamic> get coupons {
    if (_coupons is EqualUnmodifiableListView) return _coupons;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_coupons);
  }

  final List<String> _photos;
  @override
  List<String> get photos {
    if (_photos is EqualUnmodifiableListView) return _photos;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_photos);
  }

  @override
  final int price;
  @override
  final DateTime createdAt;

  @override
  String toString() {
    return 'Product(id: $id, title: $title, content: $content, coupons: $coupons, photos: $photos, price: $price, createdAt: $createdAt)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_product &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.title, title) || other.title == title) &&
            (identical(other.content, content) || other.content == content) &&
            const DeepCollectionEquality().equals(other._coupons, _coupons) &&
            const DeepCollectionEquality().equals(other._photos, _photos) &&
            (identical(other.price, price) || other.price == price) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      title,
      content,
      const DeepCollectionEquality().hash(_coupons),
      const DeepCollectionEquality().hash(_photos),
      price,
      createdAt);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_productCopyWith<_$_product> get copyWith =>
      __$$_productCopyWithImpl<_$_product>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_productToJson(
      this,
    );
  }
}

abstract class _product implements Product {
  const factory _product(
      {required final String id,
      required final String title,
      required final String content,
      required final List<dynamic> coupons,
      required final List<String> photos,
      required final int price,
      required final DateTime createdAt}) = _$_product;

  factory _product.fromJson(Map<String, dynamic> json) = _$_product.fromJson;

  @override
  String get id;
  @override
  String get title;
  @override
  String get content;
  @override
  List<dynamic> get coupons;
  @override
  List<String> get photos;
  @override
  int get price;
  @override
  DateTime get createdAt;
  @override
  @JsonKey(ignore: true)
  _$$_productCopyWith<_$_product> get copyWith =>
      throw _privateConstructorUsedError;
}
