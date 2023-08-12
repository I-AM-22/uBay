import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/widget/build_home_page.dart';
import 'package:warehouse/injection_container.dart' as di;

import '../../../../core/util/snackbar_message.dart';
import '../widget/build_qr_widget.dart';
import 'get_product_page.dart';

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  HomePage({super.key});

  String qrCode = 'UnKnown';


  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => di.getIt<ProductBloc>(),
      child: BlocConsumer<ProductBloc, ProductState>(
        listener: (context, state) {
          state.maybeWhen(
              orElse: () {},
              successLogOutState: (message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
                Navigator.pushNamedAndRemoveUntil(
                    context, '/loginScreen', (route) => false);
              });
        },
        builder: (context, state) {
          return Scaffold(
            appBar: _buildAppBar(context),
            body: BuildHomeProductPage(),
            floatingActionButton: FloatingActionButton(
              onPressed: () =>Navigator.push(context, MaterialPageRoute(builder: (_)=>const BuildQrWidget())),
              backgroundColor: primaryColor,
              child: const Icon(
                Icons.qr_code_scanner,
                color: Colors.white,
              ),
            ),
          );
        },
      ),
    );
  }

  AppBar _buildAppBar(BuildContext context) => AppBar(
        centerTitle: true,
        actions: [
          IconButton(
              onPressed: () {
                BlocProvider.of<ProductBloc>(context)
                    .add(const ProductEvent.logOut());
              },
              icon: const Icon(
                Icons.logout,
                color: Colors.white,
              ))
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
