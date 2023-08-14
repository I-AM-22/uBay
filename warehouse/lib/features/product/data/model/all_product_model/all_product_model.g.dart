// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'all_product_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_AllProductModel _$$_AllProductModelFromJson(Map<String, dynamic> json) =>
    _$_AllProductModel(
      product: Product.fromJson(json['product'] as Map<String, dynamic>),
      employee: Employee.fromJson(json['employee'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_AllProductModelToJson(_$_AllProductModel instance) =>
    <String, dynamic>{
      'product': instance.product,
      'employee': instance.employee,
    };

_$_employee _$$_employeeFromJson(Map<String, dynamic> json) => _$_employee(
      id: json['id'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
    );

Map<String, dynamic> _$$_employeeToJson(_$_employee instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'email': instance.email,
    };

_$_product _$$_productFromJson(Map<String, dynamic> json) => _$_product(
      id: json['id'] as String,
      title: json['title'] as String,
      content: json['content'] as String,
      coupons: json['coupons'] as List<dynamic>,
      photos:
          (json['photos'] as List<dynamic>).map((e) => e as String).toList(),
      price: json['price'] as int,
      createdAt: DateTime.parse(json['createdAt'] as String),
    );

Map<String, dynamic> _$$_productToJson(_$_product instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'content': instance.content,
      'coupons': instance.coupons,
      'photos': instance.photos,
      'price': instance.price,
      'createdAt': instance.createdAt.toIso8601String(),
    };
