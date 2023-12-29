import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/chose_date_time.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/failure_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/widget/photo_grid.dart';
import 'package:warehouse/generated/locale_keys.g.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/core_helper_functions.dart';

class BuildHomeProductPage extends StatelessWidget {
  BuildHomeProductPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<ProductBloc, ProductState>(
      listener: (context, state) {
        state.maybeWhen(
            orElse: () {},
            errorGetAllProductState: (message) {
              SnackBarMessage().snackBarMessageError(context, message);
            });
      },
      builder: (context, state) => state.maybeWhen(
          orElse: () {
            return Center(
              child: Text(
                LocaleKeys.messages_unExpected_error.tr(),
                style: Theme.of(context)
                    .textTheme
                    .bodyLarge!
                    .copyWith(fontSize: 20),
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
                  LocaleKeys.messages_there_is_no_data_to_display.tr(),
                  style: Theme.of(context)
                      .textTheme
                      .bodyLarge!
                      .copyWith(fontSize: 18),
                ),
              );
            }
          },
          errorGetAllProductState: (message) => FailureWidget(
                message: message,
                onPressed: () => context
                    .read<ProductBloc>()
                    .add(ProductEvent.getAllProduct()),
              )),
    );
  }

  Widget _buildListProduct(
      List<AllProductModel> allProductModel, BuildContext context) {
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: ListView.separated(
          physics: const BouncingScrollPhysics(),
          shrinkWrap: true,
          itemBuilder: (context, index) => Card(
                margin: EdgeInsets.symmetric(horizontal: 10),
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          CircleAvatar(
                              radius: 25,
                              backgroundImage: NetworkImage(
                                  allProductModel[index].product.user.photo)),
                          const SizedBox(
                            width: 10,
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    allProductModel[index].product.user.name,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyLarge!
                                        .copyWith(fontSize: 18),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Text(
                                    '(${LocaleKeys.the_seller.tr()})',
                                    style: Theme.of(context)
                                        .textTheme
                                        .titleMedium!
                                        .copyWith(
                                            color: Colors.black, fontSize: 15),
                                  ),
                                ],
                              ),
                              Text(
                                  ChoseDateTime().chose(
                                      allProductModel[index].product.createdAt),
                                  style: Theme.of(context)
                                      .textTheme
                                      .bodySmall!
                                      .copyWith(
                                          fontSize: 13, color: Colors.grey))
                            ],
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                        ],
                      ),
                      const Divider(),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          CircleAvatar(
                              radius: 25,
                              backgroundImage: NetworkImage(
                                  allProductModel[index].customer.photo)),
                          const SizedBox(
                            width: 10,
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    allProductModel[index].customer.name,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyLarge!
                                        .copyWith(fontSize: 18),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Text(
                                    '(${LocaleKeys.the_buyer.tr()})',
                                    style: Theme.of(context)
                                        .textTheme
                                        .titleMedium!
                                        .copyWith(
                                            color: Colors.black, fontSize: 15),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                      const Divider(),
                      Text(
                        allProductModel[index].product.title,
                        style: Theme.of(context)
                            .textTheme
                            .bodyLarge!
                            .copyWith(fontSize: 18),
                      ),
                      const SizedBox(
                        height: 2.5,
                      ),
                      Text(
                        allProductModel[index].product.content,
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
                            style: Theme.of(context)
                                .textTheme
                                .titleMedium!
                                .copyWith(color: Colors.black),
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
                                '${CoreHelper.handlePrice(CoreHelper.formatter.format(allProductModel[index].product.price))} ل س',
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
                      SizedBox(
                          height:
                              allProductModel[index].product.photos.length < 3
                                  ? 200
                                  : 400,
                          width: double.infinity,
                          child: PhotoGrid(
                              imageUrls: allProductModel[index].product.photos))
                    ],
                  ),
                ),
              ),
          separatorBuilder: (context, index) => const SizedBox(
                height: 5,
              ),
          itemCount: allProductModel.length),
    );
  }
}
