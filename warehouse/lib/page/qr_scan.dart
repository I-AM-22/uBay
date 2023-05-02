import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class QrScan extends StatefulWidget {
  QrScan({Key? key}) : super(key: key);
  String qrCode = 'UnKnown';

  @override
  State<QrScan> createState() => _QrScanState();
}

class _QrScanState extends State<QrScan> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('QR Scan'),
      ),
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const Text('Result Scan'),
              const SizedBox(
                height: 20,
              ),
              Text(widget.qrCode),
              const SizedBox(
                height: 20,
              ),
              ElevatedButton(
                onPressed: () => scanQRCode(),
                child: const Text(
                  'QR Scan',
                  style: TextStyle(color: Colors.black),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Future<void> scanQRCode() async {
    try {
      final qrCode = await FlutterBarcodeScanner.scanBarcode(
          '#ff6666', 'cancel', true, ScanMode.QR);
      if (!mounted) return;

      setState(() {
        widget.qrCode = qrCode;
      });
    } on PlatformException {
      widget.qrCode = 'Failed to get platform version';
    }
  }
}
