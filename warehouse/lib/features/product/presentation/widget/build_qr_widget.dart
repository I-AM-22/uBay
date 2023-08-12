import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:warehouse/core/theme.dart';

import '../pages/get_product_page.dart';

class BuildQrWidget extends StatefulWidget {
  const BuildQrWidget({super.key});

  @override
  State<BuildQrWidget> createState() => _BuildQrWidgetState();
}

class _BuildQrWidgetState extends State<BuildQrWidget> {
  final qrKey = GlobalKey(debugLabel: 'QR');
  QRViewController? controller;
  Barcode? barcode;

  @override
  void dispose() {
    controller?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return QRView(key: qrKey, onQRViewCreated: onQRViewCreated,overlay: QrScannerOverlayShape(
      cutOutSize: MediaQuery.of(context).size.width*0.8,
      borderWidth: 10,
      borderLength: 20,
      borderRadius: 16,
      borderColor: primaryColor
    ),);
  }

  void onQRViewCreated(QRViewController qrViewController) {
    setState(() {
      controller = qrViewController;
    });
    controller!.scannedDataStream.listen((event)=>setState(() {
      barcode=event;
      print(barcode!.code);
      if (barcode!.code!.contains('isDeliver')) {
        controller!.dispose();
        Map<String, dynamic> js = json.decode(barcode!.code!);
        Navigator.pushAndRemoveUntil(
            context,
            MaterialPageRoute(
                builder: (_) => GetProductPage(
                  payment: js['payment'], product: js['product'],isDeliver: js['isDeliver'],)),(route) => false,);
      }
    }));
  }
}
