import 'package:flutter/cupertino.dart';
import 'dart:ui' as ui;
import '../theme.dart';

class HeaderCurvedContainer extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    Paint paint = Paint()
      ..shader = ui.Gradient.linear(
          const Offset(0,150), const Offset(0,0), [primaryColor, primaryColor3]);
    Path path = Path()
      ..relativeLineTo(0, 175)
      ..quadraticBezierTo(size.width / 2, 255.0, size.width, 175)
      ..relativeLineTo(0, -175)
      ..close();
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}
