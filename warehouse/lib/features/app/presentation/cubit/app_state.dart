part of 'app_cubit.dart';

@immutable
class AppState {
  final ThemeData lightTheme;
  final ThemeData darkTheme;

  AppState({required this.lightTheme, required this.darkTheme});
  AppState copyWith({ThemeData? lightTheme, ThemeData? darkTheme}) {
    return AppState(
        lightTheme: lightTheme ?? this.lightTheme,
        darkTheme: darkTheme ?? this.darkTheme);
  }
}
