import 'package:flutter/material.dart';
import 'package:warehouse/features/product/data/model/recive_and_give_model/recive_and_give_model.dart';
import 'package:warehouse/features/product/presentation/widget/photo_grid.dart';
import 'package:intl/intl.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/chose_date_time.dart';

// ignore: must_be_immutable
class ReceivedProductsWidget extends StatelessWidget {
  final List<Receive> list;

  ReceivedProductsWidget({super.key, required this.list});
  var formatter = NumberFormat('###,###,###,000');
  @override
  Widget build(BuildContext context) {
    return _buildListProduct(list, context);
  }

  Widget _buildListProduct(
      List<Receive> giveProductModel, BuildContext context) {
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
                                '${formatter.format(giveProductModel[index].product.price)}',
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
                          Text(
                            '(البائع)',
                            style: Theme.of(context)
                                .textTheme
                                .titleMedium!
                                .copyWith(color: Colors.black, fontSize: 15),
                          ),
                          SizedBox(
                            width: 5,
                          ),
                          Text(
                            '${list[index].product.user.name}',
                            style: Theme.of(context)
                                .textTheme
                                .bodyLarge!
                                .copyWith(fontSize: 18),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          CircleAvatar(
                              radius: 25,
                              backgroundImage:
                                  NetworkImage(list[index].product.user.photo)),
                        ],
                      ),
                      const Divider(),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '(المشتري)',
                            style: Theme.of(context)
                                .textTheme
                                .titleMedium!
                                .copyWith(color: Colors.black, fontSize: 15),
                          ),
                          SizedBox(
                            width: 5,
                          ),
                          Text(
                            '${list[index].customer.name}',
                            style: Theme.of(context)
                                .textTheme
                                .bodyLarge!
                                .copyWith(fontSize: 18),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          CircleAvatar(
                              radius: 25,
                              backgroundImage:
                                  NetworkImage(list[index].customer.photo)),
                        ],
                      ),
                      const Divider(),
                      Text(
                        'تاريخ الاستلام: ${ChoseDateTime().chose(list[index].receiveDate)}',
                        style: Theme.of(context).textTheme.bodyMedium,
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
                              giveProductModel[index].product.photos.length < 3
                                  ? 200
                                  : 400,
                          width: double.infinity,
                          child: PhotoGrid(
                              imageUrls:
                                  giveProductModel[index].product.photos))
                    ],
                  ),
                ),
              ),
          separatorBuilder: (context, index) => const SizedBox(
                height: 5,
              ),
          itemCount: giveProductModel.length),
    );
  }
}
