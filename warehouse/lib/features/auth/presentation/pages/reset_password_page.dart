import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart';
import 'package:warehouse/features/auth/presentation/widget/reset_password_page_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

class ResetPasswordPage extends StatelessWidget {
  ResetPasswordPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(context),
      body: const ResetPasswordWidget(),
    );
  }

  AppBar _buildAppBar(BuildContext context) => AppBar(
        title: const Text(
          'نظيف',
          style: TextStyle(fontFamily: 'Mont', color: Colors.white),
        ),
        centerTitle: true,
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back,
            color: Colors.white,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      );
}
