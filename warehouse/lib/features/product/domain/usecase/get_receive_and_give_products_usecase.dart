import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/data/model/recive_and_give_model/recive_and_give_model.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@injectable
class ReceiveAndGiveProductsUseCase{
  final ProductRepository productRepository;

  ReceiveAndGiveProductsUseCase(this.productRepository);

  Future<Either<Failure,ReceiveAndGiveModel>> call()async{
    return await productRepository.getReceiveAndGiveProducts();
  }
}