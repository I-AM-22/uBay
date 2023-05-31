import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/auth/presentation/pages/forget_password_page.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/features/product/presentation/pages/get_product.dart';
import 'package:warehouse/features/user/presentation/pages/setting_page.dart';
import 'package:warehouse/features/user/presentation/pages/update_my_password_page.dart';
import 'package:warehouse/temp.dart';
import 'features/auth/data/model/user_login/user_login_model.dart';
import 'features/auth/presentation/pages/reset_password_page.dart';
import 'features/auth/presentation/pages/signup_page.dart';
import 'injection_container.dart' as di;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  DioHelper.init();
  Bloc.observer = MyBlocObserver();
  await di.configureDependencies();
  // ignore: unused_local_variable
  final jsonString = di.getIt<SharedPreferences>().getString('USER_LOGIN');
  UserLogin jsonToModel = UserLogin.fromJson(json.decode(jsonString!));
  token=jsonToModel.token;
  print(token);
  String initialRoot='/loginScreen';
  if(token!=null){
    initialRoot='/EmployeePage';
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
        '/SignupScreen': (context) => const SignupPage(),
        '/ForgetPasswordPage': (context) => ForgetPasswordPage(),
        '/ResetPasswordPage': (context) => const ResetPasswordPage(),
        '/EmployeePage': (context) => const Employee(),
        '/UpdateMyPasswordPage': (context) => const UpdateMyPasswordPage(),
      },
      initialRoute: initialRoot,
    );
  }
}

class Employee extends StatefulWidget {
  const Employee({Key? key}) : super(key: key);

  @override
  State<Employee> createState() => _EmployeeState();
}

class _EmployeeState extends State<Employee> {
  final List<Widget> _body = [const GetProductPage(), const SettingPage()];

  int index = 0;

  @override
  Widget build(BuildContext context) {
    return _buildBody(context);
  }

  Widget _buildBody(BuildContext context) => Scaffold(
    backgroundColor: backGround,
        appBar: AppBar(
          title: const Text(
            'نظيف',
            style: TextStyle(fontFamily: 'Mont', color: Colors.white),
          ),
          centerTitle: true,
        ),
        body: _body[index],
        bottomNavigationBar: BottomNavigationBar(
          selectedItemColor: primaryColor,
            onTap: (val) {
            setState(() {
              index=val;
            });
            },
            currentIndex: index,
            type: BottomNavigationBarType.fixed,
            selectedLabelStyle: const TextStyle(fontFamily: 'Mont'),
            unselectedLabelStyle: const TextStyle(fontFamily: 'Mont'),
            items: const [
              BottomNavigationBarItem(
                icon: Icon(Icons.production_quantity_limits),
                label: 'منتجات',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.settings),
                label: 'اعدادات',
              ),
            ]),
      );
}
