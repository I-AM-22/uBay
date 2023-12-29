import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/failure_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/widget/give_products_widget.dart';
import 'package:warehouse/generated/locale_keys.g.dart';

class ProductsDelivered extends StatelessWidget {
  const ProductsDelivered({super.key});

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
            orElse: () => Text(LocaleKeys.messages_unExpected_error.tr()),
            loading: () => const LoadingWidget(),
            successGetReceiveAndGiveProductsState: (list) {
              if (list.give.isNotEmpty) {
                return GiveProductsWidget(list: list.give);
              } else {
                return Center(
                  child: Text(
                      LocaleKeys.messages_there_is_no_data_to_display.tr(),
                      style: Theme.of(context)
                          .textTheme
                          .bodyLarge!
                          .copyWith(fontSize: 20)),
                );
              }
            },
            errorGetReceiveAndGiveProductsState: (message) => FailureWidget(
                  message: message,
                  onPressed: () => context
                      .read<ProductBloc>()
                      .add(ProductEvent.getReceiveAndGiveProducts()),
                )));
  }
}
