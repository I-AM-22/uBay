import 'package:flutter/material.dart';
import 'package:warehouse/features/product/presentation/widget/get_product_widget.dart';

class GetProductPage extends StatelessWidget {
  final String payment;
  final String product;

  const GetProductPage(
      {super.key, required this.payment, required this.product});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            onPressed: () => Navigator.pop(context),
            icon: const Icon(
              Icons.arrow_back,
              color: Colors.white,
            )),
      ),
      body: GetProductWidget(payment: payment, product: product),
    );
  }
}
