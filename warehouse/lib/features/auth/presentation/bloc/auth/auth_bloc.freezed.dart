// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'auth_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$AuthEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) loginEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? loginEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? loginEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_loginEvent value) loginEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_loginEvent value)? loginEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_loginEvent value)? loginEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AuthEventCopyWith<$Res> {
  factory $AuthEventCopyWith(AuthEvent value, $Res Function(AuthEvent) then) =
      _$AuthEventCopyWithImpl<$Res, AuthEvent>;
}

/// @nodoc
class _$AuthEventCopyWithImpl<$Res, $Val extends AuthEvent>
    implements $AuthEventCopyWith<$Res> {
  _$AuthEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_loginEventCopyWith<$Res> {
  factory _$$_loginEventCopyWith(
          _$_loginEvent value, $Res Function(_$_loginEvent) then) =
      __$$_loginEventCopyWithImpl<$Res>;
  @useResult
  $Res call({String email, String password});
}

/// @nodoc
class __$$_loginEventCopyWithImpl<$Res>
    extends _$AuthEventCopyWithImpl<$Res, _$_loginEvent>
    implements _$$_loginEventCopyWith<$Res> {
  __$$_loginEventCopyWithImpl(
      _$_loginEvent _value, $Res Function(_$_loginEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? email = null,
    Object? password = null,
  }) {
    return _then(_$_loginEvent(
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      password: null == password
          ? _value.password
          : password // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_loginEvent implements _loginEvent {
  const _$_loginEvent({required this.email, required this.password});

  @override
  final String email;
  @override
  final String password;

  @override
  String toString() {
    return 'AuthEvent.loginEvent(email: $email, password: $password)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_loginEvent &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.password, password) ||
                other.password == password));
  }

  @override
  int get hashCode => Object.hash(runtimeType, email, password);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_loginEventCopyWith<_$_loginEvent> get copyWith =>
      __$$_loginEventCopyWithImpl<_$_loginEvent>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String email, String password) loginEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
  }) {
    return loginEvent(email, password);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? loginEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
  }) {
    return loginEvent?.call(email, password);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? loginEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    required TResult orElse(),
  }) {
    if (loginEvent != null) {
      return loginEvent(email, password);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_loginEvent value) loginEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
  }) {
    return loginEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_loginEvent value)? loginEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
  }) {
    return loginEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_loginEvent value)? loginEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    required TResult orElse(),
  }) {
    if (loginEvent != null) {
      return loginEvent(this);
    }
    return orElse();
  }
}

abstract class _loginEvent implements AuthEvent {
  const factory _loginEvent(
      {required final String email,
      required final String password}) = _$_loginEvent;

  String get email;
  String get password;
  @JsonKey(ignore: true)
  _$$_loginEventCopyWith<_$_loginEvent> get copyWith =>
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
    extends _$AuthEventCopyWithImpl<$Res, _$_changeIconVisibilityEvent>
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
    return 'AuthEvent.changeIconVisibilityEvent(isVisible: $isVisible)';
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
    required TResult Function(String email, String password) loginEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String email, String password)? loginEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String email, String password)? loginEvent,
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
    required TResult Function(_loginEvent value) loginEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_loginEvent value)? loginEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
  }) {
    return changeIconVisibilityEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_loginEvent value)? loginEvent,
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

abstract class _changeIconVisibilityEvent implements AuthEvent {
  const factory _changeIconVisibilityEvent(final bool isVisible) =
      _$_changeIconVisibilityEvent;

  bool get isVisible;
  @JsonKey(ignore: true)
  _$$_changeIconVisibilityEventCopyWith<_$_changeIconVisibilityEvent>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$AuthState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() authInitial,
    required TResult Function() loading,
    required TResult Function(String message) successLoginState,
    required TResult Function(String message) errorLoginState,
    required TResult Function(bool isVisible) changeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? authInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successLoginState,
    TResult? Function(String message)? errorLoginState,
    TResult? Function(bool isVisible)? changeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? authInitial,
    TResult Function()? loading,
    TResult Function(String message)? successLoginState,
    TResult Function(String message)? errorLoginState,
    TResult Function(bool isVisible)? changeIconVisibilityState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_authInitial value) authInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successLoginState value) successLoginState,
    required TResult Function(_errorLoginState value) errorLoginState,
    required TResult Function(_changeIconVisibilityState value)
        changeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_authInitial value)? authInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successLoginState value)? successLoginState,
    TResult? Function(_errorLoginState value)? errorLoginState,
    TResult? Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_authInitial value)? authInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successLoginState value)? successLoginState,
    TResult Function(_errorLoginState value)? errorLoginState,
    TResult Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AuthStateCopyWith<$Res> {
  factory $AuthStateCopyWith(AuthState value, $Res Function(AuthState) then) =
      _$AuthStateCopyWithImpl<$Res, AuthState>;
}

/// @nodoc
class _$AuthStateCopyWithImpl<$Res, $Val extends AuthState>
    implements $AuthStateCopyWith<$Res> {
  _$AuthStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_authInitialCopyWith<$Res> {
  factory _$$_authInitialCopyWith(
          _$_authInitial value, $Res Function(_$_authInitial) then) =
      __$$_authInitialCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_authInitialCopyWithImpl<$Res>
    extends _$AuthStateCopyWithImpl<$Res, _$_authInitial>
    implements _$$_authInitialCopyWith<$Res> {
  __$$_authInitialCopyWithImpl(
      _$_authInitial _value, $Res Function(_$_authInitial) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_authInitial implements _authInitial {
  const _$_authInitial();

  @override
  String toString() {
    return 'AuthState.authInitial()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_authInitial);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() authInitial,
    required TResult Function() loading,
    required TResult Function(String message) successLoginState,
    required TResult Function(String message) errorLoginState,
    required TResult Function(bool isVisible) changeIconVisibilityState,
  }) {
    return authInitial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? authInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successLoginState,
    TResult? Function(String message)? errorLoginState,
    TResult? Function(bool isVisible)? changeIconVisibilityState,
  }) {
    return authInitial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? authInitial,
    TResult Function()? loading,
    TResult Function(String message)? successLoginState,
    TResult Function(String message)? errorLoginState,
    TResult Function(bool isVisible)? changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (authInitial != null) {
      return authInitial();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_authInitial value) authInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successLoginState value) successLoginState,
    required TResult Function(_errorLoginState value) errorLoginState,
    required TResult Function(_changeIconVisibilityState value)
        changeIconVisibilityState,
  }) {
    return authInitial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_authInitial value)? authInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successLoginState value)? successLoginState,
    TResult? Function(_errorLoginState value)? errorLoginState,
    TResult? Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
  }) {
    return authInitial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_authInitial value)? authInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successLoginState value)? successLoginState,
    TResult Function(_errorLoginState value)? errorLoginState,
    TResult Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (authInitial != null) {
      return authInitial(this);
    }
    return orElse();
  }
}

abstract class _authInitial implements AuthState {
  const factory _authInitial() = _$_authInitial;
}

/// @nodoc
abstract class _$$_loadingCopyWith<$Res> {
  factory _$$_loadingCopyWith(
          _$_loading value, $Res Function(_$_loading) then) =
      __$$_loadingCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_loadingCopyWithImpl<$Res>
    extends _$AuthStateCopyWithImpl<$Res, _$_loading>
    implements _$$_loadingCopyWith<$Res> {
  __$$_loadingCopyWithImpl(_$_loading _value, $Res Function(_$_loading) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_loading implements _loading {
  const _$_loading();

  @override
  String toString() {
    return 'AuthState.loading()';
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
    required TResult Function() authInitial,
    required TResult Function() loading,
    required TResult Function(String message) successLoginState,
    required TResult Function(String message) errorLoginState,
    required TResult Function(bool isVisible) changeIconVisibilityState,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? authInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successLoginState,
    TResult? Function(String message)? errorLoginState,
    TResult? Function(bool isVisible)? changeIconVisibilityState,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? authInitial,
    TResult Function()? loading,
    TResult Function(String message)? successLoginState,
    TResult Function(String message)? errorLoginState,
    TResult Function(bool isVisible)? changeIconVisibilityState,
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
    required TResult Function(_authInitial value) authInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successLoginState value) successLoginState,
    required TResult Function(_errorLoginState value) errorLoginState,
    required TResult Function(_changeIconVisibilityState value)
        changeIconVisibilityState,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_authInitial value)? authInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successLoginState value)? successLoginState,
    TResult? Function(_errorLoginState value)? errorLoginState,
    TResult? Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_authInitial value)? authInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successLoginState value)? successLoginState,
    TResult Function(_errorLoginState value)? errorLoginState,
    TResult Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class _loading implements AuthState {
  const factory _loading() = _$_loading;
}

/// @nodoc
abstract class _$$_successLoginStateCopyWith<$Res> {
  factory _$$_successLoginStateCopyWith(_$_successLoginState value,
          $Res Function(_$_successLoginState) then) =
      __$$_successLoginStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_successLoginStateCopyWithImpl<$Res>
    extends _$AuthStateCopyWithImpl<$Res, _$_successLoginState>
    implements _$$_successLoginStateCopyWith<$Res> {
  __$$_successLoginStateCopyWithImpl(
      _$_successLoginState _value, $Res Function(_$_successLoginState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_successLoginState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_successLoginState implements _successLoginState {
  const _$_successLoginState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'AuthState.successLoginState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successLoginState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successLoginStateCopyWith<_$_successLoginState> get copyWith =>
      __$$_successLoginStateCopyWithImpl<_$_successLoginState>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() authInitial,
    required TResult Function() loading,
    required TResult Function(String message) successLoginState,
    required TResult Function(String message) errorLoginState,
    required TResult Function(bool isVisible) changeIconVisibilityState,
  }) {
    return successLoginState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? authInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successLoginState,
    TResult? Function(String message)? errorLoginState,
    TResult? Function(bool isVisible)? changeIconVisibilityState,
  }) {
    return successLoginState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? authInitial,
    TResult Function()? loading,
    TResult Function(String message)? successLoginState,
    TResult Function(String message)? errorLoginState,
    TResult Function(bool isVisible)? changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (successLoginState != null) {
      return successLoginState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_authInitial value) authInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successLoginState value) successLoginState,
    required TResult Function(_errorLoginState value) errorLoginState,
    required TResult Function(_changeIconVisibilityState value)
        changeIconVisibilityState,
  }) {
    return successLoginState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_authInitial value)? authInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successLoginState value)? successLoginState,
    TResult? Function(_errorLoginState value)? errorLoginState,
    TResult? Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
  }) {
    return successLoginState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_authInitial value)? authInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successLoginState value)? successLoginState,
    TResult Function(_errorLoginState value)? errorLoginState,
    TResult Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (successLoginState != null) {
      return successLoginState(this);
    }
    return orElse();
  }
}

abstract class _successLoginState implements AuthState {
  const factory _successLoginState(final String message) = _$_successLoginState;

  String get message;
  @JsonKey(ignore: true)
  _$$_successLoginStateCopyWith<_$_successLoginState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorLoginStateCopyWith<$Res> {
  factory _$$_errorLoginStateCopyWith(
          _$_errorLoginState value, $Res Function(_$_errorLoginState) then) =
      __$$_errorLoginStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorLoginStateCopyWithImpl<$Res>
    extends _$AuthStateCopyWithImpl<$Res, _$_errorLoginState>
    implements _$$_errorLoginStateCopyWith<$Res> {
  __$$_errorLoginStateCopyWithImpl(
      _$_errorLoginState _value, $Res Function(_$_errorLoginState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorLoginState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorLoginState implements _errorLoginState {
  const _$_errorLoginState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'AuthState.errorLoginState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorLoginState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorLoginStateCopyWith<_$_errorLoginState> get copyWith =>
      __$$_errorLoginStateCopyWithImpl<_$_errorLoginState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() authInitial,
    required TResult Function() loading,
    required TResult Function(String message) successLoginState,
    required TResult Function(String message) errorLoginState,
    required TResult Function(bool isVisible) changeIconVisibilityState,
  }) {
    return errorLoginState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? authInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successLoginState,
    TResult? Function(String message)? errorLoginState,
    TResult? Function(bool isVisible)? changeIconVisibilityState,
  }) {
    return errorLoginState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? authInitial,
    TResult Function()? loading,
    TResult Function(String message)? successLoginState,
    TResult Function(String message)? errorLoginState,
    TResult Function(bool isVisible)? changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (errorLoginState != null) {
      return errorLoginState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_authInitial value) authInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successLoginState value) successLoginState,
    required TResult Function(_errorLoginState value) errorLoginState,
    required TResult Function(_changeIconVisibilityState value)
        changeIconVisibilityState,
  }) {
    return errorLoginState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_authInitial value)? authInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successLoginState value)? successLoginState,
    TResult? Function(_errorLoginState value)? errorLoginState,
    TResult? Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
  }) {
    return errorLoginState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_authInitial value)? authInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successLoginState value)? successLoginState,
    TResult Function(_errorLoginState value)? errorLoginState,
    TResult Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (errorLoginState != null) {
      return errorLoginState(this);
    }
    return orElse();
  }
}

abstract class _errorLoginState implements AuthState {
  const factory _errorLoginState(final String message) = _$_errorLoginState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorLoginStateCopyWith<_$_errorLoginState> get copyWith =>
      throw _privateConstructorUsedError;
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
    extends _$AuthStateCopyWithImpl<$Res, _$_changeIconVisibilityState>
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
    return 'AuthState.changeIconVisibilityState(isVisible: $isVisible)';
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
    required TResult Function() authInitial,
    required TResult Function() loading,
    required TResult Function(String message) successLoginState,
    required TResult Function(String message) errorLoginState,
    required TResult Function(bool isVisible) changeIconVisibilityState,
  }) {
    return changeIconVisibilityState(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? authInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successLoginState,
    TResult? Function(String message)? errorLoginState,
    TResult? Function(bool isVisible)? changeIconVisibilityState,
  }) {
    return changeIconVisibilityState?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? authInitial,
    TResult Function()? loading,
    TResult Function(String message)? successLoginState,
    TResult Function(String message)? errorLoginState,
    TResult Function(bool isVisible)? changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (changeIconVisibilityState != null) {
      return changeIconVisibilityState(isVisible);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_authInitial value) authInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_successLoginState value) successLoginState,
    required TResult Function(_errorLoginState value) errorLoginState,
    required TResult Function(_changeIconVisibilityState value)
        changeIconVisibilityState,
  }) {
    return changeIconVisibilityState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_authInitial value)? authInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_successLoginState value)? successLoginState,
    TResult? Function(_errorLoginState value)? errorLoginState,
    TResult? Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
  }) {
    return changeIconVisibilityState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_authInitial value)? authInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_successLoginState value)? successLoginState,
    TResult Function(_errorLoginState value)? errorLoginState,
    TResult Function(_changeIconVisibilityState value)?
        changeIconVisibilityState,
    required TResult orElse(),
  }) {
    if (changeIconVisibilityState != null) {
      return changeIconVisibilityState(this);
    }
    return orElse();
  }
}

abstract class _changeIconVisibilityState implements AuthState {
  const factory _changeIconVisibilityState(final bool isVisible) =
      _$_changeIconVisibilityState;

  bool get isVisible;
  @JsonKey(ignore: true)
  _$$_changeIconVisibilityStateCopyWith<_$_changeIconVisibilityState>
      get copyWith => throw _privateConstructorUsedError;
}
