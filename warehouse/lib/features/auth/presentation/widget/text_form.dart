import 'package:flutter/material.dart';

import '../../../../core/theme.dart';

// ignore: must_be_immutable
class TextFormFileWidget extends StatelessWidget {
  final TextEditingController controller;
  final FormFieldValidator<String> validate;
  final bool obscureText;
  final String hintText;
  final IconData icon;
  final TextInputType textInputType;
  void Function()? onPressed;
  IconData? suffixIcon;
 TextFormFileWidget(
      {super.key,
      required this.controller,
      required this.validate,
      required this.hintText,
      required this.icon,
      required this.textInputType,
      this.onPressed,
      this.suffixIcon,
      this.obscureText = false});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      keyboardType: textInputType,
      validator: validate,
      obscureText: obscureText,
      decoration: InputDecoration(
          prefixIcon: Icon(
            icon,
            color: primaryColor,
          ),
          hintText: hintText,
          hintStyle: Theme.of(context).textTheme.titleSmall,
          border: const OutlineInputBorder(),
          suffixIcon: IconButton(color: primaryColor,icon: Icon(suffixIcon),onPressed: onPressed,),
          enabledBorder: const OutlineInputBorder(
            borderSide: BorderSide(color: Colors.grey),
            borderRadius: BorderRadius.all(Radius.circular(10.0)),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(color: primaryColor),
            borderRadius: const BorderRadius.all(Radius.circular(10.0)),
          ),
          contentPadding: const EdgeInsets.all(10)),
    );
  }
}
