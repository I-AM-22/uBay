import 'package:flutter/material.dart';

import '../../service/language_service.dart';

class LocalizationConfig {
  LocalizationConfig({
    this.supportedLocales = supportedLocal,
    this.fallbackLocale = defaultLocal,
    this.startLocale,
    this.useOnlyLangCode = true,
    this.useFallbackTranslations = true,
    this.path = "assets/translations",
    this.assetLoader,
    this.saveLocale = true,
  });

  final List<Locale> supportedLocales;

  final Locale? fallbackLocale;

  final Locale? startLocale;

  final bool useOnlyLangCode;

  final bool useFallbackTranslations;

  final String path;

  final dynamic assetLoader;

  final bool saveLocale;
}
