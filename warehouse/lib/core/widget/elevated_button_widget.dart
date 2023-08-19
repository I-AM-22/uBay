import 'package:flutter/material.dart';

import '../theme.dart';

class ElevatedButtonWidget extends StatelessWidget {
  final void Function() onPressed;
  final Widget widget;
  final Color color;
  ElevatedButtonWidget({Key? key, required this.onPressed, required this.widget,required this.color}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: color,
          side: BorderSide(color: color),
          //border width and color
          elevation: 3,
          //elevation of button
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(borderRadius)),
        ),

        onPressed: onPressed,
        child: widget);
  }
}
