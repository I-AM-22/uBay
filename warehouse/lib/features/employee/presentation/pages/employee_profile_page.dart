import 'package:flutter/material.dart';

import '../widget/employee_profile_widget.dart';

class EmployeeProfilePage extends StatelessWidget {
  const EmployeeProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: _buildAppBar(context), body: const EmployeeProfileWidget());
  }

  AppBar _buildAppBar(BuildContext context) => AppBar(
      title: const Text(
        'الملف الشخصي',
        style: TextStyle(fontFamily: 'Mont', color: Colors.white),
      ),
      centerTitle: true,
      leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
          },
          icon: const Icon(
            Icons.arrow_back,
            color: Colors.white,
          )));
}
