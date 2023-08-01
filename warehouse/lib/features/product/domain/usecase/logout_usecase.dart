import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@lazySingleton
class LogOutUseCase{
  final ProductRepository productRepository;

  LogOutUseCase(this.productRepository);

  Future<Unit> call()async{
    return await productRepository.logOut();
  }
}