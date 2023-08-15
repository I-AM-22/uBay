import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Color primaryColor = const Color(0xFF6D28D9);
Color primaryColor1 = const Color(0xFFEDE9FE);
Color primaryColor12 = const Color(0xFFDDD6FE);
Color primaryColor13 = const Color(0xFFC4B5FD);
Color primaryColor2 = const Color(0xFFC4B5FD);
Color primaryColor3 = const Color(0xFFA78BFA);
Color primaryColor4 = const Color(0xFF8B5CF6);
Color primaryColor6 = const Color(0xFF7C3AED);
Color primaryColor7 = const Color(0xFF5B21B6);
Color primaryColor8 = const Color(0xFF4C1D95);
Color primaryColor5 = const Color(0xFF17008A);
Color secondaryColor = const Color(0xFFBE185D);
const double borderRadius = 12.0;

Color backGround = const Color(0xFFEFF5F5);

//light theme
final lightTheme = ThemeData(
  useMaterial3: true,
  scaffoldBackgroundColor: backGround,
  textTheme: TextTheme(
    bodyLarge: const TextStyle(
        color: Colors.black,
        fontFamily: 'Mont',
        fontSize: 25,
        fontWeight: FontWeight.bold),
    bodySmall:
        const TextStyle(color: Colors.black, fontFamily: 'Mont', fontSize: 10),
    bodyMedium:
        const TextStyle(color: Colors.black, fontFamily: 'Mont', fontSize: 15,fontWeight: FontWeight.normal),
    titleSmall:
        TextStyle(color: primaryColor, fontFamily: 'Mont', fontSize: 12),
    titleMedium: const TextStyle(color: Colors.white,fontFamily: 'Mont',fontSize: 18)
  ),
  bottomNavigationBarTheme: BottomNavigationBarThemeData(
    elevation: 10,
    selectedItemColor: primaryColor,
  ),
  appBarTheme: AppBarTheme(
      backgroundColor: primaryColor,
      systemOverlayStyle: SystemUiOverlayStyle(
          statusBarColor: primaryColor,
          statusBarIconBrightness: Brightness.light)),
);
