import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Color primaryColor = const Color(0xFF6D28D9);
Color primaryColor2 = const Color(0xFFC4B5FD);
Color primaryColor3 = const Color(0xFFA78BFA);
Color primaryColor4 = const Color(0xFF8B5CF6);
Color primaryColor5 = const Color(0xFF17008A);
Color secondaryColor = const Color(0xFFBE185D);

Color backGround = const Color(0xFFEFF5F5);

//light theme
final lightTheme = ThemeData(
  useMaterial3: true,
  scaffoldBackgroundColor: backGround,
  appBarTheme: AppBarTheme(
      backgroundColor: primaryColor,
      systemOverlayStyle: SystemUiOverlayStyle(
          statusBarColor: primaryColor,
          statusBarIconBrightness: Brightness.light)),
);
