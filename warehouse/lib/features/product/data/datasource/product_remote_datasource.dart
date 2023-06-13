import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';

abstract class ProductRemoteDataSource{
  Future<Unit> getProduct(String id);
}

@Injectable(as: ProductRemoteDataSource)
class ProductRemoteDataSourceImplement implements ProductRemoteDataSource{
  @override
  Future<Unit> getProduct(String id) {
    // TODO: implement getProduct
    throw UnimplementedError();
  }

}