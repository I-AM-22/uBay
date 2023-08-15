import 'package:flutter/material.dart';
import 'package:warehouse/features/product/data/model/recive_and_give_model/recive_and_give_model.dart';
import 'package:warehouse/features/product/presentation/widget/photo_grid.dart';

import '../../../../core/theme.dart';
import '../../../../core/util/chose_date_time.dart';

class ReceivedDeliveredProductsWidget extends StatelessWidget {
  final List<Ive> list;
  const ReceivedDeliveredProductsWidget({super.key, required this.list});

  @override
  Widget build(BuildContext context) {
    return _buildListProduct(list, context);
  }
  Widget _buildListProduct(
      List<Ive> giveProductModel, BuildContext context) {
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
                        color: primaryColor,
                        child: Padding(
                          padding: const EdgeInsets.all(5.0),
                          child: Text(
                            '${giveProductModel[index].product.price} ',
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
                          Text(
                              ChoseDateTime().chose(
                                  giveProductModel[index].product.createdAt),
                              style: Theme.of(context)
                                  .textTheme
                                  .bodySmall!
                                  .copyWith(
                                  fontSize: 13, color: Colors.grey))
                        ],
                      ),
                      const SizedBox(
                        width: 20,
                      ),
                      const CircleAvatar(
                          radius: 25,
                          backgroundImage: NetworkImage(
                              'https://i.imgur.com/7rlze8l.jpg')),
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
