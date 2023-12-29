import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/product/presentation/pages/products_delivered.dart';
import 'package:warehouse/features/product/presentation/pages/products_received.dart';
import 'package:warehouse/generated/locale_keys.g.dart';

import '../bloc/product_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;

class MyTransactions extends StatefulWidget {
  MyTransactions({super.key});

  @override
  State<MyTransactions> createState() => _MyTransactionsState();
}

class _MyTransactionsState extends State<MyTransactions>
    with SingleTickerProviderStateMixin {
  TabController? tabController;

  @override
  void initState() {
    tabController = TabController(length: 2, vsync: this);

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => di.getIt<ProductBloc>()
        ..add(ProductEvent.getReceiveAndGiveProducts()),
      child: Scaffold(
        body: NestedScrollView(
          headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
            return <Widget>[
              SliverAppBar(
                pinned: true,
                floating: true,
                centerTitle: true,
                title: Text(
                  LocaleKeys.my_transactions.tr(),
                  style:
                      const TextStyle(color: Colors.white, fontFamily: 'Mont'),
                ),
                forceElevated: innerBoxIsScrolled,
                bottom: TabBar(
                  controller: tabController,
                  labelColor: Colors.white,
                  labelStyle: const TextStyle(fontSize: 17, fontFamily: 'Mont'),
                  unselectedLabelColor: Colors.grey,
                  indicatorColor: primaryColor2,
                  padding: EdgeInsets.zero,
                  tabs: <Tab>[
                    Tab(
                      text: LocaleKeys.it_was_delivered.tr(),
                    ),
                    Tab(
                      text: LocaleKeys.it_has_been_delivered.tr(),
                    )
                  ],
                ),
              ),
            ];
          },
          body: TabBarView(
            controller: tabController,
            children: const [ProductsReceived(), ProductsDelivered()],
          ),
        ),
      ),
    );
  }
}
