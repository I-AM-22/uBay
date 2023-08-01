import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';

import '../../data/model/product_model/product_model.dart';

abstract class ProductRepository{
  Future<Either<Failure,ProductModel>> getProduct(String id);
  Future<Either<Failure,Unit>> receiveProduct(String id,String status);
  Future<Unit> logOut();
}