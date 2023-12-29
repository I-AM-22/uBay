// DO NOT EDIT. This is code generated via package:easy_localization/generate.dart

// ignore_for_file: prefer_single_quotes

import 'dart:ui';

import 'package:easy_localization/easy_localization.dart' show AssetLoader;

class CodegenLoader extends AssetLoader{
  const CodegenLoader();

  @override
  Future<Map<String, dynamic>?> load(String path, Locale locale) {
    return Future.value(mapLocales[locale.toString()]);
  }

  static const Map<String,dynamic> en = {
  "auth": {
    "login": "Login",
    "logout": "Logout",
    "email": "Email",
    "password": "Password"
  },
  "validation": {
    "the_email_field_must_not_be_empty": "The email field must not be empty",
    "the_email_must_be_a_valid_email": "The email must be a valid email",
    "the_password_field_must_not_be_empty": "The password field must not be empty",
    "The_password_must_be_at_least_characters_long": "The password must be at least 6 characters long"
  },
  "messages": {
    "Please_try_again_later": "Please try again later",
    "please_check_your_internet_connection": "Please check your internet connection",
    "there_is_no_data_to_display": "There is no data to display",
    "login_successfully": "You have been logged in successfully",
    "logged_out": "You are logged out",
    "unExpected_error": "unExpected Error, pleas try again later"
  },
  "home": "Home",
  "my_transactions": "My transactions",
  "it_was_delivered": "received",
  "it_has_been_delivered": "has delivred",
  "the_seller": "The seller",
  "the_buyer": "The buyer",
  "warehouse": "Warehouse",
  "confirm_receive": "Confirm receipt of the item",
  "confirm_delivery": "Confirm delivery of the item",
  "price": "Price:",
  "received_date": "received date:",
  "delivery_date": "delivery date:",
  "the_item_has_been_received": "The item has been successfully received from the seller",
  "the_item_was_delivered": "The item was successfully delivered to the buyer",
  "this_item_does_not_need_to_be_delivered_to_our_warehouse": "This item does not need to be delivered to our warehouse",
  "this_item_is_not_in_our_warehouse": "This item is not in our warehouse"
};
static const Map<String,dynamic> ar = {
  "auth": {
    "login": "تسجيل الدخول",
    "logout": "تسجيل الخروج",
    "email": "البريد الالكتروني",
    "password": "كلمة المرور"
  },
  "validation": {
    "the_email_field_must_not_be_empty": "حقل البريد الالكتروني يجب الا يكون فارغا",
    "the_email_must_be_a_valid_email": "البريد الالكتروني يجب ان يكون بريدا الكترونيا صالحا",
    "the_password_field_must_not_be_empty": "حقل كلمة المرور يجب الا يكون فارغا",
    "The_password_must_be_at_least_characters_long": "كلمة المرور يجب ان تكون على الاقل 6 رموز"
  },
  "messages": {
    "Please_try_again_later": "الرجاء المحاولة لاحقا",
    "please_check_your_internet_connection": "الرجاء التحقق من الاتصال بالانترنت",
    "there_is_no_data_to_display": "لا يوجد بيانات لعرضها",
    "login_successfully": "تم تسجيل الدخول بنجاح",
    "logged_out": "تم تسجيل الخروج",
    "unExpected_error": "خطأ غير معروف, الرجاء المحاولة لاحقا"
  },
  "home": "الرئيسية",
  "my_transactions": "معاملاتي",
  "it_was_delivered": "تم استلامها",
  "it_has_been_delivered": "تم تسليمها",
  "the_seller": "البائع",
  "the_buyer": "المشتري",
  "warehouse": "مستودع",
  "confirm_receive": "تأكيد استلام القطعة",
  "confirm_delivery": "تأكيد تسليم القطعة",
  "price": "السعر:",
  "received_date": "تاريخ الاستلام:",
  "delivery_date": "تاريخ التسليم:",
  "the_item_has_been_received": "تم استلام القطعة من البائع",
  "the_item_was_delivered": "تم تسليم القطعة للمشتري",
  "this_item_does_not_need_to_be_delivered_to_our_warehouse": "هذه القطعة لا يجب تسليمها لمستودعنا",
  "this_item_is_not_in_our_warehouse": "هذه القطعة ليست في مستودعنا"
};
static const Map<String, Map<String,dynamic>> mapLocales = {"en": en, "ar": ar};
}
