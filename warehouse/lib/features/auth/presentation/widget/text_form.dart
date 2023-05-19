import 'package:flutter/material.dart';

import '../../../../core/theme.dart';

class TextFormFileWidget extends StatelessWidget {
  final TextEditingController controller;
  final FormFieldValidator<String> validate;
  final bool obscureText;
  final String hintText;
  final IconData icon;
  final TextInputType textInputType;
  const TextFormFileWidget(
      {super.key,
      required this.controller,
      required this.validate,
      required this.hintText,
      required this.icon,
      required this.textInputType,
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
          hintStyle: Theme.of(context).textTheme.subtitle2,
          border: const OutlineInputBorder(),
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
