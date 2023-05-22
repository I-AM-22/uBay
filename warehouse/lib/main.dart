import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/auth/data/model/user_login_model.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/temp.dart';
import 'injection_container.dart' as di;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  DioHelper.init();
  Bloc.observer = MyBlocObserver();
  await di.init();
  final userLogin = di.getIt<SharedPreferences>().getString('USER_LOGIN');
  UserLogin jsonToModel = UserLogin.fromJson(json.decode(userLogin!));
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      routes: {
        '/loginScreen': (context) => const LoginPage(),
      },
      initialRoute: '/loginScreen',
    );
  }
}
