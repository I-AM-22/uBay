// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'employee_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$EmployeeEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function() getMyProfileEvent,
    required TResult Function() logOutEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function()? getMyProfileEvent,
    TResult? Function()? logOutEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function()? getMyProfileEvent,
    TResult Function()? logOutEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
    required TResult Function(_logOutEvent value) logOutEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult? Function(_logOutEvent value)? logOutEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult Function(_logOutEvent value)? logOutEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EmployeeEventCopyWith<$Res> {
  factory $EmployeeEventCopyWith(
          EmployeeEvent value, $Res Function(EmployeeEvent) then) =
      _$EmployeeEventCopyWithImpl<$Res, EmployeeEvent>;
}

/// @nodoc
class _$EmployeeEventCopyWithImpl<$Res, $Val extends EmployeeEvent>
    implements $EmployeeEventCopyWith<$Res> {
  _$EmployeeEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
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
    extends _$EmployeeEventCopyWithImpl<$Res, _$_changeIconVisibilityEvent>
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
    return 'EmployeeEvent.changeIconVisibilityEvent(isVisible: $isVisible)';
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
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function() getMyProfileEvent,
    required TResult Function() logOutEvent,
  }) {
    return changeIconVisibilityEvent(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function()? getMyProfileEvent,
    TResult? Function()? logOutEvent,
  }) {
    return changeIconVisibilityEvent?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function()? getMyProfileEvent,
    TResult Function()? logOutEvent,
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
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
    required TResult Function(_logOutEvent value) logOutEvent,
  }) {
    return changeIconVisibilityEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult? Function(_logOutEvent value)? logOutEvent,
  }) {
    return changeIconVisibilityEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult Function(_logOutEvent value)? logOutEvent,
    required TResult orElse(),
  }) {
    if (changeIconVisibilityEvent != null) {
      return changeIconVisibilityEvent(this);
    }
    return orElse();
  }
}

abstract class _changeIconVisibilityEvent implements EmployeeEvent {
  const factory _changeIconVisibilityEvent(final bool isVisible) =
      _$_changeIconVisibilityEvent;

  bool get isVisible;
  @JsonKey(ignore: true)
  _$$_changeIconVisibilityEventCopyWith<_$_changeIconVisibilityEvent>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_pickProfileImageEventCopyWith<$Res> {
  factory _$$_pickProfileImageEventCopyWith(_$_pickProfileImageEvent value,
          $Res Function(_$_pickProfileImageEvent) then) =
      __$$_pickProfileImageEventCopyWithImpl<$Res>;
  @useResult
  $Res call({ImageSource imageSource});
}

/// @nodoc
class __$$_pickProfileImageEventCopyWithImpl<$Res>
    extends _$EmployeeEventCopyWithImpl<$Res, _$_pickProfileImageEvent>
    implements _$$_pickProfileImageEventCopyWith<$Res> {
  __$$_pickProfileImageEventCopyWithImpl(_$_pickProfileImageEvent _value,
      $Res Function(_$_pickProfileImageEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? imageSource = null,
  }) {
    return _then(_$_pickProfileImageEvent(
      null == imageSource
          ? _value.imageSource
          : imageSource // ignore: cast_nullable_to_non_nullable
              as ImageSource,
    ));
  }
}

/// @nodoc

class _$_pickProfileImageEvent implements _pickProfileImageEvent {
  const _$_pickProfileImageEvent(this.imageSource);

  @override
  final ImageSource imageSource;

  @override
  String toString() {
    return 'EmployeeEvent.pickProfileImageEvent(imageSource: $imageSource)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_pickProfileImageEvent &&
            (identical(other.imageSource, imageSource) ||
                other.imageSource == imageSource));
  }

  @override
  int get hashCode => Object.hash(runtimeType, imageSource);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_pickProfileImageEventCopyWith<_$_pickProfileImageEvent> get copyWith =>
      __$$_pickProfileImageEventCopyWithImpl<_$_pickProfileImageEvent>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function() getMyProfileEvent,
    required TResult Function() logOutEvent,
  }) {
    return pickProfileImageEvent(imageSource);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function()? getMyProfileEvent,
    TResult? Function()? logOutEvent,
  }) {
    return pickProfileImageEvent?.call(imageSource);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function()? getMyProfileEvent,
    TResult Function()? logOutEvent,
    required TResult orElse(),
  }) {
    if (pickProfileImageEvent != null) {
      return pickProfileImageEvent(imageSource);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
    required TResult Function(_logOutEvent value) logOutEvent,
  }) {
    return pickProfileImageEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult? Function(_logOutEvent value)? logOutEvent,
  }) {
    return pickProfileImageEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult Function(_logOutEvent value)? logOutEvent,
    required TResult orElse(),
  }) {
    if (pickProfileImageEvent != null) {
      return pickProfileImageEvent(this);
    }
    return orElse();
  }
}

abstract class _pickProfileImageEvent implements EmployeeEvent {
  const factory _pickProfileImageEvent(final ImageSource imageSource) =
      _$_pickProfileImageEvent;

  ImageSource get imageSource;
  @JsonKey(ignore: true)
  _$$_pickProfileImageEventCopyWith<_$_pickProfileImageEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_getMyProfileEventCopyWith<$Res> {
  factory _$$_getMyProfileEventCopyWith(_$_getMyProfileEvent value,
          $Res Function(_$_getMyProfileEvent) then) =
      __$$_getMyProfileEventCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_getMyProfileEventCopyWithImpl<$Res>
    extends _$EmployeeEventCopyWithImpl<$Res, _$_getMyProfileEvent>
    implements _$$_getMyProfileEventCopyWith<$Res> {
  __$$_getMyProfileEventCopyWithImpl(
      _$_getMyProfileEvent _value, $Res Function(_$_getMyProfileEvent) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_getMyProfileEvent implements _getMyProfileEvent {
  const _$_getMyProfileEvent();

  @override
  String toString() {
    return 'EmployeeEvent.getMyProfileEvent()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_getMyProfileEvent);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function() getMyProfileEvent,
    required TResult Function() logOutEvent,
  }) {
    return getMyProfileEvent();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function()? getMyProfileEvent,
    TResult? Function()? logOutEvent,
  }) {
    return getMyProfileEvent?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function()? getMyProfileEvent,
    TResult Function()? logOutEvent,
    required TResult orElse(),
  }) {
    if (getMyProfileEvent != null) {
      return getMyProfileEvent();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
    required TResult Function(_logOutEvent value) logOutEvent,
  }) {
    return getMyProfileEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult? Function(_logOutEvent value)? logOutEvent,
  }) {
    return getMyProfileEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult Function(_logOutEvent value)? logOutEvent,
    required TResult orElse(),
  }) {
    if (getMyProfileEvent != null) {
      return getMyProfileEvent(this);
    }
    return orElse();
  }
}

abstract class _getMyProfileEvent implements EmployeeEvent {
  const factory _getMyProfileEvent() = _$_getMyProfileEvent;
}

/// @nodoc
abstract class _$$_logOutEventCopyWith<$Res> {
  factory _$$_logOutEventCopyWith(
          _$_logOutEvent value, $Res Function(_$_logOutEvent) then) =
      __$$_logOutEventCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_logOutEventCopyWithImpl<$Res>
    extends _$EmployeeEventCopyWithImpl<$Res, _$_logOutEvent>
    implements _$$_logOutEventCopyWith<$Res> {
  __$$_logOutEventCopyWithImpl(
      _$_logOutEvent _value, $Res Function(_$_logOutEvent) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_logOutEvent implements _logOutEvent {
  const _$_logOutEvent();

  @override
  String toString() {
    return 'EmployeeEvent.logOutEvent()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_logOutEvent);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function() getMyProfileEvent,
    required TResult Function() logOutEvent,
  }) {
    return logOutEvent();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function()? getMyProfileEvent,
    TResult? Function()? logOutEvent,
  }) {
    return logOutEvent?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function()? getMyProfileEvent,
    TResult Function()? logOutEvent,
    required TResult orElse(),
  }) {
    if (logOutEvent != null) {
      return logOutEvent();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
    required TResult Function(_logOutEvent value) logOutEvent,
  }) {
    return logOutEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult? Function(_logOutEvent value)? logOutEvent,
  }) {
    return logOutEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    TResult Function(_logOutEvent value)? logOutEvent,
    required TResult orElse(),
  }) {
    if (logOutEvent != null) {
      return logOutEvent(this);
    }
    return orElse();
  }
}

abstract class _logOutEvent implements EmployeeEvent {
  const factory _logOutEvent() = _$_logOutEvent;
}

/// @nodoc
mixin _$EmployeeState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $EmployeeStateCopyWith<$Res> {
  factory $EmployeeStateCopyWith(
          EmployeeState value, $Res Function(EmployeeState) then) =
      _$EmployeeStateCopyWithImpl<$Res, EmployeeState>;
}

/// @nodoc
class _$EmployeeStateCopyWithImpl<$Res, $Val extends EmployeeState>
    implements $EmployeeStateCopyWith<$Res> {
  _$EmployeeStateCopyWithImpl(this._value, this._then);

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
    extends _$EmployeeStateCopyWithImpl<$Res, _$_userInitial>
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
    return 'EmployeeState.userInitial()';
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
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return userInitial();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return userInitial?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
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
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return userInitial(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return userInitial?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (userInitial != null) {
      return userInitial(this);
    }
    return orElse();
  }
}

abstract class _userInitial implements EmployeeState {
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
    extends _$EmployeeStateCopyWithImpl<$Res, _$_loading>
    implements _$$_loadingCopyWith<$Res> {
  __$$_loadingCopyWithImpl(_$_loading _value, $Res Function(_$_loading) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_loading implements _loading {
  const _$_loading();

  @override
  String toString() {
    return 'EmployeeState.loading()';
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
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
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
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class _loading implements EmployeeState {
  const factory _loading() = _$_loading;
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
    extends _$EmployeeStateCopyWithImpl<$Res, _$_changeIconVisibilityState>
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
    return 'EmployeeState.successChangeIconVisibilityState(isVisible: $isVisible)';
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
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return successChangeIconVisibilityState(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return successChangeIconVisibilityState?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
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
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return successChangeIconVisibilityState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return successChangeIconVisibilityState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (successChangeIconVisibilityState != null) {
      return successChangeIconVisibilityState(this);
    }
    return orElse();
  }
}

abstract class _changeIconVisibilityState implements EmployeeState {
  const factory _changeIconVisibilityState(final bool isVisible) =
      _$_changeIconVisibilityState;

  bool get isVisible;
  @JsonKey(ignore: true)
  _$$_changeIconVisibilityStateCopyWith<_$_changeIconVisibilityState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_successPickImageProfileStateCopyWith<$Res> {
  factory _$$_successPickImageProfileStateCopyWith(
          _$_successPickImageProfileState value,
          $Res Function(_$_successPickImageProfileState) then) =
      __$$_successPickImageProfileStateCopyWithImpl<$Res>;
  @useResult
  $Res call({File image});
}

/// @nodoc
class __$$_successPickImageProfileStateCopyWithImpl<$Res>
    extends _$EmployeeStateCopyWithImpl<$Res, _$_successPickImageProfileState>
    implements _$$_successPickImageProfileStateCopyWith<$Res> {
  __$$_successPickImageProfileStateCopyWithImpl(
      _$_successPickImageProfileState _value,
      $Res Function(_$_successPickImageProfileState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? image = null,
  }) {
    return _then(_$_successPickImageProfileState(
      null == image
          ? _value.image
          : image // ignore: cast_nullable_to_non_nullable
              as File,
    ));
  }
}

/// @nodoc

class _$_successPickImageProfileState implements _successPickImageProfileState {
  const _$_successPickImageProfileState(this.image);

  @override
  final File image;

  @override
  String toString() {
    return 'EmployeeState.successPickImageProfileState(image: $image)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successPickImageProfileState &&
            (identical(other.image, image) || other.image == image));
  }

  @override
  int get hashCode => Object.hash(runtimeType, image);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successPickImageProfileStateCopyWith<_$_successPickImageProfileState>
      get copyWith => __$$_successPickImageProfileStateCopyWithImpl<
          _$_successPickImageProfileState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return successPickImageProfileState(image);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return successPickImageProfileState?.call(image);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
    required TResult orElse(),
  }) {
    if (successPickImageProfileState != null) {
      return successPickImageProfileState(image);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return successPickImageProfileState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return successPickImageProfileState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (successPickImageProfileState != null) {
      return successPickImageProfileState(this);
    }
    return orElse();
  }
}

abstract class _successPickImageProfileState implements EmployeeState {
  const factory _successPickImageProfileState(final File image) =
      _$_successPickImageProfileState;

  File get image;
  @JsonKey(ignore: true)
  _$$_successPickImageProfileStateCopyWith<_$_successPickImageProfileState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorPickImageProfileStateCopyWith<$Res> {
  factory _$$_errorPickImageProfileStateCopyWith(
          _$_errorPickImageProfileState value,
          $Res Function(_$_errorPickImageProfileState) then) =
      __$$_errorPickImageProfileStateCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_errorPickImageProfileStateCopyWithImpl<$Res>
    extends _$EmployeeStateCopyWithImpl<$Res, _$_errorPickImageProfileState>
    implements _$$_errorPickImageProfileStateCopyWith<$Res> {
  __$$_errorPickImageProfileStateCopyWithImpl(
      _$_errorPickImageProfileState _value,
      $Res Function(_$_errorPickImageProfileState) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_errorPickImageProfileState implements _errorPickImageProfileState {
  const _$_errorPickImageProfileState();

  @override
  String toString() {
    return 'EmployeeState.errorPickImageProfileState()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorPickImageProfileState);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return errorPickImageProfileState();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return errorPickImageProfileState?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
    required TResult orElse(),
  }) {
    if (errorPickImageProfileState != null) {
      return errorPickImageProfileState();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return errorPickImageProfileState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return errorPickImageProfileState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (errorPickImageProfileState != null) {
      return errorPickImageProfileState(this);
    }
    return orElse();
  }
}

abstract class _errorPickImageProfileState implements EmployeeState {
  const factory _errorPickImageProfileState() = _$_errorPickImageProfileState;
}

/// @nodoc
abstract class _$$_successGetMyProfileStateCopyWith<$Res> {
  factory _$$_successGetMyProfileStateCopyWith(
          _$_successGetMyProfileState value,
          $Res Function(_$_successGetMyProfileState) then) =
      __$$_successGetMyProfileStateCopyWithImpl<$Res>;
  @useResult
  $Res call({EmployeeModel employeeModel});

  $EmployeeModelCopyWith<$Res> get employeeModel;
}

/// @nodoc
class __$$_successGetMyProfileStateCopyWithImpl<$Res>
    extends _$EmployeeStateCopyWithImpl<$Res, _$_successGetMyProfileState>
    implements _$$_successGetMyProfileStateCopyWith<$Res> {
  __$$_successGetMyProfileStateCopyWithImpl(_$_successGetMyProfileState _value,
      $Res Function(_$_successGetMyProfileState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? employeeModel = null,
  }) {
    return _then(_$_successGetMyProfileState(
      null == employeeModel
          ? _value.employeeModel
          : employeeModel // ignore: cast_nullable_to_non_nullable
              as EmployeeModel,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $EmployeeModelCopyWith<$Res> get employeeModel {
    return $EmployeeModelCopyWith<$Res>(_value.employeeModel, (value) {
      return _then(_value.copyWith(employeeModel: value));
    });
  }
}

/// @nodoc

class _$_successGetMyProfileState implements _successGetMyProfileState {
  const _$_successGetMyProfileState(this.employeeModel);

  @override
  final EmployeeModel employeeModel;

  @override
  String toString() {
    return 'EmployeeState.successGetMyProfileState(employeeModel: $employeeModel)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successGetMyProfileState &&
            (identical(other.employeeModel, employeeModel) ||
                other.employeeModel == employeeModel));
  }

  @override
  int get hashCode => Object.hash(runtimeType, employeeModel);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successGetMyProfileStateCopyWith<_$_successGetMyProfileState>
      get copyWith => __$$_successGetMyProfileStateCopyWithImpl<
          _$_successGetMyProfileState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return successGetMyProfileState(employeeModel);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return successGetMyProfileState?.call(employeeModel);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
    required TResult orElse(),
  }) {
    if (successGetMyProfileState != null) {
      return successGetMyProfileState(employeeModel);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return successGetMyProfileState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return successGetMyProfileState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (successGetMyProfileState != null) {
      return successGetMyProfileState(this);
    }
    return orElse();
  }
}

abstract class _successGetMyProfileState implements EmployeeState {
  const factory _successGetMyProfileState(final EmployeeModel employeeModel) =
      _$_successGetMyProfileState;

  EmployeeModel get employeeModel;
  @JsonKey(ignore: true)
  _$$_successGetMyProfileStateCopyWith<_$_successGetMyProfileState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorGetMyProfileStateCopyWith<$Res> {
  factory _$$_errorGetMyProfileStateCopyWith(_$_errorGetMyProfileState value,
          $Res Function(_$_errorGetMyProfileState) then) =
      __$$_errorGetMyProfileStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorGetMyProfileStateCopyWithImpl<$Res>
    extends _$EmployeeStateCopyWithImpl<$Res, _$_errorGetMyProfileState>
    implements _$$_errorGetMyProfileStateCopyWith<$Res> {
  __$$_errorGetMyProfileStateCopyWithImpl(_$_errorGetMyProfileState _value,
      $Res Function(_$_errorGetMyProfileState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorGetMyProfileState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorGetMyProfileState implements _errorGetMyProfileState {
  const _$_errorGetMyProfileState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'EmployeeState.errorGetMyProfileState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorGetMyProfileState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorGetMyProfileStateCopyWith<_$_errorGetMyProfileState> get copyWith =>
      __$$_errorGetMyProfileStateCopyWithImpl<_$_errorGetMyProfileState>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return errorGetMyProfileState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return errorGetMyProfileState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
    required TResult orElse(),
  }) {
    if (errorGetMyProfileState != null) {
      return errorGetMyProfileState(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return errorGetMyProfileState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return errorGetMyProfileState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (errorGetMyProfileState != null) {
      return errorGetMyProfileState(this);
    }
    return orElse();
  }
}

abstract class _errorGetMyProfileState implements EmployeeState {
  const factory _errorGetMyProfileState(final String message) =
      _$_errorGetMyProfileState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorGetMyProfileStateCopyWith<_$_errorGetMyProfileState> get copyWith =>
      throw _privateConstructorUsedError;
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
    extends _$EmployeeStateCopyWithImpl<$Res, _$_successLogOutState>
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
    return 'EmployeeState.successLogOutState(message: $message)';
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
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(EmployeeModel employeeModel)
        successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
    required TResult Function(String message) successLogOutState,
  }) {
    return successLogOutState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
    TResult? Function(String message)? successLogOutState,
  }) {
    return successLogOutState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(EmployeeModel employeeModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    TResult Function(String message)? successLogOutState,
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
    required TResult Function(_userInitial value) userInitial,
    required TResult Function(_loading value) loading,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
    required TResult Function(_successLogOutState value) successLogOutState,
  }) {
    return successLogOutState(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_userInitial value)? userInitial,
    TResult? Function(_loading value)? loading,
    TResult? Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult? Function(_successLogOutState value)? successLogOutState,
  }) {
    return successLogOutState?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_userInitial value)? userInitial,
    TResult Function(_loading value)? loading,
    TResult Function(_changeIconVisibilityState value)?
        successChangeIconVisibilityState,
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    TResult Function(_successLogOutState value)? successLogOutState,
    required TResult orElse(),
  }) {
    if (successLogOutState != null) {
      return successLogOutState(this);
    }
    return orElse();
  }
}

abstract class _successLogOutState implements EmployeeState {
  const factory _successLogOutState(final String message) =
      _$_successLogOutState;

  String get message;
  @JsonKey(ignore: true)
  _$$_successLogOutStateCopyWith<_$_successLogOutState> get copyWith =>
      throw _privateConstructorUsedError;
}
