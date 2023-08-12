import 'package:freezed_annotation/freezed_annotation.dart';

part 'all_product_model.freezed.dart';

part 'all_product_model.g.dart';

@freezed
class AllProductModel with _$AllProductModel {
  factory AllProductModel({required List<Product> product}) = _AllProductModel;

  factory AllProductModel.fromJson(Map<String, dynamic> json) =>
      _$AllProductModelFromJson(json);
}

@freezed
class Product with _$Product {
  factory Product(
      {required String id,
      required String content,
      required String title,
      required List<String> photos,
      required int price}) = _Product;

  factory Product.fromJson(Map<String, dynamic> json) =>
      _$ProductFromJson(json);
}
