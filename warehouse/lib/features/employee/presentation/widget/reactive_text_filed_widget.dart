import 'package:flutter/material.dart';
import 'package:reactive_forms/reactive_forms.dart';

import '../../../../core/theme.dart';

// ignore: must_be_immutable
class ReactiveTextFiledWidget extends StatelessWidget {
  final String controller;
  final String labelText;
  String? validationMessage;
  final String validationMessageRequired;
  void Function()? onPressed;
  IconData? prefixIcon;
  final IconData suffixIcon;
  final bool obscureText;

  ReactiveTextFiledWidget(
      {Key? key,
        this.validationMessage,
        required this.controller,
        required this.labelText,
        required this.suffixIcon,
        this.prefixIcon,
        this.onPressed,
        required this.obscureText, required this.validationMessageRequired})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Directionality(
      textDirection: TextDirection.rtl,
      child: ReactiveTextField(

        formControlName: controller,
        obscureText: obscureText,

        validationMessages: {
          ValidationMessage.required: (error) => validationMessageRequired,
          ValidationMessage.email: (error) => validationMessage!,
          ValidationMessage.minLength: (error) => validationMessage!,
        },
        textDirection: TextDirection.ltr,
        textAlign: TextAlign.end,
        style: const TextStyle(fontSize: 16,fontFamily: 'Mont',fontWeight: FontWeight.normal),
        decoration: InputDecoration(
          alignLabelWithHint: true,
            prefixIcon: IconButton(
              onPressed: onPressed,
              icon: Icon(prefixIcon),
              color: primaryColor,
            ),
            labelText: labelText,
            labelStyle: Theme.of(context).textTheme.bodyMedium!.copyWith(color: primaryColor),

            suffixIcon: Icon(
              color: primaryColor,
              suffixIcon,
            ),
            errorBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: Colors.red),
              borderRadius: BorderRadius.all(Radius.circular(borderRadius)),
            ),
            focusedErrorBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: Colors.grey),
              borderRadius: BorderRadius.all(Radius.circular(borderRadius)),
            ),
            enabledBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: Colors.grey),
              borderRadius: BorderRadius.all(Radius.circular(borderRadius)),
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(color: primaryColor),
              borderRadius: const BorderRadius.all(Radius.circular(borderRadius)),
            ),
            contentPadding: const EdgeInsets.symmetric(vertical: 15)),
      ),
    );
  }
}
