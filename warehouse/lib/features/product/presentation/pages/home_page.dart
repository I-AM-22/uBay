import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/my_transactions.dart';
import 'package:warehouse/features/product/presentation/widget/build_home_page.dart';
import 'package:warehouse/generated/locale_keys.g.dart';
import 'package:warehouse/injection_container.dart' as di;

import '../../../../core/util/snackbar_message.dart';
import '../../../../service/language_service.dart';

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int index = 0;

  List<Widget> body = [BuildHomeProductPage(), MyTransactions()];
  List<String> bar = [LocaleKeys.home.tr(), LocaleKeys.my_transactions.tr()];

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) =>
          di.getIt<ProductBloc>()..add(ProductEvent.getAllProduct()),
      child: BlocBuilder<ProductBloc, ProductState>(
        builder: (context, state) {
          return Scaffold(
            appBar: index == 0 ? _buildAppBar(context) : null,
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
        leading: IconButton(
            onPressed: () {
              BlocProvider.of<ProductBloc>(context)
                  .add(const ProductEvent.logOut());
              SnackBarMessage().snackBarMessageSuccess(
                  context, LocaleKeys.messages_logged_out.tr());
              Navigator.pushNamedAndRemoveUntil(
                  context, '/loginScreen', (route) => false);
            },
            icon: const Icon(
              Icons.logout,
              color: Colors.white,
            )),
        actions: [
          IconButton(
              onPressed: () async {
                if (context.locale == Locale('en')) {
                  await context.setLocale(Locale('ar'));
                } else {
                  await context.setLocale(Locale('en'));
                }
              },
              icon: SvgPicture.asset(
                context.locale == Locale('ar')
                    ? 'assets/images/arabic.svg'
                    : 'assets/images/english.svg',
              ))
        ],
        title: Text(
          bar[index],
          style: const TextStyle(color: Colors.white, fontFamily: 'Mont'),
        ),
      );

  FloatingActionButton floatingActionButton() => FloatingActionButton(
        onPressed: () => Navigator.pushNamed(context, '/qrPage'),
        tooltip: 'barcode',
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
          showUnselectedLabels: false,
          currentIndex: index,
          items: [
            BottomNavigationBarItem(
                activeIcon: Icon(Icons.home),
                label: LocaleKeys.home.tr(),
                icon: Icon(Icons.home)),
            BottomNavigationBarItem(
                icon: Icon(Icons.shopping_cart_checkout_outlined),
                activeIcon: Icon(Icons.shopping_cart_checkout_outlined),
                label: LocaleKeys.my_transactions.tr()),
          ]);
}
