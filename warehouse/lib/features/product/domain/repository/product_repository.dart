import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';
import 'package:warehouse/features/product/data/model/recive_and_give_model/recive_and_give_model.dart';

import '../../data/model/product_model/product_model.dart';

abstract class ProductRepository{
  Future<Either<Failure,ProductModel>> getProduct(String id);
  Future<Either<Failure,Unit>> receiveProduct(String id,String status);
  Future<Either<Failure,List<AllProductModel>>> getAllProducts();
  Future<Unit> logOut();
  Future<Either<Failure,ReceiveAndGiveModel>> getReceiveAndGiveProducts();
}