import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@injectable
class GetProductUseCase{
  final ProductRepository productRepository;

  GetProductUseCase(this.productRepository);

  Future<Either<Failure,Unit>> call(String id)async{
    return await productRepository.getProduct(id);
  }
}