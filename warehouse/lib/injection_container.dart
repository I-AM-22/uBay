import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/injection_container.config.dart';

final getIt = GetIt.instance;

@InjectableInit()
Future<void> init() async {
  getIt.init();
}

@module
abstract class RegisterModule {
  Future<SharedPreferences> get sharedPreferences =>
      SharedPreferences.getInstance();
}
