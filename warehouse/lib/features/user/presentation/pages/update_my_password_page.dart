import 'package:flutter/material.dart';
import 'package:warehouse/features/user/presentation/widget/update_password_page_widget.dart';

class UpdateMyPasswordPage extends StatelessWidget {
  const UpdateMyPasswordPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: _buildAppBar(context), body: UpdateMyPasswordPageWidget());
  }

  AppBar _buildAppBar(BuildContext context) => AppBar(
      title: const Text(
        'الاعدادات',
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
