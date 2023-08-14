import 'package:flutter/material.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';

class ProductsReceived extends StatelessWidget {
  const ProductsReceived({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                  child: ElevatedButtonWidget(
                      onPressed: () {},
                      row: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'تم تسليمها',
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium!
                                .copyWith(color: Colors.white),
                          )
                        ],
                      ))),
              const SizedBox(
                width: 5,
              ),
              Expanded(
                  child: ElevatedButtonWidget(
                      onPressed: () {},
                      row: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'تم استلامها',
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium!
                                .copyWith(color: Colors.white),
                          )
                        ],
                      ))),
            ],
          )
        ],
      ),
    );
  }
}
