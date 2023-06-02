import 'package:flutter/material.dart';

import '../theme.dart';

class ErrorMessageWidget extends StatelessWidget {
  final String message;

  const ErrorMessageWidget({Key? key, required this.message}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return  Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.error,
              size: 50,
              color: primaryColor,
            ),
            const SizedBox(
              height: 10,
            ),
            Text(
              message,
              style: Theme.of(context).textTheme.bodyLarge,
            )
          ],
        ),
      );
  }
}
