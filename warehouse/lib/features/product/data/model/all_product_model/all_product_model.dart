
import 'package:freezed_annotation/freezed_annotation.dart';

part 'all_product_model.freezed.dart';
part 'all_product_model.g.dart';

@freezed
class AllProductModel with _$AllProductModel {
  const factory AllProductModel({
    required Product product,
    required Employee employee,
  }) = _AllProductModel;

  factory AllProductModel.fromJson(Map<String, dynamic> json) => _$AllProductModelFromJson(json);
}

@freezed
class Employee with _$Employee {
  const factory Employee({
    required String id,
    required String name,
    required String email,
  }) = _employee;

  factory Employee.fromJson(Map<String, dynamic> json) => _$EmployeeFromJson(json);
}

@freezed
class Product with _$Product {
  const factory Product({
    required String id,
    required String title,
    required String content,
    required List<dynamic> coupons,
    required List<String> photos,
    required int price,
    required DateTime createdAt,
  }) = _product;

  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);
}
