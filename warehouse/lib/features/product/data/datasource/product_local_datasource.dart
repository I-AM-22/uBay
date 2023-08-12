import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';

abstract class ProductLocalDataSource{
  Future<Unit> logOut();
  Future<Unit> cacheAllProduct(AllProductModel allProductModel);
  Future<AllProductModel> getCacheAllProduct();
}

@Injectable(as: ProductLocalDataSource)
class ProductLocalDataSourceImplement implements ProductLocalDataSource{
  final SharedPreferences sharedPreferences;

  ProductLocalDataSourceImplement(this.sharedPreferences);
  @override
  Future<Unit> logOut() {
    sharedPreferences.remove('CACHE_TOKEN');
    sharedPreferences.remove('CACHE_ID_STORE');
    return Future.value(unit);
  }

  @override
  Future<Unit> cacheAllProduct(AllProductModel allProductModel) {
    List productModelToJson=allProductModel.product.map<Map<String,dynamic>>((e) => e.toJson()).toList();
    sharedPreferences.setString('CACHE_PRODUCTS', json.encode(productModelToJson));
    return Future.value(unit);
  }

  @override
  Future<AllProductModel> getCacheAllProduct() {
    // TODO: implement getCacheAllProduct
    throw UnimplementedError();
  }


}