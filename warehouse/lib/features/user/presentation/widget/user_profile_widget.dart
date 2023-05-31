import 'package:flutter/material.dart';

import '../../../../core/util/header_curved.dart';

class UserProfileWidget extends StatelessWidget {
  const UserProfileWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: [
        CustomPaint(
          painter: HeaderCurvedContainer(),
          child: SizedBox(
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.height,
          ),
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Padding(
              padding: EdgeInsets.all(20.0),
              child: Text(
                'Profile',
                style: TextStyle(
                  fontSize: 35.0,
                  letterSpacing: 1.5,
                  color: Colors.white,
                  fontFamily: 'Mont',
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width / 2,
              height: MediaQuery.of(context).size.width / 2,
              padding: const EdgeInsets.all(10.0),
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white,
                // image: DecorationImage(
                //   image: AssetImage(null),
                //   fit: BoxFit.cover,
                // ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
