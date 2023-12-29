import 'dart:async';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'common/model/localization_config.dart';

Future<void> initialization(FutureOr<Widget> Function() builder,
    {LocalizationConfig? localizationConfig}) async {
  final Widget app;
  if (localizationConfig != null) {
    app = await _easyLocalization(() => builder(), localizationConfig);
  } else {
    app = await builder();
  }
  runApp(app);
}

Future<EasyLocalization> _easyLocalization(
  FutureOr<Widget> Function() builder,
  LocalizationConfig localizationConfig,
) async {
  await EasyLocalization.ensureInitialized();
  return EasyLocalization(
    supportedLocales: localizationConfig.supportedLocales,
    useOnlyLangCode: localizationConfig.useOnlyLangCode,
    saveLocale: localizationConfig.saveLocale,
    startLocale: localizationConfig.startLocale,
    useFallbackTranslations: localizationConfig.useFallbackTranslations,
    path: localizationConfig.path,
    assetLoader: localizationConfig.assetLoader,
    child: await builder(),
  );
}
