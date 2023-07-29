import 'package:freezed_annotation/freezed_annotation.dart';

part 'product_model.freezed.dart';

part 'product_model.g.dart';

@freezed
class ProductModel with _$ProductModel {
  factory ProductModel(
      {required String id,
      required String title,
      required String content,
      required List<String> photos,
      required int price,
      required User user}) = _ProductModel;

  factory ProductModel.fromJson(Map<String, dynamic> json) =>
      _$ProductModelFromJson(json);
}

@freezed
class User with _$User {
  factory User(
      {required String id,
      required String name,
      required String photo}) = _User;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}
