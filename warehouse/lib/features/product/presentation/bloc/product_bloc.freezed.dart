// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'product_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$ProductEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, String status) receiveProductEvent,
    required TResult Function() logOut,
    required TResult Function() getAllProduct,
    required TResult Function() getReceiveAndGiveProducts,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, String status)? receiveProductEvent,
    TResult? Function()? logOut,
    TResult? Function()? getAllProduct,
    TResult? Function()? getReceiveAndGiveProducts,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, String status)? receiveProductEvent,
    TResult Function()? logOut,
    TResult Function()? getAllProduct,
    TResult Function()? getReceiveAndGiveProducts,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
    required TResult Function(_logOut value) logOut,
    required TResult Function(_getAllProduct value) getAllProduct,
    required TResult Function(_getReceiveAndGiveProducts value)
        getReceiveAndGiveProducts,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
    TResult? Function(_logOut value)? logOut,
    TResult? Function(_getAllProduct value)? getAllProduct,
    TResult? Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    TResult Function(_logOut value)? logOut,
    TResult Function(_getAllProduct value)? getAllProduct,
    TResult Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ProductEventCopyWith<$Res> {
  factory $ProductEventCopyWith(
          ProductEvent value, $Res Function(ProductEvent) then) =
      _$ProductEventCopyWithImpl<$Res, ProductEvent>;
}

/// @nodoc
class _$ProductEventCopyWithImpl<$Res, $Val extends ProductEvent>
    implements $ProductEventCopyWith<$Res> {
  _$ProductEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_getProductEventCopyWith<$Res> {
  factory _$$_getProductEventCopyWith(
          _$_getProductEvent value, $Res Function(_$_getProductEvent) then) =
      __$$_getProductEventCopyWithImpl<$Res>;
  @useResult
  $Res call({String id});
}

/// @nodoc
class __$$_getProductEventCopyWithImpl<$Res>
    extends _$ProductEventCopyWithImpl<$Res, _$_getProductEvent>
    implements _$$_getProductEventCopyWith<$Res> {
  __$$_getProductEventCopyWithImpl(
      _$_getProductEvent _value, $Res Function(_$_getProductEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
  }) {
    return _then(_$_getProductEvent(
      null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_getProductEvent implements _getProductEvent {
  const _$_getProductEvent(this.id);

  @override
  final String id;

  @override
  String toString() {
    return 'ProductEvent.getProductEvent(id: $id)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_getProductEvent &&
            (identical(other.id, id) || other.id == id));
  }

  @override
  int get hashCode => Object.hash(runtimeType, id);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_getProductEventCopyWith<_$_getProductEvent> get copyWith =>
      __$$_getProductEventCopyWithImpl<_$_getProductEvent>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, String status) receiveProductEvent,
    required TResult Function() logOut,
    required TResult Function() getAllProduct,
    required TResult Function() getReceiveAndGiveProducts,
  }) {
    return getProductEvent(id);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, String status)? receiveProductEvent,
    TResult? Function()? logOut,
    TResult? Function()? getAllProduct,
    TResult? Function()? getReceiveAndGiveProducts,
  }) {
    return getProductEvent?.call(id);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, String status)? receiveProductEvent,
    TResult Function()? logOut,
    TResult Function()? getAllProduct,
    TResult Function()? getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (getProductEvent != null) {
      return getProductEvent(id);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
    required TResult Function(_logOut value) logOut,
    required TResult Function(_getAllProduct value) getAllProduct,
    required TResult Function(_getReceiveAndGiveProducts value)
        getReceiveAndGiveProducts,
  }) {
    return getProductEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
    TResult? Function(_logOut value)? logOut,
    TResult? Function(_getAllProduct value)? getAllProduct,
    TResult? Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
  }) {
    return getProductEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    TResult Function(_logOut value)? logOut,
    TResult Function(_getAllProduct value)? getAllProduct,
    TResult Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (getProductEvent != null) {
      return getProductEvent(this);
    }
    return orElse();
  }
}

abstract class _getProductEvent implements ProductEvent {
  const factory _getProductEvent(final String id) = _$_getProductEvent;

  String get id;
  @JsonKey(ignore: true)
  _$$_getProductEventCopyWith<_$_getProductEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_receiveProductEventCopyWith<$Res> {
  factory _$$_receiveProductEventCopyWith(_$_receiveProductEvent value,
          $Res Function(_$_receiveProductEvent) then) =
      __$$_receiveProductEventCopyWithImpl<$Res>;
  @useResult
  $Res call({String id, String status});
}

/// @nodoc
class __$$_receiveProductEventCopyWithImpl<$Res>
    extends _$ProductEventCopyWithImpl<$Res, _$_receiveProductEvent>
    implements _$$_receiveProductEventCopyWith<$Res> {
  __$$_receiveProductEventCopyWithImpl(_$_receiveProductEvent _value,
      $Res Function(_$_receiveProductEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? status = null,
  }) {
    return _then(_$_receiveProductEvent(
      null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_receiveProductEvent implements _receiveProductEvent {
  const _$_receiveProductEvent(this.id, this.status);

  @override
  final String id;
  @override
  final String status;

  @override
  String toString() {
    return 'ProductEvent.receiveProductEvent(id: $id, status: $status)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_receiveProductEvent &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.status, status) || other.status == status));
  }

  @override
  int get hashCode => Object.hash(runtimeType, id, status);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_receiveProductEventCopyWith<_$_receiveProductEvent> get copyWith =>
      __$$_receiveProductEventCopyWithImpl<_$_receiveProductEvent>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, String status) receiveProductEvent,
    required TResult Function() logOut,
    required TResult Function() getAllProduct,
    required TResult Function() getReceiveAndGiveProducts,
  }) {
    return receiveProductEvent(id, status);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, String status)? receiveProductEvent,
    TResult? Function()? logOut,
    TResult? Function()? getAllProduct,
    TResult? Function()? getReceiveAndGiveProducts,
  }) {
    return receiveProductEvent?.call(id, status);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, String status)? receiveProductEvent,
    TResult Function()? logOut,
    TResult Function()? getAllProduct,
    TResult Function()? getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (receiveProductEvent != null) {
      return receiveProductEvent(id, status);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
    required TResult Function(_logOut value) logOut,
    required TResult Function(_getAllProduct value) getAllProduct,
    required TResult Function(_getReceiveAndGiveProducts value)
        getReceiveAndGiveProducts,
  }) {
    return receiveProductEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
    TResult? Function(_logOut value)? logOut,
    TResult? Function(_getAllProduct value)? getAllProduct,
    TResult? Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
  }) {
    return receiveProductEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    TResult Function(_logOut value)? logOut,
    TResult Function(_getAllProduct value)? getAllProduct,
    TResult Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (receiveProductEvent != null) {
      return receiveProductEvent(this);
    }
    return orElse();
  }
}

abstract class _receiveProductEvent implements ProductEvent {
  const factory _receiveProductEvent(final String id, final String status) =
      _$_receiveProductEvent;

  String get id;
  String get status;
  @JsonKey(ignore: true)
  _$$_receiveProductEventCopyWith<_$_receiveProductEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_logOutCopyWith<$Res> {
  factory _$$_logOutCopyWith(_$_logOut value, $Res Function(_$_logOut) then) =
      __$$_logOutCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_logOutCopyWithImpl<$Res>
    extends _$ProductEventCopyWithImpl<$Res, _$_logOut>
    implements _$$_logOutCopyWith<$Res> {
  __$$_logOutCopyWithImpl(_$_logOut _value, $Res Function(_$_logOut) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_logOut implements _logOut {
  const _$_logOut();

  @override
  String toString() {
    return 'ProductEvent.logOut()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_logOut);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, String status) receiveProductEvent,
    required TResult Function() logOut,
    required TResult Function() getAllProduct,
    required TResult Function() getReceiveAndGiveProducts,
  }) {
    return logOut();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, String status)? receiveProductEvent,
    TResult? Function()? logOut,
    TResult? Function()? getAllProduct,
    TResult? Function()? getReceiveAndGiveProducts,
  }) {
    return logOut?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, String status)? receiveProductEvent,
    TResult Function()? logOut,
    TResult Function()? getAllProduct,
    TResult Function()? getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (logOut != null) {
      return logOut();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
    required TResult Function(_logOut value) logOut,
    required TResult Function(_getAllProduct value) getAllProduct,
    required TResult Function(_getReceiveAndGiveProducts value)
        getReceiveAndGiveProducts,
  }) {
    return logOut(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
    TResult? Function(_logOut value)? logOut,
    TResult? Function(_getAllProduct value)? getAllProduct,
    TResult? Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
  }) {
    return logOut?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    TResult Function(_logOut value)? logOut,
    TResult Function(_getAllProduct value)? getAllProduct,
    TResult Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (logOut != null) {
      return logOut(this);
    }
    return orElse();
  }
}

abstract class _logOut implements ProductEvent {
  const factory _logOut() = _$_logOut;
}

/// @nodoc
abstract class _$$_getAllProductCopyWith<$Res> {
  factory _$$_getAllProductCopyWith(
          _$_getAllProduct value, $Res Function(_$_getAllProduct) then) =
      __$$_getAllProductCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_getAllProductCopyWithImpl<$Res>
    extends _$ProductEventCopyWithImpl<$Res, _$_getAllProduct>
    implements _$$_getAllProductCopyWith<$Res> {
  __$$_getAllProductCopyWithImpl(
      _$_getAllProduct _value, $Res Function(_$_getAllProduct) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_getAllProduct implements _getAllProduct {
  const _$_getAllProduct();

  @override
  String toString() {
    return 'ProductEvent.getAllProduct()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_getAllProduct);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, String status) receiveProductEvent,
    required TResult Function() logOut,
    required TResult Function() getAllProduct,
    required TResult Function() getReceiveAndGiveProducts,
  }) {
    return getAllProduct();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, String status)? receiveProductEvent,
    TResult? Function()? logOut,
    TResult? Function()? getAllProduct,
    TResult? Function()? getReceiveAndGiveProducts,
  }) {
    return getAllProduct?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, String status)? receiveProductEvent,
    TResult Function()? logOut,
    TResult Function()? getAllProduct,
    TResult Function()? getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (getAllProduct != null) {
      return getAllProduct();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
    required TResult Function(_logOut value) logOut,
    required TResult Function(_getAllProduct value) getAllProduct,
    required TResult Function(_getReceiveAndGiveProducts value)
        getReceiveAndGiveProducts,
  }) {
    return getAllProduct(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
    TResult? Function(_logOut value)? logOut,
    TResult? Function(_getAllProduct value)? getAllProduct,
    TResult? Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
  }) {
    return getAllProduct?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    TResult Function(_logOut value)? logOut,
    TResult Function(_getAllProduct value)? getAllProduct,
    TResult Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (getAllProduct != null) {
      return getAllProduct(this);
    }
    return orElse();
  }
}

abstract class _getAllProduct implements ProductEvent {
  const factory _getAllProduct() = _$_getAllProduct;
}

/// @nodoc
abstract class _$$_getReceiveAndGiveProductsCopyWith<$Res> {
  factory _$$_getReceiveAndGiveProductsCopyWith(
          _$_getReceiveAndGiveProducts value,
          $Res Function(_$_getReceiveAndGiveProducts) then) =
      __$$_getReceiveAndGiveProductsCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_getReceiveAndGiveProductsCopyWithImpl<$Res>
    extends _$ProductEventCopyWithImpl<$Res, _$_getReceiveAndGiveProducts>
    implements _$$_getReceiveAndGiveProductsCopyWith<$Res> {
  __$$_getReceiveAndGiveProductsCopyWithImpl(
      _$_getReceiveAndGiveProducts _value,
      $Res Function(_$_getReceiveAndGiveProducts) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_getReceiveAndGiveProducts implements _getReceiveAndGiveProducts {
  const _$_getReceiveAndGiveProducts();

  @override
  String toString() {
    return 'ProductEvent.getReceiveAndGiveProducts()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_getReceiveAndGiveProducts);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, String status) receiveProductEvent,
    required TResult Function() logOut,
    required TResult Function() getAllProduct,
    required TResult Function() getReceiveAndGiveProducts,
  }) {
    return getReceiveAndGiveProducts();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, String status)? receiveProductEvent,
    TResult? Function()? logOut,
    TResult? Function()? getAllProduct,
    TResult? Function()? getReceiveAndGiveProducts,
  }) {
    return getReceiveAndGiveProducts?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, String status)? receiveProductEvent,
    TResult Function()? logOut,
    TResult Function()? getAllProduct,
    TResult Function()? getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (getReceiveAndGiveProducts != null) {
      return getReceiveAndGiveProducts();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
    required TResult Function(_logOut value) logOut,
    required TResult Function(_getAllProduct value) getAllProduct,
    required TResult Function(_getReceiveAndGiveProducts value)
        getReceiveAndGiveProducts,
  }) {
    return getReceiveAndGiveProducts(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
    TResult? Function(_logOut value)? logOut,
    TResult? Function(_getAllProduct value)? getAllProduct,
    TResult? Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
  }) {
    return getReceiveAndGiveProducts?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    TResult Function(_logOut value)? logOut,
    TResult Function(_getAllProduct value)? getAllProduct,
    TResult Function(_getReceiveAndGiveProducts value)?
        getReceiveAndGiveProducts,
    required TResult orElse(),
  }) {
    if (getReceiveAndGiveProducts != null) {
      return getReceiveAndGiveProducts(this);
    }
    return orElse();
  }
}

abstract class _getReceiveAndGiveProducts implements ProductEvent {
  const factory _getReceiveAndGiveProducts() = _$_getReceiveAndGiveProducts;
}

/// @nodoc
mixin _$ProductState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ProductStateCopyWith<$Res> {
  factory $ProductStateCopyWith(
          ProductState value, $Res Function(ProductState) then) =
      _$ProductStateCopyWithImpl<$Res, ProductState>;
}

/// @nodoc
class _$ProductStateCopyWithImpl<$Res, $Val extends ProductState>
    implements $ProductStateCopyWith<$Res> {
  _$ProductStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_InitialCopyWith<$Res> {
  factory _$$_InitialCopyWith(
          _$_Initial value, $Res Function(_$_Initial) then) =
      __$$_InitialCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_InitialCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_Initial>
    implements _$$_InitialCopyWith<$Res> {
  __$$_InitialCopyWithImpl(_$_Initial _value, $Res Function(_$_Initial) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_Initial implements _Initial {
  const _$_Initial();

  @override
  String toString() {
    return 'ProductState.initial()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_Initial);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return initial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return initial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (initial != null) {
      return initial();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return initial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return initial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (initial != null) {
      return initial(this);
    }
    return orElse();
  }
}

abstract class _Initial implements ProductState {
  const factory _Initial() = _$_Initial;
}

/// @nodoc
abstract class _$$_loadingCopyWith<$Res> {
  factory _$$_loadingCopyWith(
          _$_loading value, $Res Function(_$_loading) then) =
      __$$_loadingCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_loadingCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_loading>
    implements _$$_loadingCopyWith<$Res> {
  __$$_loadingCopyWithImpl(_$_loading _value, $Res Function(_$_loading) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_loading implements _loading {
  const _$_loading();

  @override
  String toString() {
    return 'ProductState.loading()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_loading);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class _loading implements ProductState {
  const factory _loading() = _$_loading;
}

/// @nodoc
abstract class _$$_successGetProductStateCopyWith<$Res> {
  factory _$$_successGetProductStateCopyWith(_$_successGetProductState value,
          $Res Function(_$_successGetProductState) then) =
      __$$_successGetProductStateCopyWithImpl<$Res>;
  @useResult
  $Res call({ProductModel productModel});

  $ProductModelCopyWith<$Res> get productModel;
}

/// @nodoc
class __$$_successGetProductStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_successGetProductState>
    implements _$$_successGetProductStateCopyWith<$Res> {
  __$$_successGetProductStateCopyWithImpl(_$_successGetProductState _value,
      $Res Function(_$_successGetProductState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? productModel = null,
  }) {
    return _then(_$_successGetProductState(
      null == productModel
          ? _value.productModel
          : productModel // ignore: cast_nullable_to_non_nullable
              as ProductModel,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $ProductModelCopyWith<$Res> get productModel {
    return $ProductModelCopyWith<$Res>(_value.productModel, (value) {
      return _then(_value.copyWith(productModel: value));
    });
  }
}

/// @nodoc

class _$_successGetProductState implements _successGetProductState {
  const _$_successGetProductState(this.productModel);

  @override
  final ProductModel productModel;

  @override
  String toString() {
    return 'ProductState.successGetProductState(productModel: $productModel)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successGetProductState &&
            (identical(other.productModel, productModel) ||
                other.productModel == productModel));
  }

  @override
  int get hashCode => Object.hash(runtimeType, productModel);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successGetProductStateCopyWith<_$_successGetProductState> get copyWith =>
      __$$_successGetProductStateCopyWithImpl<_$_successGetProductState>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetProductState(productModel);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return successGetProductState?.call(productModel);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successGetProductState != null) {
      return successGetProductState(productModel);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetProductState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetProductState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successGetProductState != null) {
      return successGetProductState(this);
    }
    return orElse();
  }
}

abstract class _successGetProductState implements ProductState {
  const factory _successGetProductState(final ProductModel productModel) =
      _$_successGetProductState;

  ProductModel get productModel;
  @JsonKey(ignore: true)
  _$$_successGetProductStateCopyWith<_$_successGetProductState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorGetProductStateCopyWith<$Res> {
  factory _$$_errorGetProductStateCopyWith(_$_errorGetProductState value,
          $Res Function(_$_errorGetProductState) then) =
      __$$_errorGetProductStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorGetProductStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_errorGetProductState>
    implements _$$_errorGetProductStateCopyWith<$Res> {
  __$$_errorGetProductStateCopyWithImpl(_$_errorGetProductState _value,
      $Res Function(_$_errorGetProductState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorGetProductState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorGetProductState implements _errorGetProductState {
  const _$_errorGetProductState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'ProductState.errorGetProductState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorGetProductState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorGetProductStateCopyWith<_$_errorGetProductState> get copyWith =>
      __$$_errorGetProductStateCopyWithImpl<_$_errorGetProductState>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetProductState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetProductState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorGetProductState != null) {
      return errorGetProductState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetProductState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetProductState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorGetProductState != null) {
      return errorGetProductState(this);
    }
    return orElse();
  }
}

abstract class _errorGetProductState implements ProductState {
  const factory _errorGetProductState(final String message) =
      _$_errorGetProductState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorGetProductStateCopyWith<_$_errorGetProductState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_successReceiveProductStateCopyWith<$Res> {
  factory _$$_successReceiveProductStateCopyWith(
          _$_successReceiveProductState value,
          $Res Function(_$_successReceiveProductState) then) =
      __$$_successReceiveProductStateCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_successReceiveProductStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_successReceiveProductState>
    implements _$$_successReceiveProductStateCopyWith<$Res> {
  __$$_successReceiveProductStateCopyWithImpl(
      _$_successReceiveProductState _value,
      $Res Function(_$_successReceiveProductState) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_successReceiveProductState implements _successReceiveProductState {
  const _$_successReceiveProductState();

  @override
  String toString() {
    return 'ProductState.successReceiveProductState()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successReceiveProductState);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successReceiveProductState();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return successReceiveProductState?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successReceiveProductState != null) {
      return successReceiveProductState();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successReceiveProductState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return successReceiveProductState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successReceiveProductState != null) {
      return successReceiveProductState(this);
    }
    return orElse();
  }
}

abstract class _successReceiveProductState implements ProductState {
  const factory _successReceiveProductState() = _$_successReceiveProductState;
}

/// @nodoc
abstract class _$$_errorReceiveProductStateCopyWith<$Res> {
  factory _$$_errorReceiveProductStateCopyWith(
          _$_errorReceiveProductState value,
          $Res Function(_$_errorReceiveProductState) then) =
      __$$_errorReceiveProductStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorReceiveProductStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_errorReceiveProductState>
    implements _$$_errorReceiveProductStateCopyWith<$Res> {
  __$$_errorReceiveProductStateCopyWithImpl(_$_errorReceiveProductState _value,
      $Res Function(_$_errorReceiveProductState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorReceiveProductState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorReceiveProductState implements _errorReceiveProductState {
  const _$_errorReceiveProductState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'ProductState.errorReceiveProductState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorReceiveProductState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorReceiveProductStateCopyWith<_$_errorReceiveProductState>
      get copyWith => __$$_errorReceiveProductStateCopyWithImpl<
          _$_errorReceiveProductState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorReceiveProductState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return errorReceiveProductState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorReceiveProductState != null) {
      return errorReceiveProductState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorReceiveProductState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorReceiveProductState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorReceiveProductState != null) {
      return errorReceiveProductState(this);
    }
    return orElse();
  }
}

abstract class _errorReceiveProductState implements ProductState {
  const factory _errorReceiveProductState(final String message) =
      _$_errorReceiveProductState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorReceiveProductStateCopyWith<_$_errorReceiveProductState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_successLogOutStateCopyWith<$Res> {
  factory _$$_successLogOutStateCopyWith(_$_successLogOutState value,
          $Res Function(_$_successLogOutState) then) =
      __$$_successLogOutStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_successLogOutStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_successLogOutState>
    implements _$$_successLogOutStateCopyWith<$Res> {
  __$$_successLogOutStateCopyWithImpl(
      _$_successLogOutState _value, $Res Function(_$_successLogOutState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_successLogOutState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_successLogOutState implements _successLogOutState {
  const _$_successLogOutState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'ProductState.successLogOutState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successLogOutState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successLogOutStateCopyWith<_$_successLogOutState> get copyWith =>
      __$$_successLogOutStateCopyWithImpl<_$_successLogOutState>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successLogOutState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return successLogOutState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successLogOutState != null) {
      return successLogOutState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successLogOutState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return successLogOutState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successLogOutState != null) {
      return successLogOutState(this);
    }
    return orElse();
  }
}

abstract class _successLogOutState implements ProductState {
  const factory _successLogOutState(final String message) =
      _$_successLogOutState;

  String get message;
  @JsonKey(ignore: true)
  _$$_successLogOutStateCopyWith<_$_successLogOutState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_successGetAllProductStateCopyWith<$Res> {
  factory _$$_successGetAllProductStateCopyWith(
          _$_successGetAllProductState value,
          $Res Function(_$_successGetAllProductState) then) =
      __$$_successGetAllProductStateCopyWithImpl<$Res>;
  @useResult
  $Res call({List<AllProductModel> allProductModel});
}

/// @nodoc
class __$$_successGetAllProductStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_successGetAllProductState>
    implements _$$_successGetAllProductStateCopyWith<$Res> {
  __$$_successGetAllProductStateCopyWithImpl(
      _$_successGetAllProductState _value,
      $Res Function(_$_successGetAllProductState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? allProductModel = null,
  }) {
    return _then(_$_successGetAllProductState(
      null == allProductModel
          ? _value._allProductModel
          : allProductModel // ignore: cast_nullable_to_non_nullable
              as List<AllProductModel>,
    ));
  }
}

/// @nodoc

class _$_successGetAllProductState implements _successGetAllProductState {
  const _$_successGetAllProductState(
      final List<AllProductModel> allProductModel)
      : _allProductModel = allProductModel;

  final List<AllProductModel> _allProductModel;
  @override
  List<AllProductModel> get allProductModel {
    if (_allProductModel is EqualUnmodifiableListView) return _allProductModel;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_allProductModel);
  }

  @override
  String toString() {
    return 'ProductState.successGetAllProductState(allProductModel: $allProductModel)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successGetAllProductState &&
            const DeepCollectionEquality()
                .equals(other._allProductModel, _allProductModel));
  }

  @override
  int get hashCode => Object.hash(
      runtimeType, const DeepCollectionEquality().hash(_allProductModel));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successGetAllProductStateCopyWith<_$_successGetAllProductState>
      get copyWith => __$$_successGetAllProductStateCopyWithImpl<
          _$_successGetAllProductState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetAllProductState(allProductModel);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return successGetAllProductState?.call(allProductModel);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successGetAllProductState != null) {
      return successGetAllProductState(allProductModel);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetAllProductState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetAllProductState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successGetAllProductState != null) {
      return successGetAllProductState(this);
    }
    return orElse();
  }
}

abstract class _successGetAllProductState implements ProductState {
  const factory _successGetAllProductState(
          final List<AllProductModel> allProductModel) =
      _$_successGetAllProductState;

  List<AllProductModel> get allProductModel;
  @JsonKey(ignore: true)
  _$$_successGetAllProductStateCopyWith<_$_successGetAllProductState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorGetAllProductStateCopyWith<$Res> {
  factory _$$_errorGetAllProductStateCopyWith(_$_errorGetAllProductState value,
          $Res Function(_$_errorGetAllProductState) then) =
      __$$_errorGetAllProductStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorGetAllProductStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res, _$_errorGetAllProductState>
    implements _$$_errorGetAllProductStateCopyWith<$Res> {
  __$$_errorGetAllProductStateCopyWithImpl(_$_errorGetAllProductState _value,
      $Res Function(_$_errorGetAllProductState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorGetAllProductState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorGetAllProductState implements _errorGetAllProductState {
  const _$_errorGetAllProductState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'ProductState.errorGetAllProductState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorGetAllProductState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorGetAllProductStateCopyWith<_$_errorGetAllProductState>
      get copyWith =>
          __$$_errorGetAllProductStateCopyWithImpl<_$_errorGetAllProductState>(
              this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetAllProductState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetAllProductState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorGetAllProductState != null) {
      return errorGetAllProductState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetAllProductState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetAllProductState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorGetAllProductState != null) {
      return errorGetAllProductState(this);
    }
    return orElse();
  }
}

abstract class _errorGetAllProductState implements ProductState {
  const factory _errorGetAllProductState(final String message) =
      _$_errorGetAllProductState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorGetAllProductStateCopyWith<_$_errorGetAllProductState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_successGetReceiveAndGiveProductsStateCopyWith<$Res> {
  factory _$$_successGetReceiveAndGiveProductsStateCopyWith(
          _$_successGetReceiveAndGiveProductsState value,
          $Res Function(_$_successGetReceiveAndGiveProductsState) then) =
      __$$_successGetReceiveAndGiveProductsStateCopyWithImpl<$Res>;
  @useResult
  $Res call({ReceiveAndGiveModel receiveAndGiveModel});
}

/// @nodoc
class __$$_successGetReceiveAndGiveProductsStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res,
        _$_successGetReceiveAndGiveProductsState>
    implements _$$_successGetReceiveAndGiveProductsStateCopyWith<$Res> {
  __$$_successGetReceiveAndGiveProductsStateCopyWithImpl(
      _$_successGetReceiveAndGiveProductsState _value,
      $Res Function(_$_successGetReceiveAndGiveProductsState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? receiveAndGiveModel = null,
  }) {
    return _then(_$_successGetReceiveAndGiveProductsState(
      null == receiveAndGiveModel
          ? _value.receiveAndGiveModel
          : receiveAndGiveModel // ignore: cast_nullable_to_non_nullable
              as ReceiveAndGiveModel,
    ));
  }
}

/// @nodoc

class _$_successGetReceiveAndGiveProductsState
    implements _successGetReceiveAndGiveProductsState {
  const _$_successGetReceiveAndGiveProductsState(this.receiveAndGiveModel);

  @override
  final ReceiveAndGiveModel receiveAndGiveModel;

  @override
  String toString() {
    return 'ProductState.successGetReceiveAndGiveProductsState(receiveAndGiveModel: $receiveAndGiveModel)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successGetReceiveAndGiveProductsState &&
            (identical(other.receiveAndGiveModel, receiveAndGiveModel) ||
                other.receiveAndGiveModel == receiveAndGiveModel));
  }

  @override
  int get hashCode => Object.hash(runtimeType, receiveAndGiveModel);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successGetReceiveAndGiveProductsStateCopyWith<
          _$_successGetReceiveAndGiveProductsState>
      get copyWith => __$$_successGetReceiveAndGiveProductsStateCopyWithImpl<
          _$_successGetReceiveAndGiveProductsState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetReceiveAndGiveProductsState(receiveAndGiveModel);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return successGetReceiveAndGiveProductsState?.call(receiveAndGiveModel);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successGetReceiveAndGiveProductsState != null) {
      return successGetReceiveAndGiveProductsState(receiveAndGiveModel);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetReceiveAndGiveProductsState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return successGetReceiveAndGiveProductsState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (successGetReceiveAndGiveProductsState != null) {
      return successGetReceiveAndGiveProductsState(this);
    }
    return orElse();
  }
}

abstract class _successGetReceiveAndGiveProductsState implements ProductState {
  const factory _successGetReceiveAndGiveProductsState(
          final ReceiveAndGiveModel receiveAndGiveModel) =
      _$_successGetReceiveAndGiveProductsState;

  ReceiveAndGiveModel get receiveAndGiveModel;
  @JsonKey(ignore: true)
  _$$_successGetReceiveAndGiveProductsStateCopyWith<
          _$_successGetReceiveAndGiveProductsState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorGetReceiveAndGiveProductsStateCopyWith<$Res> {
  factory _$$_errorGetReceiveAndGiveProductsStateCopyWith(
          _$_errorGetReceiveAndGiveProductsState value,
          $Res Function(_$_errorGetReceiveAndGiveProductsState) then) =
      __$$_errorGetReceiveAndGiveProductsStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorGetReceiveAndGiveProductsStateCopyWithImpl<$Res>
    extends _$ProductStateCopyWithImpl<$Res,
        _$_errorGetReceiveAndGiveProductsState>
    implements _$$_errorGetReceiveAndGiveProductsStateCopyWith<$Res> {
  __$$_errorGetReceiveAndGiveProductsStateCopyWithImpl(
      _$_errorGetReceiveAndGiveProductsState _value,
      $Res Function(_$_errorGetReceiveAndGiveProductsState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorGetReceiveAndGiveProductsState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorGetReceiveAndGiveProductsState
    implements _errorGetReceiveAndGiveProductsState {
  const _$_errorGetReceiveAndGiveProductsState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'ProductState.errorGetReceiveAndGiveProductsState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorGetReceiveAndGiveProductsState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorGetReceiveAndGiveProductsStateCopyWith<
          _$_errorGetReceiveAndGiveProductsState>
      get copyWith => __$$_errorGetReceiveAndGiveProductsStateCopyWithImpl<
          _$_errorGetReceiveAndGiveProductsState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() initial,
    required TResult Function() loading,
    required TResult Function(ProductModel productModel) successGetProductState,
    required TResult Function(String message) errorGetProductState,
    required TResult Function() successReceiveProductState,
    required TResult Function(String message) errorReceiveProductState,
    required TResult Function(String message) successLogOutState,
    required TResult Function(List<AllProductModel> allProductModel)
        successGetAllProductState,
    required TResult Function(String message) errorGetAllProductState,
    required TResult Function(ReceiveAndGiveModel receiveAndGiveModel)
        successGetReceiveAndGiveProductsState,
    required TResult Function(String message)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetReceiveAndGiveProductsState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? initial,
    TResult? Function()? loading,
    TResult? Function(ProductModel productModel)? successGetProductState,
    TResult? Function(String message)? errorGetProductState,
    TResult? Function()? successReceiveProductState,
    TResult? Function(String message)? errorReceiveProductState,
    TResult? Function(String message)? successLogOutState,
    TResult? Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult? Function(String message)? errorGetAllProductState,
    TResult? Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(String message)? errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetReceiveAndGiveProductsState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? initial,
    TResult Function()? loading,
    TResult Function(ProductModel productModel)? successGetProductState,
    TResult Function(String message)? errorGetProductState,
    TResult Function()? successReceiveProductState,
    TResult Function(String message)? errorReceiveProductState,
    TResult Function(String message)? successLogOutState,
    TResult Function(List<AllProductModel> allProductModel)?
        successGetAllProductState,
    TResult Function(String message)? errorGetAllProductState,
    TResult Function(ReceiveAndGiveModel receiveAndGiveModel)?
        successGetReceiveAndGiveProductsState,
    TResult Function(String message)? errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorGetReceiveAndGiveProductsState != null) {
      return errorGetReceiveAndGiveProductsState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_Initial value) initial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successGetProductState value)
        successGetProductState,
    required TResult Function(_errorGetProductState value) errorGetProductState,
    required TResult Function(_successReceiveProductState value)
        successReceiveProductState,
    required TResult Function(_errorReceiveProductState value)
        errorReceiveProductState,
    required TResult Function(_successLogOutState value) successLogOutState,
    required TResult Function(_successGetAllProductState value)
        successGetAllProductState,
    required TResult Function(_errorGetAllProductState value)
        errorGetAllProductState,
    required TResult Function(_successGetReceiveAndGiveProductsState value)
        successGetReceiveAndGiveProductsState,
    required TResult Function(_errorGetReceiveAndGiveProductsState value)
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetReceiveAndGiveProductsState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_Initial value)? initial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successGetProductState value)? successGetProductState,
    TResult? Function(_errorGetProductState value)? errorGetProductState,
    TResult? Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult? Function(_errorReceiveProductState value)?
        errorReceiveProductState,
    TResult? Function(_successLogOutState value)? successLogOutState,
    TResult? Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult? Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult? Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult? Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
  }) {
    return errorGetReceiveAndGiveProductsState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_Initial value)? initial,
    TResult Function(_loading value)? loading,
    TResult Function(_successGetProductState value)? successGetProductState,
    TResult Function(_errorGetProductState value)? errorGetProductState,
    TResult Function(_successReceiveProductState value)?
        successReceiveProductState,
    TResult Function(_errorReceiveProductState value)? errorReceiveProductState,
    TResult Function(_successLogOutState value)? successLogOutState,
    TResult Function(_successGetAllProductState value)?
        successGetAllProductState,
    TResult Function(_errorGetAllProductState value)? errorGetAllProductState,
    TResult Function(_successGetReceiveAndGiveProductsState value)?
        successGetReceiveAndGiveProductsState,
    TResult Function(_errorGetReceiveAndGiveProductsState value)?
        errorGetReceiveAndGiveProductsState,
    required TResult orElse(),
  }) {
    if (errorGetReceiveAndGiveProductsState != null) {
      return errorGetReceiveAndGiveProductsState(this);
    }
    return orElse();
  }
}

abstract class _errorGetReceiveAndGiveProductsState implements ProductState {
  const factory _errorGetReceiveAndGiveProductsState(final String message) =
      _$_errorGetReceiveAndGiveProductsState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorGetReceiveAndGiveProductsStateCopyWith<
          _$_errorGetReceiveAndGiveProductsState>
      get copyWith => throw _privateConstructorUsedError;
}
