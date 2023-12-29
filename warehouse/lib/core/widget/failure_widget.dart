import 'package:flutter/material.dart';
import 'package:warehouse/core/theme.dart';

class FailureWidget extends StatelessWidget {
  const FailureWidget({super.key, required this.message, this.onPressed});
  final String message;
  final void Function()? onPressed;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            message,
            style: Theme.of(context).textTheme.bodyMedium,
          ),
          SizedBox(
            height: 10,
          ),
          IconButton(
              onPressed: onPressed,
              icon: Icon(
                Icons.refresh,
                color: primaryColor,
              ))
        ],
      ),
    );
  }
}
