
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/widget/build_home_page.dart';
import 'package:warehouse/injection_container.dart' as di;

import '../../../../core/util/snackbar_message.dart';
import '../widget/build_qr_widget.dart';

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  const HomePage({super.key});
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(context),
      body: const BuildHomeProductPage(),
      floatingActionButton: FloatingActionButton(
        onPressed: () =>Navigator.push(context, MaterialPageRoute(builder: (_)=>const BuildQrWidget())),
        backgroundColor: primaryColor,
        child: const Icon(
          Icons.qr_code_scanner,
          color: Colors.white,
        ),
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
}
