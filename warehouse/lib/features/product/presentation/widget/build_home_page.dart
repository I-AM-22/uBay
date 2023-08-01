import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/get_product_page.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';

// ignore: must_be_immutable
class BuildHomeProductPage extends StatefulWidget {
  BuildHomeProductPage({super.key});

  String qrCode = 'UnKnown';

  @override
  State<BuildHomeProductPage> createState() => _BuildHomeProductPageState();
}

class _BuildHomeProductPageState extends State<BuildHomeProductPage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: primaryColor,
                side: BorderSide(color: primaryColor),
                //border width and color
                elevation: 3,
                //elevation of button
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(borderRadius)),
              ),

              onPressed: ()=>scanQRCode(),
              child: const Icon(Icons.qr_code_scanner,size: 100,color: Colors.white,)),
          const SizedBox(
            height: 20,
          ),
          Text('اضغط على الزر لمسح الباركود',style: Theme.of(context).textTheme.bodyMedium,)
        ],
      ),
    );
  }

  AppBar _buildAppBar(BuildContext context)=>AppBar(
    centerTitle: true,
    actions: [
      IconButton(onPressed: (){
        BlocProvider.of<ProductBloc>(context).add(const ProductEvent.logOut());
      }, icon: const Icon(Icons.logout,color: Colors.white,))
    ],
    title: const Text(
      'الرئيسية',
      style: TextStyle(color: Colors.white, fontFamily: 'Mont'),
    ),
  );
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
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (_) => GetProductPage(
                    payment: js['payment'], product: js['product'],isDeliver: js['isDeliver'],)));
        }
      });
    } on PlatformException {
      widget.qrCode = 'Failed to get platform version';
    }
  }
}
