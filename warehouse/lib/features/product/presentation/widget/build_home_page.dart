import 'dart:convert';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/get_product_page.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';

// ignore: must_be_immutable
class BuildHomeProductPage extends StatelessWidget {
  const BuildHomeProductPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) =>
          di.getIt<ProductBloc>()..add(const ProductEvent.getAllProduct()),
      child: BlocBuilder<ProductBloc, ProductState>(
        builder: (context, state) => state.maybeWhen(
            orElse: () {
              return Center(
                child: Text(
                  'لا يوجد بيانات لعرضها',
                  style: Theme.of(context).textTheme.bodyLarge,
                ),
              );
            },
            loading: () => const LoadingWidget(),
            successGetAllProductState: (allProductModel) {
              if (allProductModel.isNotEmpty) {
                return _buildListProduct(allProductModel, context);
              } else {
                return Center(
                  child: Text(
                    'لا يوجد بيانات لعرضها',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                );
              }
            },
            errorGetAllProductState: (message) => Center(
              child: Text(
                    message,
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
            )),
      ),
    );
  }

  Widget _buildListProduct(
      List<AllProductModel> allProductModel, BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(10.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(borderRadius),
                  ),
                  color: primaryColor,
                  child: Padding(
                    padding: const EdgeInsets.all(5.0),
                    child: Text(
                      '1500',
                      style: Theme.of(context)
                          .textTheme
                          .titleSmall!
                          .copyWith(color: Colors.white),
                    ),
                  ),
                ),
                const SizedBox(
                  width: 10,
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'majed',
                      style: Theme.of(context)
                          .textTheme
                          .bodyLarge!
                          .copyWith(fontSize: 18),
                    ),
                    Text('11-5-2020',
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall!
                            .copyWith(fontSize: 13, color: Colors.grey))
                  ],
                ),
                const SizedBox(
                  width: 20,
                ),
                const CircleAvatar(
                    radius: 25,
                    backgroundImage:
                        NetworkImage('https://i.imgur.com/7rlze8l.jpg')),
              ],
            ),
            const Divider(),
            Text(
              'data',
              style: Theme.of(context)
                  .textTheme
                  .titleMedium!
                  .copyWith(color: Colors.black),
            ),
            const SizedBox(
              height: 5,
            ),
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                children: [
                  Image.network('https://i.imgur.com/7rlze8l.jpg'),
                  Image.network('https://i.imgur.com/7rlze8l.jpg'),
                  Image.network('https://i.imgur.com/7rlze8l.jpg'),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
