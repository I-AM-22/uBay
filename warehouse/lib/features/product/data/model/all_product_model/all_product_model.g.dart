// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'all_product_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_AllProductModel _$$_AllProductModelFromJson(Map<String, dynamic> json) =>
    _$_AllProductModel(
      product: (json['product'] as List<dynamic>)
          .map((e) => Product.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$_AllProductModelToJson(_$_AllProductModel instance) =>
    <String, dynamic>{
      'product': instance.product,
    };

_$_Product _$$_ProductFromJson(Map<String, dynamic> json) => _$_Product(
      id: json['id'] as String,
      content: json['content'] as String,
      title: json['title'] as String,
      photos:
          (json['photos'] as List<dynamic>).map((e) => e as String).toList(),
      price: json['price'] as int,
    );

Map<String, dynamic> _$$_ProductToJson(_$_Product instance) =>
    <String, dynamic>{
      'id': instance.id,
      'content': instance.content,
      'title': instance.title,
      'photos': instance.photos,
      'price': instance.price,
    };
