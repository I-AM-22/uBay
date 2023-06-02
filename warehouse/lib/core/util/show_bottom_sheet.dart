import 'package:flutter/material.dart';

class ShowModalBottomSheet {
  void showBottomSheet(context,Widget widget) => showModalBottomSheet(
    backgroundColor: Colors.white60,
        context: context,
        isScrollControlled: true,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
        builder: (_) => widget
      );
}
