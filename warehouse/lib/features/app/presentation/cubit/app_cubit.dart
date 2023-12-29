import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';
import 'package:injectable/injectable.dart';

part 'app_state.dart';

@lazySingleton
class AppCubit extends Cubit<AppState> {
  AppCubit()
      : super(AppState(
            lightTheme: ThemeData.light(), darkTheme: ThemeData.dark()));
}
