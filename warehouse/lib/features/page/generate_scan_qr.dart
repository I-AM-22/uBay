import 'package:flutter/material.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/page/qr_create.dart';
import 'package:warehouse/features/page/qr_scan.dart';

class GenerateOrScanQR extends StatelessWidget {
  const GenerateOrScanQR({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('QR'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            MaterialButton(
              color: primaryColor,
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => GenerateQR()));
                },
                child: const Text('Create QR')),
            const SizedBox(
              height: 10,
            ),
            MaterialButton(
              color: primaryColor,
                onPressed: () => Navigator.push(
                    context, MaterialPageRoute(builder: (context) => QrScan())),
                child: const Text('Scan QR')),
          ],
        ),
      ),
    );
  }
}
