import 'package:flutter/material.dart';

import '../theme.dart';

class ElevatedButtonWidget extends StatelessWidget {
  final void Function() onPressed;
  final Widget row;
  const ElevatedButtonWidget({Key? key, required this.onPressed, required this.row}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: primaryColor,
          disabledBackgroundColor: secondaryColor,
          side: BorderSide(color: primaryColor),
          //border width and color
          elevation: 3,
          //elevation of button
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(borderRadius)),
        ),

        onPressed: onPressed,
        child: row);
  }
}
