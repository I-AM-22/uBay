import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/features/product/presentation/widget/build_qr_widget.dart';
import 'package:warehouse/temp.dart';
import 'features/product/presentation/pages/home_page.dart';
import 'injection_container.dart' as di;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  DioHelper.init();
  Bloc.observer = MyBlocObserver();
  await di.configureDependencies();
  // ignore: unused_local_variable
  token = di.getIt<SharedPreferences>().getString('CACHE_TOKEN');
  idStore = di.getIt<SharedPreferences>().getString('CACHE_ID_STORE');
  idEmployee = di.getIt<SharedPreferences>().getString('CACHE_ID_EMPLOYEE');
  print(token);
  print(idEmployee);
  print(idStore);
  Widget widget;
  String initialRoot = '/loginScreen';
  if (token != null) {
    widget = HomePage();
    initialRoot = '/homePage';
  } else {
    widget = LoginPage();
    initialRoot = '/loginScreen';
  }
  runApp(MyApp(
    initialRoot: initialRoot,
    widget: widget,
  ));
}

class MyApp extends StatelessWidget {
  final String initialRoot;
  final Widget widget;

  const MyApp({super.key, required this.initialRoot, required this.widget});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      routes: {
        '/loginScreen': (context) => const LoginPage(),
        '/homePage': (context) => HomePage(),
        '/qrPage': (context) => BuildQrWidget()
      },
      home: AnimatedSplashScreen(
        nextScreen: widget,
        splash: 'assets/images/uBay Logo.png',
        splashTransition: SplashTransition.rotationTransition,
        nextRoute: initialRoot,
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  final String initialRoot;

  const SecondScreen({super.key, required this.initialRoot});

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
