import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/presentation/widget/recived_products_widget.dart';

import '../bloc/product_bloc.dart';

class ProductsReceived extends StatelessWidget {
  const ProductsReceived({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<ProductBloc, ProductState>(
        listener: (context, state) {
          state.maybeWhen(
              orElse: () {},
              errorGetReceiveAndGiveProductsState: (message) {
                SnackBarMessage().snackBarMessageError(context, message);
              });
        },
        builder: (context, state) => state.maybeWhen(
            orElse: () => const Text('خطأ غير معروف'),
            loading: ()=>const LoadingWidget(),
            successGetReceiveAndGiveProductsState: (list) {
              if(list.receive.isNotEmpty) {
                return ReceivedProductsWidget(list: list.receive);
              }else{
                return Center(child: Text('لا يوجد بيانات', style: Theme.of(context)
                    .textTheme
                    .bodyLarge!
                    .copyWith(fontSize: 18)));
              }
            }));
  }
}
