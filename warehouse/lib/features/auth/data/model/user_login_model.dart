// This file is "main.dart"
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter/foundation.dart';

// required: associates our `main.dart` with the code generated by Freezed
part 'user_login_model.freezed.dart';

// optional: Since our Person class is serializable, we must add this line.
// But if Person was not serializable, we could skip it.
part 'user_login_model.g.dart';

@freezed
class UserLogin with _$UserLogin {
  factory UserLogin(
      {required String status,
      required String token,
      required Data data}) = _UserLogin;

  factory UserLogin.fromJson(Map<String, dynamic> json) =>
      _$UserLoginFromJson(json);
}

@freezed
class Data with _$Data {
  factory Data({required User user}) = _Data;
  factory Data.fromJson(Map<String, dynamic> json) => _$DataFromJson(json);
}

@freezed
class User with _$User {
  factory User(
      {required String userId,
      required String name,
      required String email,
      required String photo,
      required String role,
      required DateTime createdAt,
      required DateTime updatedAt,
      required String id}) = _User;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}
