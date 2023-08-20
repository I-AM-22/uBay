import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/my_transactions.dart';
import 'package:warehouse/features/product/presentation/widget/build_home_page.dart';
import 'package:warehouse/injection_container.dart' as di;

import '../../../../core/util/snackbar_message.dart';

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int index = 0;
  List<Widget> body = [ BuildHomeProductPage(), MyTransactions()];
  List<String> bar = ['الرئيسية', 'معاملاتي'];

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => di.getIt<ProductBloc>()..add(ProductEvent.getAllProduct()),
      child: BlocBuilder<ProductBloc, ProductState>(
        builder: (context, state) {
          return Scaffold(
            appBar: _buildAppBar(context),
            body: body[index],
            floatingActionButton: floatingActionButton(),
            bottomNavigationBar: _bottomNavigationBar(),
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
                SnackBarMessage().snackBarMessageSuccess(context, 'تم تسجيل الخروج بنجاح');
                Navigator.pushNamedAndRemoveUntil(
                    context, '/loginScreen', (route) => false);
              },
              icon: const Icon(
                Icons.logout,
                color: Colors.white,
              ))
        ],
        title: Text(
          bar[index],
          style: const TextStyle(color: Colors.white, fontFamily: 'Mont'),
        ),
      );

  FloatingActionButton floatingActionButton() => FloatingActionButton(
        onPressed: () => Navigator.pushNamed(context, '/qrPage'),
        backgroundColor: primaryColor,
        child: const Icon(
          Icons.qr_code_scanner,
          color: Colors.white,
        ),
      );

  BottomNavigationBar _bottomNavigationBar() => BottomNavigationBar(
          onTap: (index) {
            setState(() {
              this.index = index;
            });
          },
          currentIndex: index,
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: 'الرئيسية'),
            BottomNavigationBarItem(
                icon: Icon(Icons.shopping_cart_rounded), label: 'معاملاتي'),
          ]);
}
