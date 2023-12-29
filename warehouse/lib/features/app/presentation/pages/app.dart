import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:get_it/get_it.dart';
import 'package:warehouse/features/app/presentation/cubit/app_cubit.dart';
import 'package:warehouse/service/language_service.dart';

import '../../../../core/theme.dart';
import '../../../auth/presentation/pages/login_page.dart';
import '../../../product/presentation/pages/home_page.dart';
import '../../../product/presentation/widget/build_qr_widget.dart';

class MyApp extends StatelessWidget {
  final String initialRoot;
  final Widget widget;

  const MyApp({super.key, required this.initialRoot, required this.widget});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => GetIt.I<AppCubit>(),
      child: BlocBuilder<AppCubit, AppState>(
        builder: (context, state) {
          LanguageService(context);
          return MaterialApp(
            debugShowCheckedModeBanner: false,
            locale: context.locale,
            localizationsDelegates: context.localizationDelegates,
            supportedLocales: context.supportedLocales,
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
        },
      ),
    );
  }
}
