import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/products_delivered.dart';
import 'package:warehouse/features/product/presentation/pages/products_received.dart';
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

class _HomePageState extends State<HomePage> with SingleTickerProviderStateMixin{
  int index=0;
  TabController? tabController;
  List<Widget> body = [
    const BuildHomeProductPage(),
    const ProductsReceived()
  ];
  List<String> bar = ['الرئيسية', 'معاملاتي'];

  @override
  void initState() {
    tabController=TabController(length: 3, vsync: this);
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(context),
      body:  TabBarView(
        controller: tabController!,
        children: const [
          BuildHomeProductPage(),
          ProductsDelivered(),
          ProductsReceived(),
        ],
      ),
      floatingActionButton: floatingActionButton(),
      bottomNavigationBar: _bottomNavigationBar(),
    );
  }

  AppBar _buildAppBar(BuildContext context) => AppBar(
        centerTitle: true,
        bottom: TabBar(controller: tabController,tabs: const [
          Tab(text: 'الرئيسية',),
          Tab(text: 'تم تسليمها',),
          Tab(text: 'تم استلامها',)
        ],),
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
        title: Text(
          bar[index],
          style: const TextStyle(color: Colors.white, fontFamily: 'Mont'),
        ),
      );

  FloatingActionButton floatingActionButton() => FloatingActionButton(
        onPressed: () => Navigator.push(
            context, MaterialPageRoute(builder: (_) => const BuildQrWidget())),
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
