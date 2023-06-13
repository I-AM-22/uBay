import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';

abstract class ProductLocalDataSource{
  Future<Unit> getAllProducts();
}

@Injectable(as: ProductLocalDataSource)
class ProductLocalDataSourceImplement implements ProductLocalDataSource{
  @override
  Future<Unit> getAllProducts() {
    // TODO: implement getAllProducts
    throw UnimplementedError();
  }

}