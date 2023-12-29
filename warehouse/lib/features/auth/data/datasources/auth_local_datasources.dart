import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/common/constants/configuration/prefs_key.dart';

abstract class AuthLocalDataSource {
  Future<Unit> cacheLogin(
      {required String token,
      required String idStore,
      required String idEmployee});
}

@LazySingleton(as: AuthLocalDataSource)
class AuthLocalDataSourceImpl implements AuthLocalDataSource {
  final SharedPreferences sharedPreferences;

  AuthLocalDataSourceImpl(this.sharedPreferences);
  @override
  Future<Unit> cacheLogin(
      {required String token,
      required String idStore,
      required String idEmployee}) {
    sharedPreferences.setString(PrefsKey.token, token);
    sharedPreferences.setString(PrefsKey.storeId, idStore);
    sharedPreferences.setString(PrefsKey.employeeId, idEmployee);
    return Future.value(unit);
  }
}
