import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Color primaryColor = const Color(0xFF4338CA);
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
            statusBarIconBrightness: Brightness.light)),);
