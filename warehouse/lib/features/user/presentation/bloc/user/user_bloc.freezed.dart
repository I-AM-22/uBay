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
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function(String name, String email, File? photo)
        updateMyProfileEvent,
    required TResult Function() getMyProfileEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult? Function()? getMyProfileEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult Function()? getMyProfileEvent,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_updateMyPasswordEvent value)
        updateMyPasswordEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_updateMyProfileEvent value) updateMyProfileEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
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
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function(String name, String email, File? photo)
        updateMyProfileEvent,
    required TResult Function() getMyProfileEvent,
  }) {
    return updateMyPasswordEvent(currentPassword, password);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult? Function()? getMyProfileEvent,
  }) {
    return updateMyPasswordEvent?.call(currentPassword, password);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult Function()? getMyProfileEvent,
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
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_updateMyProfileEvent value) updateMyProfileEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
  }) {
    return updateMyPasswordEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
  }) {
    return updateMyPasswordEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
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
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function(String name, String email, File? photo)
        updateMyProfileEvent,
    required TResult Function() getMyProfileEvent,
  }) {
    return changeIconVisibilityEvent(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult? Function()? getMyProfileEvent,
  }) {
    return changeIconVisibilityEvent?.call(isVisible);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult Function()? getMyProfileEvent,
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
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_updateMyProfileEvent value) updateMyProfileEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
  }) {
    return changeIconVisibilityEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
  }) {
    return changeIconVisibilityEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
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
abstract class _$$_pickProfileImageEventCopyWith<$Res> {
  factory _$$_pickProfileImageEventCopyWith(_$_pickProfileImageEvent value,
          $Res Function(_$_pickProfileImageEvent) then) =
      __$$_pickProfileImageEventCopyWithImpl<$Res>;
  @useResult
  $Res call({ImageSource imageSource});
}

/// @nodoc
class __$$_pickProfileImageEventCopyWithImpl<$Res>
    extends _$UserEventCopyWithImpl<$Res, _$_pickProfileImageEvent>
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
    return 'UserEvent.pickProfileImageEvent(imageSource: $imageSource)';
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
    required TResult Function(String currentPassword, String password)
        updateMyPasswordEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function(String name, String email, File? photo)
        updateMyProfileEvent,
    required TResult Function() getMyProfileEvent,
  }) {
    return pickProfileImageEvent(imageSource);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult? Function()? getMyProfileEvent,
  }) {
    return pickProfileImageEvent?.call(imageSource);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult Function()? getMyProfileEvent,
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
    required TResult Function(_updateMyPasswordEvent value)
        updateMyPasswordEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_updateMyProfileEvent value) updateMyProfileEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
  }) {
    return pickProfileImageEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
  }) {
    return pickProfileImageEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    required TResult orElse(),
  }) {
    if (pickProfileImageEvent != null) {
      return pickProfileImageEvent(this);
    }
    return orElse();
  }
}

abstract class _pickProfileImageEvent implements UserEvent {
  const factory _pickProfileImageEvent(final ImageSource imageSource) =
      _$_pickProfileImageEvent;

  ImageSource get imageSource;
  @JsonKey(ignore: true)
  _$$_pickProfileImageEventCopyWith<_$_pickProfileImageEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_updateMyProfileEventCopyWith<$Res> {
  factory _$$_updateMyProfileEventCopyWith(_$_updateMyProfileEvent value,
          $Res Function(_$_updateMyProfileEvent) then) =
      __$$_updateMyProfileEventCopyWithImpl<$Res>;
  @useResult
  $Res call({String name, String email, File? photo});
}

/// @nodoc
class __$$_updateMyProfileEventCopyWithImpl<$Res>
    extends _$UserEventCopyWithImpl<$Res, _$_updateMyProfileEvent>
    implements _$$_updateMyProfileEventCopyWith<$Res> {
  __$$_updateMyProfileEventCopyWithImpl(_$_updateMyProfileEvent _value,
      $Res Function(_$_updateMyProfileEvent) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? email = null,
    Object? photo = freezed,
  }) {
    return _then(_$_updateMyProfileEvent(
      null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      freezed == photo
          ? _value.photo
          : photo // ignore: cast_nullable_to_non_nullable
              as File?,
    ));
  }
}

/// @nodoc

class _$_updateMyProfileEvent implements _updateMyProfileEvent {
  const _$_updateMyProfileEvent(this.name, this.email, this.photo);

  @override
  final String name;
  @override
  final String email;
  @override
  final File? photo;

  @override
  String toString() {
    return 'UserEvent.updateMyProfileEvent(name: $name, email: $email, photo: $photo)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_updateMyProfileEvent &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.photo, photo) || other.photo == photo));
  }

  @override
  int get hashCode => Object.hash(runtimeType, name, email, photo);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_updateMyProfileEventCopyWith<_$_updateMyProfileEvent> get copyWith =>
      __$$_updateMyProfileEventCopyWithImpl<_$_updateMyProfileEvent>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String currentPassword, String password)
        updateMyPasswordEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function(String name, String email, File? photo)
        updateMyProfileEvent,
    required TResult Function() getMyProfileEvent,
  }) {
    return updateMyProfileEvent(name, email, photo);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult? Function()? getMyProfileEvent,
  }) {
    return updateMyProfileEvent?.call(name, email, photo);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult Function()? getMyProfileEvent,
    required TResult orElse(),
  }) {
    if (updateMyProfileEvent != null) {
      return updateMyProfileEvent(name, email, photo);
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
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_updateMyProfileEvent value) updateMyProfileEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
  }) {
    return updateMyProfileEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
  }) {
    return updateMyProfileEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    required TResult orElse(),
  }) {
    if (updateMyProfileEvent != null) {
      return updateMyProfileEvent(this);
    }
    return orElse();
  }
}

abstract class _updateMyProfileEvent implements UserEvent {
  const factory _updateMyProfileEvent(
          final String name, final String email, final File? photo) =
      _$_updateMyProfileEvent;

  String get name;
  String get email;
  File? get photo;
  @JsonKey(ignore: true)
  _$$_updateMyProfileEventCopyWith<_$_updateMyProfileEvent> get copyWith =>
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
    extends _$UserEventCopyWithImpl<$Res, _$_getMyProfileEvent>
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
    return 'UserEvent.getMyProfileEvent()';
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
    required TResult Function(String currentPassword, String password)
        updateMyPasswordEvent,
    required TResult Function(bool isVisible) changeIconVisibilityEvent,
    required TResult Function(ImageSource imageSource) pickProfileImageEvent,
    required TResult Function(String name, String email, File? photo)
        updateMyProfileEvent,
    required TResult Function() getMyProfileEvent,
  }) {
    return getMyProfileEvent();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult? Function(bool isVisible)? changeIconVisibilityEvent,
    TResult? Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult? Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult? Function()? getMyProfileEvent,
  }) {
    return getMyProfileEvent?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String currentPassword, String password)?
        updateMyPasswordEvent,
    TResult Function(bool isVisible)? changeIconVisibilityEvent,
    TResult Function(ImageSource imageSource)? pickProfileImageEvent,
    TResult Function(String name, String email, File? photo)?
        updateMyProfileEvent,
    TResult Function()? getMyProfileEvent,
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
    required TResult Function(_updateMyPasswordEvent value)
        updateMyPasswordEvent,
    required TResult Function(_changeIconVisibilityEvent value)
        changeIconVisibilityEvent,
    required TResult Function(_pickProfileImageEvent value)
        pickProfileImageEvent,
    required TResult Function(_updateMyProfileEvent value) updateMyProfileEvent,
    required TResult Function(_getMyProfileEvent value) getMyProfileEvent,
  }) {
    return getMyProfileEvent(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult? Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult? Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult? Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult? Function(_getMyProfileEvent value)? getMyProfileEvent,
  }) {
    return getMyProfileEvent?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_updateMyPasswordEvent value)? updateMyPasswordEvent,
    TResult Function(_changeIconVisibilityEvent value)?
        changeIconVisibilityEvent,
    TResult Function(_pickProfileImageEvent value)? pickProfileImageEvent,
    TResult Function(_updateMyProfileEvent value)? updateMyProfileEvent,
    TResult Function(_getMyProfileEvent value)? getMyProfileEvent,
    required TResult orElse(),
  }) {
    if (getMyProfileEvent != null) {
      return getMyProfileEvent(this);
    }
    return orElse();
  }
}

abstract class _getMyProfileEvent implements UserEvent {
  const factory _getMyProfileEvent() = _$_getMyProfileEvent;
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
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
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
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
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
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
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
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
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
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
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
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
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
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
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
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
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
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
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
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
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
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
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
    extends _$UserStateCopyWithImpl<$Res, _$_successPickImageProfileState>
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
    return 'UserState.successPickImageProfileState(image: $image)';
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
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) {
    return successPickImageProfileState(image);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) {
    return successPickImageProfileState?.call(image);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
  }) {
    return successPickImageProfileState(this);
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
  }) {
    return successPickImageProfileState?.call(this);
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (successPickImageProfileState != null) {
      return successPickImageProfileState(this);
    }
    return orElse();
  }
}

abstract class _successPickImageProfileState implements UserState {
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
    extends _$UserStateCopyWithImpl<$Res, _$_errorPickImageProfileState>
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
    return 'UserState.errorPickImageProfileState()';
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
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) {
    return errorPickImageProfileState();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) {
    return errorPickImageProfileState?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
  }) {
    return errorPickImageProfileState(this);
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
  }) {
    return errorPickImageProfileState?.call(this);
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (errorPickImageProfileState != null) {
      return errorPickImageProfileState(this);
    }
    return orElse();
  }
}

abstract class _errorPickImageProfileState implements UserState {
  const factory _errorPickImageProfileState() = _$_errorPickImageProfileState;
}

/// @nodoc
abstract class _$$_successUpdateMyProfileStateCopyWith<$Res> {
  factory _$$_successUpdateMyProfileStateCopyWith(
          _$_successUpdateMyProfileState value,
          $Res Function(_$_successUpdateMyProfileState) then) =
      __$$_successUpdateMyProfileStateCopyWithImpl<$Res>;
  @useResult
  $Res call({UserModel userModel});

  $UserModelCopyWith<$Res> get userModel;
}

/// @nodoc
class __$$_successUpdateMyProfileStateCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_successUpdateMyProfileState>
    implements _$$_successUpdateMyProfileStateCopyWith<$Res> {
  __$$_successUpdateMyProfileStateCopyWithImpl(
      _$_successUpdateMyProfileState _value,
      $Res Function(_$_successUpdateMyProfileState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? userModel = null,
  }) {
    return _then(_$_successUpdateMyProfileState(
      null == userModel
          ? _value.userModel
          : userModel // ignore: cast_nullable_to_non_nullable
              as UserModel,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $UserModelCopyWith<$Res> get userModel {
    return $UserModelCopyWith<$Res>(_value.userModel, (value) {
      return _then(_value.copyWith(userModel: value));
    });
  }
}

/// @nodoc

class _$_successUpdateMyProfileState implements _successUpdateMyProfileState {
  const _$_successUpdateMyProfileState(this.userModel);

  @override
  final UserModel userModel;

  @override
  String toString() {
    return 'UserState.successUpdateMyProfileState(userModel: $userModel)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successUpdateMyProfileState &&
            (identical(other.userModel, userModel) ||
                other.userModel == userModel));
  }

  @override
  int get hashCode => Object.hash(runtimeType, userModel);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_successUpdateMyProfileStateCopyWith<_$_successUpdateMyProfileState>
      get copyWith => __$$_successUpdateMyProfileStateCopyWithImpl<
          _$_successUpdateMyProfileState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) {
    return successUpdateMyProfileState(userModel);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) {
    return successUpdateMyProfileState?.call(userModel);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (successUpdateMyProfileState != null) {
      return successUpdateMyProfileState(userModel);
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
  }) {
    return successUpdateMyProfileState(this);
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
  }) {
    return successUpdateMyProfileState?.call(this);
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (successUpdateMyProfileState != null) {
      return successUpdateMyProfileState(this);
    }
    return orElse();
  }
}

abstract class _successUpdateMyProfileState implements UserState {
  const factory _successUpdateMyProfileState(final UserModel userModel) =
      _$_successUpdateMyProfileState;

  UserModel get userModel;
  @JsonKey(ignore: true)
  _$$_successUpdateMyProfileStateCopyWith<_$_successUpdateMyProfileState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_errorUpdateMyProfileStateCopyWith<$Res> {
  factory _$$_errorUpdateMyProfileStateCopyWith(
          _$_errorUpdateMyProfileState value,
          $Res Function(_$_errorUpdateMyProfileState) then) =
      __$$_errorUpdateMyProfileStateCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$_errorUpdateMyProfileStateCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_errorUpdateMyProfileState>
    implements _$$_errorUpdateMyProfileStateCopyWith<$Res> {
  __$$_errorUpdateMyProfileStateCopyWithImpl(
      _$_errorUpdateMyProfileState _value,
      $Res Function(_$_errorUpdateMyProfileState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$_errorUpdateMyProfileState(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$_errorUpdateMyProfileState implements _errorUpdateMyProfileState {
  const _$_errorUpdateMyProfileState(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'UserState.errorUpdateMyProfileState(message: $message)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_errorUpdateMyProfileState &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_errorUpdateMyProfileStateCopyWith<_$_errorUpdateMyProfileState>
      get copyWith => __$$_errorUpdateMyProfileStateCopyWithImpl<
          _$_errorUpdateMyProfileState>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() userInitial,
    required TResult Function() loading,
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) {
    return errorUpdateMyProfileState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) {
    return errorUpdateMyProfileState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (errorUpdateMyProfileState != null) {
      return errorUpdateMyProfileState(message);
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
  }) {
    return errorUpdateMyProfileState(this);
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
  }) {
    return errorUpdateMyProfileState?.call(this);
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (errorUpdateMyProfileState != null) {
      return errorUpdateMyProfileState(this);
    }
    return orElse();
  }
}

abstract class _errorUpdateMyProfileState implements UserState {
  const factory _errorUpdateMyProfileState(final String message) =
      _$_errorUpdateMyProfileState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorUpdateMyProfileStateCopyWith<_$_errorUpdateMyProfileState>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_successGetMyProfileStateCopyWith<$Res> {
  factory _$$_successGetMyProfileStateCopyWith(
          _$_successGetMyProfileState value,
          $Res Function(_$_successGetMyProfileState) then) =
      __$$_successGetMyProfileStateCopyWithImpl<$Res>;
  @useResult
  $Res call({UserModel userModel});

  $UserModelCopyWith<$Res> get userModel;
}

/// @nodoc
class __$$_successGetMyProfileStateCopyWithImpl<$Res>
    extends _$UserStateCopyWithImpl<$Res, _$_successGetMyProfileState>
    implements _$$_successGetMyProfileStateCopyWith<$Res> {
  __$$_successGetMyProfileStateCopyWithImpl(_$_successGetMyProfileState _value,
      $Res Function(_$_successGetMyProfileState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? userModel = null,
  }) {
    return _then(_$_successGetMyProfileState(
      null == userModel
          ? _value.userModel
          : userModel // ignore: cast_nullable_to_non_nullable
              as UserModel,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $UserModelCopyWith<$Res> get userModel {
    return $UserModelCopyWith<$Res>(_value.userModel, (value) {
      return _then(_value.copyWith(userModel: value));
    });
  }
}

/// @nodoc

class _$_successGetMyProfileState implements _successGetMyProfileState {
  const _$_successGetMyProfileState(this.userModel);

  @override
  final UserModel userModel;

  @override
  String toString() {
    return 'UserState.successGetMyProfileState(userModel: $userModel)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_successGetMyProfileState &&
            (identical(other.userModel, userModel) ||
                other.userModel == userModel));
  }

  @override
  int get hashCode => Object.hash(runtimeType, userModel);

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
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) {
    return successGetMyProfileState(userModel);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) {
    return successGetMyProfileState?.call(userModel);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (successGetMyProfileState != null) {
      return successGetMyProfileState(userModel);
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
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
  }) {
    return successGetMyProfileState(this);
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
  }) {
    return successGetMyProfileState?.call(this);
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (successGetMyProfileState != null) {
      return successGetMyProfileState(this);
    }
    return orElse();
  }
}

abstract class _successGetMyProfileState implements UserState {
  const factory _successGetMyProfileState(final UserModel userModel) =
      _$_successGetMyProfileState;

  UserModel get userModel;
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
    extends _$UserStateCopyWithImpl<$Res, _$_errorGetMyProfileState>
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
    return 'UserState.errorGetMyProfileState(message: $message)';
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
    required TResult Function(String message) successUpdateMyPasswordState,
    required TResult Function(String message) errorUpdateMyPasswordState,
    required TResult Function(bool isVisible) successChangeIconVisibilityState,
    required TResult Function(File image) successPickImageProfileState,
    required TResult Function() errorPickImageProfileState,
    required TResult Function(UserModel userModel) successUpdateMyProfileState,
    required TResult Function(String message) errorUpdateMyProfileState,
    required TResult Function(UserModel userModel) successGetMyProfileState,
    required TResult Function(String message) errorGetMyProfileState,
  }) {
    return errorGetMyProfileState(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? userInitial,
    TResult? Function()? loading,
    TResult? Function(String message)? successUpdateMyPasswordState,
    TResult? Function(String message)? errorUpdateMyPasswordState,
    TResult? Function(bool isVisible)? successChangeIconVisibilityState,
    TResult? Function(File image)? successPickImageProfileState,
    TResult? Function()? errorPickImageProfileState,
    TResult? Function(UserModel userModel)? successUpdateMyProfileState,
    TResult? Function(String message)? errorUpdateMyProfileState,
    TResult? Function(UserModel userModel)? successGetMyProfileState,
    TResult? Function(String message)? errorGetMyProfileState,
  }) {
    return errorGetMyProfileState?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? userInitial,
    TResult Function()? loading,
    TResult Function(String message)? successUpdateMyPasswordState,
    TResult Function(String message)? errorUpdateMyPasswordState,
    TResult Function(bool isVisible)? successChangeIconVisibilityState,
    TResult Function(File image)? successPickImageProfileState,
    TResult Function()? errorPickImageProfileState,
    TResult Function(UserModel userModel)? successUpdateMyProfileState,
    TResult Function(String message)? errorUpdateMyProfileState,
    TResult Function(UserModel userModel)? successGetMyProfileState,
    TResult Function(String message)? errorGetMyProfileState,
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
    required TResult Function(_successUpdateMyPasswordState value)
        successUpdateMyPasswordState,
    required TResult Function(_errorUpdateMyPasswordState value)
        errorUpdateMyPasswordState,
    required TResult Function(_changeIconVisibilityState value)
        successChangeIconVisibilityState,
    required TResult Function(_successPickImageProfileState value)
        successPickImageProfileState,
    required TResult Function(_errorPickImageProfileState value)
        errorPickImageProfileState,
    required TResult Function(_successUpdateMyProfileState value)
        successUpdateMyProfileState,
    required TResult Function(_errorUpdateMyProfileState value)
        errorUpdateMyProfileState,
    required TResult Function(_successGetMyProfileState value)
        successGetMyProfileState,
    required TResult Function(_errorGetMyProfileState value)
        errorGetMyProfileState,
  }) {
    return errorGetMyProfileState(this);
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
    TResult? Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult? Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult? Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult? Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult? Function(_successGetMyProfileState value)?
        successGetMyProfileState,
    TResult? Function(_errorGetMyProfileState value)? errorGetMyProfileState,
  }) {
    return errorGetMyProfileState?.call(this);
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
    TResult Function(_successPickImageProfileState value)?
        successPickImageProfileState,
    TResult Function(_errorPickImageProfileState value)?
        errorPickImageProfileState,
    TResult Function(_successUpdateMyProfileState value)?
        successUpdateMyProfileState,
    TResult Function(_errorUpdateMyProfileState value)?
        errorUpdateMyProfileState,
    TResult Function(_successGetMyProfileState value)? successGetMyProfileState,
    TResult Function(_errorGetMyProfileState value)? errorGetMyProfileState,
    required TResult orElse(),
  }) {
    if (errorGetMyProfileState != null) {
      return errorGetMyProfileState(this);
    }
    return orElse();
  }
}

abstract class _errorGetMyProfileState implements UserState {
  const factory _errorGetMyProfileState(final String message) =
      _$_errorGetMyProfileState;

  String get message;
  @JsonKey(ignore: true)
  _$$_errorGetMyProfileStateCopyWith<_$_errorGetMyProfileState> get copyWith =>
      throw _privateConstructorUsedError;
}
