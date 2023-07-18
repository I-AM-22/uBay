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
  String get id => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String id) getProductEvent,
    required TResult Function(String id, int status) receiveProductEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, int status)? receiveProductEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, int status)? receiveProductEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_getProductEvent value) getProductEvent,
    required TResult Function(_receiveProductEvent value) receiveProductEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $ProductEventCopyWith<ProductEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ProductEventCopyWith<$Res> {
  factory $ProductEventCopyWith(
          ProductEvent value, $Res Function(ProductEvent) then) =
      _$ProductEventCopyWithImpl<$Res, ProductEvent>;
  @useResult
  $Res call({String id});
}

/// @nodoc
class _$ProductEventCopyWithImpl<$Res, $Val extends ProductEvent>
    implements $ProductEventCopyWith<$Res> {
  _$ProductEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_getProductEventCopyWith<$Res>
    implements $ProductEventCopyWith<$Res> {
  factory _$$_getProductEventCopyWith(
          _$_getProductEvent value, $Res Function(_$_getProductEvent) then) =
      __$$_getProductEventCopyWithImpl<$Res>;
  @override
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
    required TResult Function(String id, int status) receiveProductEvent,
  }) {
    return getProductEvent(id);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, int status)? receiveProductEvent,
  }) {
    return getProductEvent?.call(id);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, int status)? receiveProductEvent,
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
  }) {
    return getProductEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
  }) {
    return getProductEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
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

  @override
  String get id;
  @override
  @JsonKey(ignore: true)
  _$$_getProductEventCopyWith<_$_getProductEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_receiveProductEventCopyWith<$Res>
    implements $ProductEventCopyWith<$Res> {
  factory _$$_receiveProductEventCopyWith(_$_receiveProductEvent value,
          $Res Function(_$_receiveProductEvent) then) =
      __$$_receiveProductEventCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String id, int status});
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
              as int,
    ));
  }
}

/// @nodoc

class _$_receiveProductEvent implements _receiveProductEvent {
  const _$_receiveProductEvent(this.id, this.status);

  @override
  final String id;
  @override
  final int status;

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
    required TResult Function(String id, int status) receiveProductEvent,
  }) {
    return receiveProductEvent(id, status);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String id)? getProductEvent,
    TResult? Function(String id, int status)? receiveProductEvent,
  }) {
    return receiveProductEvent?.call(id, status);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String id)? getProductEvent,
    TResult Function(String id, int status)? receiveProductEvent,
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
  }) {
    return receiveProductEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_getProductEvent value)? getProductEvent,
    TResult? Function(_receiveProductEvent value)? receiveProductEvent,
  }) {
    return receiveProductEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_getProductEvent value)? getProductEvent,
    TResult Function(_receiveProductEvent value)? receiveProductEvent,
    required TResult orElse(),
  }) {
    if (receiveProductEvent != null) {
      return receiveProductEvent(this);
    }
    return orElse();
  }
}

abstract class _receiveProductEvent implements ProductEvent {
  const factory _receiveProductEvent(final String id, final int status) =
      _$_receiveProductEvent;

  @override
  String get id;
  int get status;
  @override
  @JsonKey(ignore: true)
  _$$_receiveProductEventCopyWith<_$_receiveProductEvent> get copyWith =>
      throw _privateConstructorUsedError;
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
