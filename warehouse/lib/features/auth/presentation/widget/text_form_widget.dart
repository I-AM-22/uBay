import 'package:flutter/material.dart';

import '../../../../core/theme.dart';

// ignore: must_be_immutable
class TextFormWidget extends StatelessWidget {
  final TextEditingController controller;
  final String? Function(String? value) validate;
  final String hintText;
  void Function()? onPressed;
  IconData? prefixIcon;
  final IconData suffixIcon;
  final bool obscureText;
  void Function(String?)? onSaved;

  TextFormWidget(
      {Key? key,
      this.onSaved,
      required this.controller,
      required this.validate,
      required this.hintText,
      required this.suffixIcon,
      this.prefixIcon,
      this.onPressed,
      required this.obscureText})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      validator: validate,
      obscureText: obscureText,
      textAlign: TextAlign.end,
      onSaved: onSaved,
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
