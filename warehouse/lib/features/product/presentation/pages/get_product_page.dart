import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_cache_manager/flutter_cache_manager.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import 'package:warehouse/core/theme.dart';

class GetProductPage extends StatelessWidget {
  GetProductPage({super.key});

  static final customCacheManager = CacheManager(Config('customCacheKey',
      stalePeriod: const Duration(days: 15), maxNrOfCacheObjects: 100));
  final controller = PageController(initialPage: 0);
  final List image = [
    SvgPicture.asset('assets/images/login.svg'),
    SvgPicture.asset('assets/images/login.svg'),
    SvgPicture.asset('assets/images/login.svg'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('منتج'),
      ),
      body: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              Text('محتوى البوست'),
              SizedBox(
                height: 20,
              ),
              Expanded(
                  child: PageView.builder(
                controller: controller,
                itemBuilder: (context, index) =>
                    SvgPicture.asset('assets/images/login.svg'),
                itemCount: 3,
              )),
              Row(
                children: [
                  SmoothPageIndicator(
                    controller: controller,
                    count: 3,
                    effect: ExpandingDotsEffect(
                        dotColor: primaryColor,
                        dotHeight: 10,
                        expansionFactor: 4,
                        dotWidth: 10,
                        spacing: 5.0),
                  ),
                  Spacer(),
                  IconButton(
                    onPressed: () {},
                    icon: const Icon(Icons.arrow_forward),
                    color: primaryColor,
                  ),
                ],
              )
            ],
          )),
    );
  }
}
