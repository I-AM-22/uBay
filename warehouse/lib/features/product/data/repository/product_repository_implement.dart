import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@Injectable(as: ProductRepository)
class ProductRepositoryImplement implements ProductRepository{
  @override
  Future<Either<Failure, Unit>> getProduct(String id) {
    // TODO: implement getProduct
    throw UnimplementedError();
  }

}