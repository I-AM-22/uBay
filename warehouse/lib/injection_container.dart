import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/injection_container.config.dart';

final getIt = GetIt.instance;

@InjectableInit()
Future<void> init() async {
  getIt.init();
  final sharedPreferences = await SharedPreferences.getInstance();
  getIt.registerLazySingleton(() => sharedPreferences);
}
