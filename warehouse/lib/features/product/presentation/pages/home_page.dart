import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/widget/build_home_page.dart';
import 'package:warehouse/injection_container.dart' as di;

import '../../../../core/util/snackbar_message.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

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
}
