import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/errors/failures.dart';
import 'package:warehouse/core/network_info.dart';
import 'package:warehouse/features/product/data/datasource/product_local_datasource.dart';
import 'package:warehouse/features/product/data/datasource/product_remote_datasource.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';
import 'package:warehouse/features/product/domain/repository/product_repository.dart';

@Injectable(as: ProductRepository)
class ProductRepositoryImplement implements ProductRepository{
  final NetworkInfo networkInfo;
  final ProductRemoteDataSource productRemoteDataSource;
  final ProductLocalDataSource productLocalDataSource;

  ProductRepositoryImplement(this.networkInfo, this.productRemoteDataSource, this.productLocalDataSource);
  @override
  Future<Either<Failure, ProductModel>> getProduct(String id)async {
    if(await networkInfo.isConnected){
      print('inside');
      try{
        final productModel=await productRemoteDataSource.getProduct(id);
        return Right(productModel);
      }on ServerException{
        return Left(ServerFailure());
      }
    }else{
      return Left(OfflineFailure());
    }
  }

  @override
  Future<Either<Failure, Unit>> receiveProduct(String id,int status) async{
    if(await networkInfo.isConnected){
      try{
        await productRemoteDataSource.receiveProduct(id,status);
        return const Right(unit);
      }on ServerException{
        return Left(ServerFailure());
      }
    }else{
      return Left(OfflineFailure());
    }
  }

}