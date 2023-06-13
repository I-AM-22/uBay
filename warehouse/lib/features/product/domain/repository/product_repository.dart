import 'package:dartz/dartz.dart';
import 'package:warehouse/core/errors/failures.dart';

abstract class ProductRepository{
  Future<Either<Failure,Unit>> getProduct(String id);
}