import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';

import '../../../../core/strings/failure.dart';

abstract class ProductRemoteDataSource {
  Future<ProductModel> getProduct(String id);

  Future<Unit> receiveProduct(String id, int status);
}

@Injectable(as: ProductRemoteDataSource)
class ProductRemoteDataSourceImplement implements ProductRemoteDataSource {
  @override
  Future<ProductModel> getProduct(String id) async {
    ProductModel? productModel;
    await DioHelper.getData(
            url: '$GET_PRODUCT/$id', token: employeeDetails!.token)
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
  Future<Unit> receiveProduct(String id, int status) async{
   await DioHelper.postData(
            url: RECEIVE_DELIVERY,
            token: employeeDetails!.token,
            data: {'payment': id, 'status': status})
        .then((value) {
          print('the product is: ${value.data}');
    })
        .catchError((error) {
          print(error.toString());
      // if (error.response != null) {
      //   SERVER_FAILURE = _mapResponseError(error.response);
      // }
      throw ServerException();
    });
    return Future.value(unit);
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
