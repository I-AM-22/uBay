import 'package:flutter/material.dart';

class ReceiveDeliverDone extends StatelessWidget {
  const ReceiveDeliverDone({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Icon(Icons.done,color: Colors.green,),
        SizedBox(height: 5,),
        Text('')
      ],
    );
  }
}
