import 'package:flutter/material.dart';
import 'package:reactive_forms/reactive_forms.dart';

import '../../../../core/theme.dart';

// ignore: must_be_immutable
class ReactiveTextFieldWidget extends StatelessWidget {
  final String controller;
  final bool obscureText;
  final String hintText;
  String? typeValidate;
  String? validationMessageRequired;
  String? validationMessage;
  IconData? prefixIcon;
  final TextInputType textInputType;
  void Function()? onPressed;
  final IconData suffixIcon;
  ReactiveTextFieldWidget(
      {super.key,
      required this.controller,
      this.validationMessageRequired,
      this.validationMessage,
      required this.hintText,
      this.prefixIcon,
      required this.textInputType,
      this.onPressed,
      required this.suffixIcon,
      this.obscureText = false});

  @override
  Widget build(BuildContext context) {
    return ReactiveTextField(
      formControlName: controller,
      obscureText: obscureText,
      textAlign: TextAlign.end,
      validationMessages: {
        'required': (error) => validationMessageRequired!,
        ValidationMessage.email: (error) => validationMessage!,
        ValidationMessage.mustMatch: (error) => validationMessage!,
        ValidationMessage.minLength: (error) => validationMessage!,
      },
      decoration: InputDecoration(
          prefixIcon: IconButton(
            onPressed: onPressed,
            icon: Icon(prefixIcon),
            color: primaryColor,
          ),
          hintText: hintText,
          hintStyle:
              TextStyle(color: primaryColor, fontFamily: 'Mont', fontSize: 13),
          suffixIcon: Icon(
            color: primaryColor,
            suffixIcon,
          ),
          errorBorder: const OutlineInputBorder(
            borderSide: BorderSide(color: Colors.red),
            borderRadius: BorderRadius.all(Radius.circular(12.0)),
          ),
          focusedErrorBorder: const OutlineInputBorder(
            borderSide: BorderSide(color: Colors.grey),
            borderRadius: BorderRadius.all(Radius.circular(12.0)),
          ),
          enabledBorder: const OutlineInputBorder(
            borderSide: BorderSide(color: Colors.grey),
            borderRadius: BorderRadius.all(Radius.circular(12.0)),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(color: primaryColor),
            borderRadius: const BorderRadius.all(Radius.circular(12.0)),
          ),
          contentPadding: const EdgeInsets.all(10)),
    );
  }
}
