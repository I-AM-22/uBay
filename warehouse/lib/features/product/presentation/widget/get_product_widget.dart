
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/home_page.dart';
import 'package:warehouse/injection_container.dart' as di;
import 'package:intl/intl.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/chose_date_time.dart';

// ignore: must_be_immutable
class GetProductWidget extends StatelessWidget {
  final String payment;
  final String product;
  final bool isDeliver;

  GetProductWidget(
      {super.key, required this.payment, required this.product, required this.isDeliver});

  var formatter = NumberFormat('###,###,###,000');


  @override
  Widget build(BuildContext context) {
    String message = isDeliver
        ? 'تم استلام القطعة بنجاح'
        : 'تم تسليم القطعة للمشتري بنجاح';
    String bottom = isDeliver ? 'تأكيد استلام القطعة' : 'تأكيد تسليم القطعة';
    String store = isDeliver
        ? 'هذه القطعة لا يجب تسليمها لمستودعنا'
        : 'هذه القطعة ليست في مستودعنا';
    return BlocProvider(
      create: (_) =>
      di.getIt<ProductBloc>()
        ..add(ProductEvent.getProductEvent(product)),
      child: BlocConsumer<ProductBloc, ProductState>(
          listener: (context, state) {
            state.maybeWhen(
                orElse: () {
                },
                errorGetProductState: (message) {
                  SnackBarMessage().snackBarMessageError(context, message);
                },
                successReceiveProductState: () {
                  SnackBarMessage().snackBarMessageSuccess(context, message);
                  Navigator.pushNamedAndRemoveUntil(
                      context, '/homePage', (route) => false);
                },
                errorReceiveProductState: (message) {
                  SnackBarMessage().snackBarMessageError(context, message);
                }
            );
          },
          builder: (context, state) =>
              state.maybeWhen(
                  orElse: () => HomePage(),
                  successGetProductState: (productModel) =>
                      _buildProduct(productModel, context, bottom, store),
                  loading: () => const LoadingWidget())),
    );
  }

  Widget _buildProduct(ProductModel productModel, BuildContext context,
      String bottom, String store) {
    return SingleChildScrollView(
      physics: BouncingScrollPhysics(),
      child: Column(
        children: [
          if(idStore != productModel.store.id)...[
            Card(
              color: primaryColor1,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(borderRadius),
              ),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(store,),
                    const SizedBox(width: 5,),
                    const Icon(Icons.error_outline, color: Colors.red,)
                  ],
                ),
              ),
            ),
            const SizedBox(height: 10,),
          ],
          Card(
            margin: const EdgeInsets.all(5),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(borderRadius),
            ),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: SingleChildScrollView(
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
                              '${formatter.format(productModel.price)} ',
                              style: Theme
                                  .of(context)
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
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            Text(
                              productModel.user.name,
                              style: Theme
                                  .of(context)
                                  .textTheme
                                  .bodyLarge!
                                  .copyWith(fontSize: 18),
                            ),
                            Text(
                                ChoseDateTime().chose(
                                    productModel.createdAt),
                                style: Theme
                                    .of(context)
                                    .textTheme
                                    .bodySmall!
                                    .copyWith(
                                    fontSize: 13, color: Colors.grey))
                          ],
                        ),
                        const SizedBox(
                          width: 20,
                        ),
                        CircleAvatar(
                            radius: 25,
                            backgroundImage: NetworkImage(
                                productModel.user.photo)),
                      ],
                    ),
                    const Divider(),
                    Text(
                      productModel.title,
                      style: Theme
                          .of(context)
                          .textTheme
                          .bodyLarge,
                    ),
                    const SizedBox(height: 10,),
                    Text(
                      productModel.content,
                      textAlign: TextAlign.end,
                      style: Theme
                          .of(context)
                          .textTheme
                          .bodyMedium,
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    ListView.separated(
                        shrinkWrap: true,
                        physics: const BouncingScrollPhysics(),
                        itemBuilder: (context, index) =>
                            Image(

                                image: NetworkImage(productModel.photos[index])),
                        separatorBuilder: (context, index) =>
                        const SizedBox(
                          height: 10,
                        ),
                        itemCount: productModel.photos.length),
                    const SizedBox(
                      height: 16,
                    ),
                    ElevatedButtonWidget(
                        color: primaryColor,
                        onPressed: () {
                          BlocProvider.of<ProductBloc>(context)
                              .add(ProductEvent.receiveProductEvent(
                              payment, isDeliver ? '0' : '1'));
                        },
                        widget: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              bottom,
                              style: Theme
                                  .of(context)
                                  .textTheme
                                  .bodyMedium!
                                  .copyWith(color: Colors.white),
                            )
                          ],
                        )),
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
