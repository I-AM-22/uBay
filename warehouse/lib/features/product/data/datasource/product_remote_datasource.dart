import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';
import 'package:warehouse/features/product/data/model/recive_and_give_model/recive_and_give_model.dart';

import '../../../../core/strings/failure.dart';
import '../model/all_product_model/all_product_model.dart';

abstract class ProductRemoteDataSource {
  Future<ProductModel> getProduct(String id);

  Future<Unit> receiveProduct(String id, String status);

  Future<List<AllProductModel>> getAllProduct();

  Future<ReceiveAndGiveModel> getReceiveAndGiveProducts();
}

@Injectable(as: ProductRemoteDataSource)
class ProductRemoteDataSourceImplement implements ProductRemoteDataSource {
  @override
  Future<ProductModel> getProduct(String id) async {
    ProductModel? productModel;
    await DioHelper.getData(url: '$GET_PRODUCT$id', token: token)
        .then((value) {
      productModel = ProductModel.fromJson(value.data);
      return Future.value(productModel);
    }).catchError((error) {
      DioError dioError = error;
      if (dioError.response != null) {
        SERVER_FAILURE = _mapResponseError(dioError.response!);
      }
      throw ServerException();
    });
    return Future.value(productModel);
  }

  @override
  Future<Unit> receiveProduct(String id, String status) async {
    await DioHelper.postData(
        url: RECEIVE_DELIVERY,
        token: token,
        data: {'payment': id, 'status': status}).then((value) {
    }).catchError((error) {
      DioError dioError = error;
      if (dioError.response != null) {
        SERVER_FAILURE = _mapResponseError(dioError.response!);
      }
      throw ServerException();
    });
    return Future.value(unit);
  }

  @override
  Future<List<AllProductModel>> getAllProduct() async {
    List<AllProductModel> allProductModel = [];
    await DioHelper.getData(
            url: '$GET_ALL_PRODUCT_1$idStore$GET_ALL_PRODUCT_2', token: token)
        .then((value) {
      value.data.forEach((element) {
        allProductModel.add(AllProductModel.fromJson(element));
      });
      return Future.value(allProductModel);
    }).catchError((error) {
      DioError dioError = error;
      if (dioError.response != null) {
        SERVER_FAILURE = _mapResponseError(dioError.response!);
      }
      throw ServerException();
    });
    return Future.value(allProductModel);
  }

  @override
  Future<ReceiveAndGiveModel> getReceiveAndGiveProducts() async {
    ReceiveAndGiveModel? receiveAndGiveModel;
    await DioHelper.getData(
            url: '$GET_ALL_GIVE_RECEIVE_PRODUCT$idEmployee', token: token)
        .then((value) {
      receiveAndGiveModel = ReceiveAndGiveModel.fromJson(value.data);
      return Future.value(receiveAndGiveModel);
    }).catchError((error) {
      DioError dioError = error;
      if (dioError.response != null) {
        SERVER_FAILURE = _mapResponseError(dioError.response!);
      }
      return Future.value(receiveAndGiveModel);
    });
    return Future.value(receiveAndGiveModel);
  }
}

String _mapResponseError(Response response) {
  switch (response.data['type']) {
    case 'default':
      return response.data['message'];
    case 'form':
      return response.data['errors'][0]['message'];
    default:
      return SERVER_FAILURE;
  }
}
