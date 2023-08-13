// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'all_product_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_AllProductModel _$$_AllProductModelFromJson(Map<String, dynamic> json) =>
    _$_AllProductModel(
      product: json['product'] == null
          ? null
          : Product.fromJson(json['product'] as Map<String, dynamic>),
      employee: json['employee'] == null
          ? null
          : Employee.fromJson(json['employee'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_AllProductModelToJson(_$_AllProductModel instance) =>
    <String, dynamic>{
      'product': instance.product,
      'employee': instance.employee,
    };

_$_Employee _$$_EmployeeFromJson(Map<String, dynamic> json) => _$_Employee(
      id: json['id'] as String?,
      name: json['name'] as String?,
      email: json['email'] as String?,
    );

Map<String, dynamic> _$$_EmployeeToJson(_$_Employee instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'email': instance.email,
    };

_$_Product _$$_ProductFromJson(Map<String, dynamic> json) => _$_Product(
      id: json['id'] as String?,
      title: json['title'] as String?,
      content: json['content'] as String?,
      user: json['user'] as String?,
      likedBy: json['likedBy'] as List<dynamic>?,
      coupons: json['coupons'] as List<dynamic>?,
      photos:
          (json['photos'] as List<dynamic>?)?.map((e) => e as String).toList(),
      price: json['price'] as int?,
      isPaid: json['isPaid'] as bool?,
      category: json['category'] as String?,
      store: json['store'] as String?,
      comments: json['comments'] as int?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
      v: json['v'] as int?,
    );

Map<String, dynamic> _$$_ProductToJson(_$_Product instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'content': instance.content,
      'user': instance.user,
      'likedBy': instance.likedBy,
      'coupons': instance.coupons,
      'photos': instance.photos,
      'price': instance.price,
      'isPaid': instance.isPaid,
      'category': instance.category,
      'store': instance.store,
      'comments': instance.comments,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
      'v': instance.v,
    };
