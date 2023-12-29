import 'package:easy_localization/easy_localization.dart';

class CoreHelper {
  static RegExp regexp = RegExp(r'^0+(?=.)');
  static NumberFormat formatter = NumberFormat('###,###,###,000', 'en');
  static String handlePrice(String price) {
    String txt = price.toString();
    return txt.replaceAll(regexp, '');
  }
}
