import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:warehouse/core/util/core_helper_functions.dart';
import 'package:warehouse/features/product/data/model/recive_and_give_model/recive_and_give_model.dart';
import 'package:warehouse/features/product/presentation/widget/photo_grid.dart';
import 'package:warehouse/generated/locale_keys.g.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/chose_date_time.dart';

class ReceivedProductsWidget extends StatelessWidget {
  final List<Receive> list;

  ReceivedProductsWidget({super.key, required this.list});
  //
  @override
  Widget build(BuildContext context) {
    return _buildListProduct(list, context);
  }

  Widget _buildListProduct(
      List<Receive> giveProductModel, BuildContext context) {
    return ListView.separated(
        padding: EdgeInsets.zero,
        physics: const BouncingScrollPhysics(),
        shrinkWrap: true,
        itemBuilder: (context, index) => Card(
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        CircleAvatar(
                            radius: 25,
                            backgroundImage:
                                NetworkImage(list[index].product.user.photo)),
                        const SizedBox(
                          width: 10,
                        ),
                        Text(
                          '${list[index].product.user.name}',
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
                              .copyWith(color: Colors.black, fontSize: 15),
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
                            backgroundImage:
                                NetworkImage(list[index].customer.photo)),
                        const SizedBox(
                          width: 10,
                        ),
                        Text(
                          '${list[index].customer.name}',
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
                              .copyWith(color: Colors.black, fontSize: 15),
                        ),
                      ],
                    ),
                    const Divider(),
                    Text(
                      giveProductModel[index].product.title,
                      style: Theme.of(context)
                          .textTheme
                          .bodyLarge!
                          .copyWith(fontSize: 18),
                    ),
                    const SizedBox(
                      height: 1,
                    ),
                    Text(
                      giveProductModel[index].product.content,
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
                          textAlign: TextAlign.end,
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
                              '${CoreHelper.handlePrice(CoreHelper.formatter.format(giveProductModel[index].product.price))} ل س',
                              style: Theme.of(context)
                                  .textTheme
                                  .titleSmall!
                                  .copyWith(color: Colors.white),
                            ),
                          ),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 5,
                    ),
                    Text(
                      '${LocaleKeys.received_date.tr()} ${ChoseDateTime().chose(list[index].receiveDate)}',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    SizedBox(
                        height:
                            giveProductModel[index].product.photos.length < 3
                                ? 200
                                : 400,
                        width: double.infinity,
                        child: PhotoGrid(
                            imageUrls: giveProductModel[index].product.photos))
                  ],
                ),
              ),
            ),
        separatorBuilder: (context, index) => const SizedBox(
              height: 5,
            ),
        itemCount: giveProductModel.length);
  }
}
