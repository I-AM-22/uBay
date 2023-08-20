import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/chose_date_time.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/widget/photo_grid.dart';
import 'package:intl/intl.dart';
import '../../../../core/theme.dart';

// ignore: must_be_immutable
class BuildHomeProductPage extends StatelessWidget {
  BuildHomeProductPage({super.key});

  var formatter = NumberFormat('###,###,###,000');

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
                'خطأ غير معروف',
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
                  'لا يوجد بيانات لعرضها',
                  style: Theme.of(context)
                      .textTheme
                      .bodyLarge!
                      .copyWith(fontSize: 18),
                ),
              );
            }
          },
          errorGetAllProductState: (message) => Center(
                child: Text(
                  message,
                  style: Theme.of(context)
                      .textTheme
                      .bodyLarge!
                      .copyWith(fontSize: 20),
                ),
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
                            color: secondaryColor,
                            child: Padding(
                              padding: const EdgeInsets.all(5.0),
                              child: Text(
                                '${formatter.format(allProductModel[index].product.price)}',
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
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    '(البائع)',
                                    style: Theme.of(context)
                                        .textTheme
                                        .titleMedium!
                                        .copyWith(
                                            color: Colors.black, fontSize: 15),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Text(
                                    allProductModel[index].product.user.name,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyLarge!
                                        .copyWith(fontSize: 18),
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
                          CircleAvatar(
                              radius: 25,
                              backgroundImage: NetworkImage(
                                  allProductModel[index].product.user.photo)),
                        ],
                      ),
                      const Divider(),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    '(المشتري)',
                                    style: Theme.of(context)
                                        .textTheme
                                        .titleMedium!
                                        .copyWith(
                                            color: Colors.black, fontSize: 15),
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Text(
                                    allProductModel[index].customer.name,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyLarge!
                                        .copyWith(fontSize: 18),
                                  ),
                                ],
                              ),
                            ],
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          CircleAvatar(
                              radius: 25,
                              backgroundImage: NetworkImage(
                                  allProductModel[index].customer.photo)),
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
                        textAlign: TextAlign.end,
                        style: Theme.of(context)
                            .textTheme
                            .titleMedium!
                            .copyWith(color: Colors.black),
                      ),
                      const SizedBox(
                        height: 5,
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
