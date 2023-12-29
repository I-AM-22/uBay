import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/generated/locale_keys.g.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';
import '../../../../core/util/chose_date_time.dart';
import '../../../../core/util/core_helper_functions.dart';

// ignore: must_be_immutable
class GetProductWidget extends StatelessWidget {
  final String payment;
  final String product;
  final bool isDeliver;

  GetProductWidget(
      {super.key,
      required this.payment,
      required this.product,
      required this.isDeliver});

  bool isLoading = false;
  late ProductModel productModel;

  @override
  Widget build(BuildContext context) {
    String message = isDeliver
        ? LocaleKeys.the_item_has_been_received.tr()
        : LocaleKeys.the_item_was_delivered.tr();
    String bottom = isDeliver
        ? LocaleKeys.confirm_receive.tr()
        : LocaleKeys.confirm_delivery.tr();
    String store = isDeliver
        ? LocaleKeys.this_item_does_not_need_to_be_delivered_to_our_warehouse
            .tr()
        : LocaleKeys.this_item_is_not_in_our_warehouse.tr();
    return BlocProvider(
      create: (_) =>
          di.getIt<ProductBloc>()..add(ProductEvent.getProductEvent(product)),
      child: BlocConsumer<ProductBloc, ProductState>(
          listener: (context, state) {
            state.maybeWhen(
                orElse: () {},
                errorGetProductState: (message) {
                  SnackBarMessage().snackBarMessageError(context, message);
                },
                successReceiveProductState: () {
                  isLoading = false;
                  SnackBarMessage().snackBarMessageSuccess(context, message);
                  Navigator.pushNamedAndRemoveUntil(
                      context, '/homePage', (route) => false);
                },
                errorReceiveProductState: (message) {
                  isLoading = false;
                  SnackBarMessage().snackBarMessageError(context, message);
                  Navigator.pushNamedAndRemoveUntil(
                      context, '/homePage', (route) => false);
                },
                loadingReceiveProductState: () {
                  isLoading = true;
                });
          },
          builder: (context, state) => state.maybeWhen(
              orElse: () => SizedBox.shrink(),
              loadingReceiveProductState: () =>
                  _buildProduct(productModel, context, bottom, store),
              successGetProductState: (productModel) {
                this.productModel = productModel;
                return _buildProduct(productModel, context, bottom, store);
              },
              loading: () => const LoadingWidget())),
    );
  }

  Widget _buildProduct(ProductModel productModel, BuildContext context,
      String bottom, String store) {
    return SingleChildScrollView(
      physics: BouncingScrollPhysics(),
      child: Column(
        children: [
          if (idStore != productModel.store.id) ...[
            Card(
              color: primaryColor1,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(borderRadius),
              ),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    const Icon(
                      Icons.error_outline,
                      color: Colors.red,
                    ),
                    const SizedBox(
                      width: 5,
                    ),
                    Expanded(
                      child: Text(store,
                          style: Theme.of(context).textTheme.bodyMedium),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(
              height: 10,
            ),
          ],
          Card(
            margin: const EdgeInsets.all(10),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(borderRadius),
            ),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        CircleAvatar(
                            radius: 25,
                            backgroundImage:
                                NetworkImage(productModel.user.photo)),
                        const SizedBox(
                          width: 20,
                        ),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              productModel.user.name,
                              style: Theme.of(context)
                                  .textTheme
                                  .bodyLarge!
                                  .copyWith(fontSize: 16),
                            ),
                            SizedBox(
                              height: 2,
                            ),
                            Text(ChoseDateTime().chose(productModel.createdAt),
                                style: Theme.of(context)
                                    .textTheme
                                    .bodySmall!
                                    .copyWith(fontSize: 13, color: Colors.grey))
                          ],
                        ),
                      ],
                    ),
                    const Divider(),
                    Text(
                      productModel.title,
                      style: Theme.of(context)
                          .textTheme
                          .bodyLarge!
                          .copyWith(fontSize: 18),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Text(
                      productModel.content,
                      style: Theme.of(context)
                          .textTheme
                          .titleMedium!
                          .copyWith(color: Colors.black),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Row(
                      children: [
                        Text(
                          LocaleKeys.price.tr(),
                          style: Theme.of(context).textTheme.bodyMedium,
                        ),
                        SizedBox(
                          width: 5,
                        ),
                        Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(5),
                          ),
                          color: secondaryColor,
                          child: Padding(
                            padding: const EdgeInsets.all(5.0),
                            child: Text(
                              '${CoreHelper.handlePrice(CoreHelper.formatter.format(productModel.price))} ل س',
                              style: Theme.of(context)
                                  .textTheme
                                  .titleSmall!
                                  .copyWith(color: Colors.white),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    ListView.separated(
                        shrinkWrap: true,
                        physics: const BouncingScrollPhysics(),
                        itemBuilder: (context, index) => Image(
                            image: NetworkImage(productModel.photos[index])),
                        separatorBuilder: (context, index) => const SizedBox(
                              height: 10,
                            ),
                        itemCount: productModel.photos.length),
                    const SizedBox(
                      height: 16,
                    ),
                    ConditionalBuilder(
                      condition: !isLoading,
                      fallback: (context) => ElevatedButtonWidget(
                          onPressed: () {},
                          widget: LoadingWidget(),
                          color: Colors.grey),
                      builder: (context) => ElevatedButtonWidget(
                          color: primaryColor,
                          onPressed: () {
                            context.read<ProductBloc>().add(
                                ProductEvent.receiveProductEvent(
                                    payment, isDeliver ? '0' : '1'));
                          },
                          widget: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                bottom,
                                style: Theme.of(context)
                                    .textTheme
                                    .bodyMedium!
                                    .copyWith(color: Colors.white),
                              )
                            ],
                          )),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
