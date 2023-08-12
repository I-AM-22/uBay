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
  List<Product> get product => throw _privateConstructorUsedError;

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
  $Res call({List<Product> product});
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
  }) {
    return _then(_value.copyWith(
      product: null == product
          ? _value.product
          : product // ignore: cast_nullable_to_non_nullable
              as List<Product>,
    ) as $Val);
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
  $Res call({List<Product> product});
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
  }) {
    return _then(_$_AllProductModel(
      product: null == product
          ? _value._product
          : product // ignore: cast_nullable_to_non_nullable
              as List<Product>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_AllProductModel implements _AllProductModel {
  _$_AllProductModel({required final List<Product> product})
      : _product = product;

  factory _$_AllProductModel.fromJson(Map<String, dynamic> json) =>
      _$$_AllProductModelFromJson(json);

  final List<Product> _product;
  @override
  List<Product> get product {
    if (_product is EqualUnmodifiableListView) return _product;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_product);
  }

  @override
  String toString() {
    return 'AllProductModel(product: $product)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_AllProductModel &&
            const DeepCollectionEquality().equals(other._product, _product));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_product));

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
  factory _AllProductModel({required final List<Product> product}) =
      _$_AllProductModel;

  factory _AllProductModel.fromJson(Map<String, dynamic> json) =
      _$_AllProductModel.fromJson;

  @override
  List<Product> get product;
  @override
  @JsonKey(ignore: true)
  _$$_AllProductModelCopyWith<_$_AllProductModel> get copyWith =>
      throw _privateConstructorUsedError;
}

Product _$ProductFromJson(Map<String, dynamic> json) {
  return _Product.fromJson(json);
}

/// @nodoc
mixin _$Product {
  String get id => throw _privateConstructorUsedError;
  String get content => throw _privateConstructorUsedError;
  String get title => throw _privateConstructorUsedError;
  List<String> get photos => throw _privateConstructorUsedError;
  int get price => throw _privateConstructorUsedError;

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
      String content,
      String title,
      List<String> photos,
      int price});
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
    Object? content = null,
    Object? title = null,
    Object? photos = null,
    Object? price = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      content: null == content
          ? _value.content
          : content // ignore: cast_nullable_to_non_nullable
              as String,
      title: null == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String,
      photos: null == photos
          ? _value.photos
          : photos // ignore: cast_nullable_to_non_nullable
              as List<String>,
      price: null == price
          ? _value.price
          : price // ignore: cast_nullable_to_non_nullable
              as int,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_ProductCopyWith<$Res> implements $ProductCopyWith<$Res> {
  factory _$$_ProductCopyWith(
          _$_Product value, $Res Function(_$_Product) then) =
      __$$_ProductCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String content,
      String title,
      List<String> photos,
      int price});
}

/// @nodoc
class __$$_ProductCopyWithImpl<$Res>
    extends _$ProductCopyWithImpl<$Res, _$_Product>
    implements _$$_ProductCopyWith<$Res> {
  __$$_ProductCopyWithImpl(_$_Product _value, $Res Function(_$_Product) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? content = null,
    Object? title = null,
    Object? photos = null,
    Object? price = null,
  }) {
    return _then(_$_Product(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      content: null == content
          ? _value.content
          : content // ignore: cast_nullable_to_non_nullable
              as String,
      title: null == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String,
      photos: null == photos
          ? _value._photos
          : photos // ignore: cast_nullable_to_non_nullable
              as List<String>,
      price: null == price
          ? _value.price
          : price // ignore: cast_nullable_to_non_nullable
              as int,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_Product implements _Product {
  _$_Product(
      {required this.id,
      required this.content,
      required this.title,
      required final List<String> photos,
      required this.price})
      : _photos = photos;

  factory _$_Product.fromJson(Map<String, dynamic> json) =>
      _$$_ProductFromJson(json);

  @override
  final String id;
  @override
  final String content;
  @override
  final String title;
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
  String toString() {
    return 'Product(id: $id, content: $content, title: $title, photos: $photos, price: $price)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Product &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.content, content) || other.content == content) &&
            (identical(other.title, title) || other.title == title) &&
            const DeepCollectionEquality().equals(other._photos, _photos) &&
            (identical(other.price, price) || other.price == price));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, content, title,
      const DeepCollectionEquality().hash(_photos), price);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_ProductCopyWith<_$_Product> get copyWith =>
      __$$_ProductCopyWithImpl<_$_Product>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_ProductToJson(
      this,
    );
  }
}

abstract class _Product implements Product {
  factory _Product(
      {required final String id,
      required final String content,
      required final String title,
      required final List<String> photos,
      required final int price}) = _$_Product;

  factory _Product.fromJson(Map<String, dynamic> json) = _$_Product.fromJson;

  @override
  String get id;
  @override
  String get content;
  @override
  String get title;
  @override
  List<String> get photos;
  @override
  int get price;
  @override
  @JsonKey(ignore: true)
  _$$_ProductCopyWith<_$_Product> get copyWith =>
      throw _privateConstructorUsedError;
}
