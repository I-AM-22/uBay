// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'product_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_ProductModel _$$_ProductModelFromJson(Map<String, dynamic> json) =>
    _$_ProductModel(
      id: json['id'] as String,
      title: json['title'] as String,
      content: json['content'] as String,
      photos:
          (json['photos'] as List<dynamic>).map((e) => e as String).toList(),
      price: json['price'] as int,
      store: Store.fromJson(json['store'] as Map<String, dynamic>),
      createdAt: DateTime.parse(json['createdAt'] as String),
      user: User.fromJson(json['user'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_ProductModelToJson(_$_ProductModel instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'content': instance.content,
      'photos': instance.photos,
      'price': instance.price,
      'store': instance.store,
      'createdAt': instance.createdAt.toIso8601String(),
      'user': instance.user,
    };

_$_User _$$_UserFromJson(Map<String, dynamic> json) => _$_User(
      id: json['id'] as String,
      name: json['name'] as String,
      photo: json['photo'] as String,
    );

Map<String, dynamic> _$$_UserToJson(_$_User instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'photo': instance.photo,
    };

_$_Store _$$_StoreFromJson(Map<String, dynamic> json) => _$_Store(
      name: json['name'] as String,
      id: json['id'] as String,
    );

Map<String, dynamic> _$$_StoreToJson(_$_Store instance) => <String, dynamic>{
      'name': instance.name,
      'id': instance.id,
    };
