import 'dart:convert';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/features/product/presentation/pages/get_product_page.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';

// ignore: must_be_immutable
class BuildHomeProductPage extends StatelessWidget {
  const BuildHomeProductPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
            CircleAvatar(
              radius: 25,
              backgroundImage: NetworkImage('https://i.imgur.com/7rlze8l.jpg')
            ),
            const SizedBox(
              width: 20,
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'majed',
                    style: Theme.of(context).textTheme.bodyLarge!.copyWith(fontSize: 18),
                  ),
                  Text(
                      '11-5-2020',
                      style: Theme.of(context).textTheme.bodySmall!.copyWith(fontSize: 13,color: Colors.grey))
                ],
              ),
            ),
          ],),
          Divider(),
        ],
      ),
    );
  }
}
