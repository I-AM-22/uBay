import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@injectable
class GetProductUseCase{
  final ProductRepository productRepository;

  GetProductUseCase(this.productRepository);

  Future<Either<Failure,ProductModel>> call(String id)async{
    return await productRepository.getProduct(id);
  }
}