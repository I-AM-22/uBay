// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'user_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$UserEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String currentPassword, String password)
        updateMyPasswordEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_updateMyPasswordEvent value)
        updateMyPasswordEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UserEventCopyWith<$Res> {
  factory $UserEventCopyWith(UserEvent value, $Res Function(UserEvent) then) =
      _$UserEventCopyWithImpl<$Res, UserEvent>;
}

/// @nodoc
class _$UserEventCopyWithImpl<$Res, $Val extends UserEvent>
    implements $UserEventCopyWith<$Res> {
  _$UserEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_updateMyPasswordEventCopyWith<$Res> {
  factory _$$_updateMyPasswordEventCopyWith(_$_updateMyPasswordEvent value,
          $Res Function(_$_updateMyPasswordEvent) then) =
      __$$_updateMyPasswordEventCopyWithImpl<$Res>;
  @useResult
  $Res call({String currentPassword, String password});
}

/// @nodoc
class __$$_updateMyPasswordEventCopyWithImpl<$Res>
    extends _$UserEventCopyWithImpl<$Res, _$_updateMyPasswordEvent>
    implements _$$_updateMyPasswordEventCopyWith<$Res> {
  __$$_updateMyPasswordEventCopyWithImpl(_$_updateMyPasswordEvent _value,
      $Res Function(_$_updateMyPasswordEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? currentPassword = null,
    Object? password = null,
  }) {
    return _then(_$_updateMyPasswordEvent(
      null == currentPassword
          ? _value.currentPassword
          : currentPassword // ignore: cast_nullable_to_non_nullable
              as String,
      null == password
          ? _value.password
          : password // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_updateMyPasswordEvent implements _updateMyPasswordEvent {
  const _$_updateMyPasswordEvent(this.currentPassword, this.password);

  @override
  final String currentPassword;
  @override
  final String password;

  @override
  String toString() {
    return 'UserEvent.updateMyPasswordEvent(currentPassword: $currentPassword, password: $password)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_updateMyPasswordEvent &&
            (identical(other.currentPassword, currentPassword) ||
                other.currentPassword == currentPassword) &&
            (identical(other.password, password) ||
                other.password == password));
  }

  @override
  int get hashCode => Object.hash(runtimeType, currentPassword, password);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_updateMyPasswordEventCopyWith<_$_updateMyPasswordEvent> get copyWith =>
      __$$_updateMyPasswordEventCopyWithImpl<_$_updateMyPasswordEvent>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String currentPassword, String password)
        updateMyPasswordEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
  }) {
    return updateMyPasswordEvent(currentPassword, password);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
  }) {
    return updateMyPasswordEvent?.call(currentPassword, password);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    required TResult orElse(),
  }) {
    if (updateMyPasswordEvent != null) {
      return updateMyPasswordEvent(currentPassword, password);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_updateMyPasswordEvent value)
        updateMyPasswordEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
  }) {
    return updateMyPasswordEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
  }) {
    return updateMyPasswordEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    required TResult orElse(),
  }) {
    if (updateMyPasswordEvent != null) {
      return updateMyPasswordEvent(this);
    }
    return orElse();
  }
}

abstract class _updateMyPasswordEvent implements UserEvent {
  const factory _updateMyPasswordEvent(
          final String currentPassword, final String password) =
      _$_updateMyPasswordEvent;

  String get currentPassword;
  String get password;
  @JsonKey(ignore: true)
  _$$_updateMyPasswordEventCopyWith<_$_updateMyPasswordEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_changeIconVisibilityEventCopyWith<$Res> {
  factory _$$_changeIconVisibilityEventCopyWith(
          _$_changeIconVisibilityEvent value,
          $Res Function(_$_changeIconVisibilityEvent) then) =
      __$$_changeIconVisibilityEventCopyWithImpl<$Res>;
  @useResult
  $Res call({bool isVisible});
}

/// @nodoc
class __$$_changeIconVisibilityEventCopyWithImpl<$Res>
    extends _$UserEventCopyWithImpl<$Res, _$_changeIconVisibilityEvent>
    implements _$$_changeIconVisibilityEventCopyWith<$Res> {
  __$$_changeIconVisibilityEventCopyWithImpl(
      _$_changeIconVisibilityEvent _value,
      $Res Function(_$_changeIconVisibilityEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? isVisible = null,
  }) {
    return _then(_$_changeIconVisibilityEvent(
      null == isVisible
          ? _value.isVisible
          : isVisible // ignore: cast_nullable_to_non_nullable
              as bool,
    ));
  }
}

/// @nodoc

class _$_changeIconVisibilityEvent implements _changeIconVisibilityEvent {
  const _$_changeIconVisibilityEvent(this.isVisible);

  @override
  final bool isVisible;

  @override
  String toString() {
    return 'UserEvent.changeIconVisibilityEvent(isVisible: $isVisible)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_changeIconVisibilityEvent &&
            (identical(other.isVisible, isVisible) ||
                other.isVisible == isVisible));
  }

  @override
  int get hashCode => Object.hash(runtimeType, isVisible);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_changeIconVisibilityEventCopyWith<_$_changeIconVisibilityEvent>
      get copyWith => __$$_changeIconVisibilityEventCopyWithImpl<
          _$_changeIconVisibilityEvent>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String currentPassword, String password)
        updateMyPasswordEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    required TResult orElse(),
  }) {
    if (changeIconVisibilityEvent != null) {
      return changeIconVisibilityEvent(isVisible);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_updateMyPasswordEvent value)
        updateMyPasswordEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    required TResult orElse(),
  }) {
    if (changeIconVisibilityEvent != null) {
      return changeIconVisibilityEvent(this);
    }
    return orElse();
  }
}

abstract class _changeIconVisibilityEvent implements UserEvent {
  const factory _changeIconVisibilityEvent(final bool isVisible) =
      _$_changeIconVisibilityEvent;

  bool get isVisible;
  @JsonKey(ignore: true)
  _$$_changeIconVisibilityEventCopyWith<_$_changeIconVisibilityEvent>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$UserState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult? Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UserStateCopyWith<$Res> {
  factory $UserStateCopyWith(UserState value, $Res Function(UserState) then) =
      _$UserStateCopyWithImpl<$Res, UserState>;
}

/// @nodoc
class _$UserStateCopyWithImpl<$Res, $Val extends UserState>
    implements $UserStateCopyWith<$Res> {
  _$UserStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_userInitialCopyWith<$Res> {
  factory _$$_userInitialCopyWith(
          _$_userInitial value, $Res Function(_$_userInitial) then) =
      __$$_userInitialCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_userInitialCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_userInitial>
    implements _$$_userInitialCopyWith<$Res> {
  __$$_userInitialCopyWithImpl(
      _$_userInitial _value, $Res Function(_$_userInitial) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_userInitial implements _userInitial {
  const _$_userInitial();

  @override
  String toString() {
    return 'UserState.userInitial()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_userInitial);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
  }) {
    return userInitial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
  }) {
    return userInitial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (userInitial != null) {
      return userInitial();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
  }) {
    return userInitial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult? Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
  }) {
    return userInitial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (userInitial != null) {
      return userInitial(this);
    }
    return orElse();
  }
}

abstract class _userInitial implements UserState {
  const factory _userInitial() = _$_userInitial;
}

/// @nodoc
abstract class _$$_loadingCopyWith<$Res> {
  factory _$$_loadingCopyWith(
          _$_loading value, $Res Function(_$_loading) then) =
      __$$_loadingCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_loadingCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_loading>
    implements _$$_loadingCopyWith<$Res> {
  __$$_loadingCopyWithImpl(_$_loading _value, $Res Function(_$_loading) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_loading implements _loading {
  const _$_loading();

  @override
  String toString() {
    return 'UserState.loading()';
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
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
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
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult? Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class _loading implements UserState {
  const factory _loading() = _$_loading;
}

/// @nodoc
abstract class _$$_successUpdateMyPasswordStateCopyWith<$Res> {
  factory _$$_successUpdateMyPasswordStateCopyWith(
          _$_successUpdateMyPasswordState value,
          $Res Function(_$_successUpdateMyPasswordState) then) =
      __$$_successUpdateMyPasswordStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_successUpdateMyPasswordStateCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_successUpdateMyPasswordState>
    implements _$$_successUpdateMyPasswordStateCopyWith<$Res> {
  __$$_successUpdateMyPasswordStateCopyWithImpl(
      _$_successUpdateMyPasswordState _value,
      $Res Function(_$_successUpdateMyPasswordState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_successUpdateMyPasswordState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_successUpdateMyPasswordState implements _successUpdateMyPasswordState {
  const _$_successUpdateMyPasswordState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'UserState.successUpdateMyPasswordState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successUpdateMyPasswordState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successUpdateMyPasswordStateCopyWith<_$_successUpdateMyPasswordState>
      get copyWith => __$$_successUpdateMyPasswordStateCopyWithImpl<
          _$_successUpdateMyPasswordState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
  }) {
    return successUpdateMyPasswordState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
  }) {
    return successUpdateMyPasswordState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (successUpdateMyPasswordState != null) {
      return successUpdateMyPasswordState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
  }) {
    return successUpdateMyPasswordState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult? Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
  }) {
    return successUpdateMyPasswordState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (successUpdateMyPasswordState != null) {
      return successUpdateMyPasswordState(this);
    }
    return orElse();
  }
}

abstract class _successUpdateMyPasswordState implements UserState {
  const factory _successUpdateMyPasswordState(final String message) =
      _$_successUpdateMyPasswordState;

  String get message;
  @JsonKey(ignore: true)
  _$$_successUpdateMyPasswordStateCopyWith<_$_successUpdateMyPasswordState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorUpdateMyPasswordStateCopyWith<$Res> {
  factory _$$_errorUpdateMyPasswordStateCopyWith(
          _$_errorUpdateMyPasswordState value,
          $Res Function(_$_errorUpdateMyPasswordState) then) =
      __$$_errorUpdateMyPasswordStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorUpdateMyPasswordStateCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_errorUpdateMyPasswordState>
    implements _$$_errorUpdateMyPasswordStateCopyWith<$Res> {
  __$$_errorUpdateMyPasswordStateCopyWithImpl(
      _$_errorUpdateMyPasswordState _value,
      $Res Function(_$_errorUpdateMyPasswordState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorUpdateMyPasswordState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorUpdateMyPasswordState implements _errorUpdateMyPasswordState {
  const _$_errorUpdateMyPasswordState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'UserState.errorUpdateMyPasswordState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorUpdateMyPasswordState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorUpdateMyPasswordStateCopyWith<_$_errorUpdateMyPasswordState>
      get copyWith => __$$_errorUpdateMyPasswordStateCopyWithImpl<
          _$_errorUpdateMyPasswordState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
  }) {
    return errorUpdateMyPasswordState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
  }) {
    return errorUpdateMyPasswordState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (errorUpdateMyPasswordState != null) {
      return errorUpdateMyPasswordState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
  }) {
    return errorUpdateMyPasswordState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult? Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
  }) {
    return errorUpdateMyPasswordState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (errorUpdateMyPasswordState != null) {
      return errorUpdateMyPasswordState(this);
    }
    return orElse();
  }
}

abstract class _errorUpdateMyPasswordState implements UserState {
  const factory _errorUpdateMyPasswordState(final String message) =
      _$_errorUpdateMyPasswordState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorUpdateMyPasswordStateCopyWith<_$_errorUpdateMyPasswordState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_changeIconVisibilityStateCopyWith<$Res> {
  factory _$$_changeIconVisibilityStateCopyWith(
          _$_changeIconVisibilityState value,
          $Res Function(_$_changeIconVisibilityState) then) =
      __$$_changeIconVisibilityStateCopyWithImpl<$Res>;
  @useResult
  $Res call({bool isVisible});
}

/// @nodoc
class __$$_changeIconVisibilityStateCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_changeIconVisibilityState>
    implements _$$_changeIconVisibilityStateCopyWith<$Res> {
  __$$_changeIconVisibilityStateCopyWithImpl(
      _$_changeIconVisibilityState _value,
      $Res Function(_$_changeIconVisibilityState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? isVisible = null,
  }) {
    return _then(_$_changeIconVisibilityState(
      null == isVisible
          ? _value.isVisible
          : isVisible // ignore: cast_nullable_to_non_nullable
              as bool,
    ));
  }
}

/// @nodoc

class _$_changeIconVisibilityState implements _changeIconVisibilityState {
  const _$_changeIconVisibilityState(this.isVisible);

  @override
  final bool isVisible;

  @override
  String toString() {
    return 'UserState.successChangeIconVisibilityState(isVisible: $isVisible)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_changeIconVisibilityState &&
            (identical(other.isVisible, isVisible) ||
                other.isVisible == isVisible));
  }

  @override
  int get hashCode => Object.hash(runtimeType, isVisible);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_changeIconVisibilityStateCopyWith<_$_changeIconVisibilityState>
      get copyWith => __$$_changeIconVisibilityStateCopyWithImpl<
          _$_changeIconVisibilityState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
  }) {
    return successChangeIconVisibilityState(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
  }) {
    return successChangeIconVisibilityState?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (successChangeIconVisibilityState != null) {
      return successChangeIconVisibilityState(isVisible);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
  }) {
    return successChangeIconVisibilityState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult? Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
  }) {
    return successChangeIconVisibilityState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successUpdateMyPasswordState value)?
        successUpdateMyPasswordState,
    TResult Function(_errorUpdateMyPasswordState value)?
        errorUpdateMyPasswordState,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (successChangeIconVisibilityState != null) {
      return successChangeIconVisibilityState(this);
    }
    return orElse();
  }
}

abstract class _changeIconVisibilityState implements UserState {
  const factory _changeIconVisibilityState(final bool isVisible) =
      _$_changeIconVisibilityState;

  bool get isVisible;
  @JsonKey(ignore: true)
  _$$_changeIconVisibilityStateCopyWith<_$_changeIconVisibilityState>
      get copyWith => throw _privateConstructorUsedError;
}
