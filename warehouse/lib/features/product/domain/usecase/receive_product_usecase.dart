import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@injectable
class ReceiveProductUseCase {
  final ProductRepository productRepository;

  ReceiveProductUseCase(this.productRepository);

  Future<Either<Failure, Unit>> call(String id,String status) async {
    return await productRepository.receiveProduct(id,status);
  }
}
