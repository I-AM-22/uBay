import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';

abstract class ProductLocalDataSource{
  Future<Unit> logOut();
}

@Injectable(as: ProductLocalDataSource)
class ProductLocalDataSourceImplement implements ProductLocalDataSource{
  final SharedPreferences sharedPreferences;

  ProductLocalDataSourceImplement(this.sharedPreferences);
  @override
  Future<Unit> logOut() {
    sharedPreferences.remove('CACHE_LOGIN');
    return Future.value(unit);
  }


}