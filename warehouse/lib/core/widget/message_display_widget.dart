import 'package:flutter/material.dart';

import '../theme.dart';

class MessageDisplayWidget extends StatelessWidget {
  final String message;
  const MessageDisplayWidget({Key? key, required this.message})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: primaryColor,
      height: MediaQuery.of(context).size.height / 3,
      child: Text(
        message,
        style: const TextStyle(fontSize: 25),
      ),
    );
  }
}
