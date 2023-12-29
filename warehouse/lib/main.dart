import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/common/constants/configuration/prefs_key.dart';
import 'package:warehouse/common/model/localization_config.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/initialization.dart';
import 'package:warehouse/temp.dart';
import 'features/app/presentation/pages/app.dart';
import 'features/product/presentation/pages/home_page.dart';
import 'generated/codegen_loader.g.dart';
import 'injection_container.dart' as di;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  DioHelper.init();
  Bloc.observer = MyBlocObserver();
  await di.configureDependencies();
  // ignore: unused_local_variable
  token = di.getIt<SharedPreferences>().getString(PrefsKey.token);
  idStore = di.getIt<SharedPreferences>().getString(PrefsKey.storeId);
  idEmployee = di.getIt<SharedPreferences>().getString(PrefsKey.employeeId);
  Widget widget;
  String initialRoot = '/loginScreen';
  if (token != null) {
    widget = HomePage();
    initialRoot = '/homePage';
  } else {
    widget = LoginPage();
    initialRoot = '/loginScreen';
  }
  await initialization(() => MyApp(initialRoot: initialRoot, widget: widget),
      localizationConfig: LocalizationConfig(assetLoader: CodegenLoader()));
}
