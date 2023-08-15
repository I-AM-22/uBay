import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@Injectable()
class GetAllProductUseCase{
  final ProductRepository productRepository;

  GetAllProductUseCase(this.productRepository);
  Future<Either<Failure,List<AllProductModel>>> call()async{
    return await productRepository.getAllProducts();
  }
}