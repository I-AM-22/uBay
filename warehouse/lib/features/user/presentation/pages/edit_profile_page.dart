import 'package:flutter/material.dart';
import 'package:warehouse/features/user/presentation/widget/edit_profile_page_widget.dart';

class EditProfilePage extends StatelessWidget {
  const EditProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(context),
      body: EditProfilePageWidget(),
    );
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
