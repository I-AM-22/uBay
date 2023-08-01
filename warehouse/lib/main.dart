import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/temp.dart';
import 'features/product/presentation/pages/home_page.dart';
import 'injection_container.dart' as di;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  DioHelper.init();
  Bloc.observer = MyBlocObserver();
  await di.configureDependencies();
  // ignore: unused_local_variable
  token = di.getIt<SharedPreferences>().getString('CACHE_LOGIN');
  print(token);
  String initialRoot='/loginScreen';
  if(token!=null) {
    initialRoot='/homePage';
  }else{
    initialRoot='/loginScreen';
  }
  runApp( MyApp(initialRoot: initialRoot,));
}

class MyApp extends StatelessWidget {
  final String initialRoot;
  const MyApp({super.key, required this.initialRoot});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      routes: {
        '/loginScreen': (context) => const LoginPage(),
        '/homePage': (context) => const HomePage(),
      },
      initialRoute: initialRoot,
    );
  }
}
