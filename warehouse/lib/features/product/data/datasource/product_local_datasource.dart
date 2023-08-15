import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';

abstract class ProductLocalDataSource {
  Future<Unit> logOut();

  Future<Unit> cacheAllProduct(List<AllProductModel> allProductModel);

  Future<List<AllProductModel>> getCacheAllProduct();
}

@Injectable(as: ProductLocalDataSource)
class ProductLocalDataSourceImplement implements ProductLocalDataSource {
  final SharedPreferences sharedPreferences;

  ProductLocalDataSourceImplement(this.sharedPreferences);

  @override
  Future<Unit> logOut() {
    sharedPreferences.remove('CACHE_TOKEN');
    sharedPreferences.remove('CACHE_ID_STORE');
    sharedPreferences.remove('CACHE_ID_EMPLOYEE');
    return Future.value(unit);
  }

  @override
  Future<Unit> cacheAllProduct(List<AllProductModel> allProductModel) {
    if (allProductModel.isNotEmpty) {
      List productModelToJson =
          allProductModel.map<Map<String, dynamic>>((e) => e.toJson()).toList();
      sharedPreferences.setString(
          'CACHE_PRODUCTS', json.encode(productModelToJson));
    }

    return Future.value(unit);
  }

  @override
  Future<List<AllProductModel>> getCacheAllProduct() {
    final jsonString = sharedPreferences.getString('CACHE_PRODUCTS');
    if (jsonString != null) {
      List decodeJsonData = json.decode(jsonString);
      List<AllProductModel>? allProductModel = decodeJsonData
          .map<AllProductModel>((e) => AllProductModel.fromJson(e))
          .toList();
      return Future.value(allProductModel);
    } else {
      throw EmptyCacheException();
    }
  }
}
