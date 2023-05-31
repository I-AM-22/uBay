import 'package:flutter/material.dart';

class GetProductPage extends StatelessWidget {
  const GetProductPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text(
        'منتجات',
        style: TextStyle(fontFamily: 'Mont', fontSize: 25, color: Colors.white),
      ),
    );
  }
}
