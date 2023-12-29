import 'package:flutter/cupertino.dart';
import 'package:easy_localization/easy_localization.dart';

enum LangCode { ar, en }

const List<Locale> supportedLocal = [Locale('en'), Locale('ar')];

const Locale defaultLocal = Locale('en');

final localMap = {
  LangCode.en: const Locale('en'),
  LangCode.ar: const Locale('ar'),
};

final mpaLanguageCodeToLocale = {
  LangCode.en.name: const Locale('en'),
  LangCode.ar.name: const Locale('ar'),
};

final languageNameAndLanguageCode = <String, LangCode>{
  'English': LangCode.en,
  'العربية': LangCode.ar,
};

final languageCodeAndLanguage = <String, String>{
  'en': 'English',
  'ar': 'Arabic',
};

class LanguageService {
  static late Locale currentLanguage;
  static late String languageCode;
  static bool rtl = false;

  final BuildContext context;
  static LanguageService? _instance;

  LanguageService._singleton(this.context) {
    currentLanguage = _currentLanguage;
    languageCode = _languageCode;
    rtl = _rtl;
  }

  static get isArabic => languageCode == 'ar';

  static get isEn => languageCode == 'en';

  factory LanguageService(BuildContext context) {
    if (_instance != null) {
      if (context.locale.languageCode != languageCode) {
        return LanguageService._singleton(context);
      }
      return _instance!;
    }
    return _instance ??= LanguageService._singleton(context);
  }

  Locale get _currentLanguage => context.locale;

  String get _languageCode => _currentLanguage.languageCode;

  bool get _rtl => context.locale == localMap[LangCode.ar]!;
}
