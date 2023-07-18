import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/features/product/presentation/pages/get_product_page.dart';

class ReceiveProductPage extends StatefulWidget {
  ReceiveProductPage({super.key});

  String qrCode = 'UnKnown';

  @override
  State<ReceiveProductPage> createState() => _ReceiveProductPageState();
}

class _ReceiveProductPageState extends State<ReceiveProductPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButtonWidget(
            onPressed: () => scanQRCode(),
            row: Row(
              children: [
                const Icon(Icons.qr_code_scanner),
                Text(
                  'Receive',
                  style: Theme.of(context).textTheme.bodyMedium,
                )
              ],
            )),
        const SizedBox(
          height: 20,
        ),
        Text(widget.qrCode)
      ],
    );
  }

  Future<void> scanQRCode() async {
    try {
      final qrCode = await FlutterBarcodeScanner.scanBarcode(
          '#ff6666', 'cancel', true, ScanMode.QR);
      if (!mounted) return;

      setState(() {
        widget.qrCode = qrCode;
        if (widget.qrCode.contains('isDeliver')) {
          Map<String, dynamic> js = json.decode(qrCode);
          print('$qrCode \n');
          if(js['isDeliver']==true){
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (_) => GetProductPage(
                      payment: js['payment'], product: js['product'])));
        }}
      });
    } on PlatformException {
      widget.qrCode = 'Failed to get platform version';
    }
  }
}
