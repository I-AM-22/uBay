// To parse this JSON data, do
//
//     final allProductModel = allProductModelFromJson(jsonString);

import 'package:freezed_annotation/freezed_annotation.dart';

part 'all_product_model.freezed.dart';
part 'all_product_model.g.dart';

@freezed
class AllProductModel with _$AllProductModel {
  const factory AllProductModel({
    Product? product,
    Employee? employee,
  }) = _AllProductModel;

  factory AllProductModel.fromJson(Map<String, dynamic> json) => _$AllProductModelFromJson(json);
}

@freezed
class Employee with _$Employee {
  const factory Employee({
    String? id,
    String? name,
    String? email,
  }) = _Employee;

  factory Employee.fromJson(Map<String, dynamic> json) => _$EmployeeFromJson(json);
}

@freezed
class Product with _$Product {
  const factory Product({
    String? id,
    String? title,
    String? content,
    String? user,
    List<dynamic>? likedBy,
    List<dynamic>? coupons,
    List<String>? photos,
    int? price,
    bool? isPaid,
    String? category,
    String? store,
    int? comments,
    String? createdAt,
    String? updatedAt,
    int? v,
  }) = _Product;

  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);
}