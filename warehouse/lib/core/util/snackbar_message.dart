import 'package:flutter/material.dart';

class SnackBarMessage {
  void snackBarMessageSuccess(BuildContext context, String message) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(
        message,
        style: TextStyle(fontSize: 15, fontWeight: FontWeight.w400),
      ),
      backgroundColor: Colors.green,
    ));
  }

  void snackBarMessageError(BuildContext context, String message) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(
        message,
        style: TextStyle(fontSize: 15, fontWeight: FontWeight.w400),
      ),
      backgroundColor: Colors.redAccent,
    ));
  }
}
