import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../bloc/auth/auth_bloc.dart';
import '../widget/login_form_widget.dart';

// ignore: must_be_immutable
class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(),
      body: _buildBody(),
    );
  }

  AppBar _buildAppBar() {
    return AppBar(
      title: const Text(
        'Warehouse',
        style: TextStyle(color: Colors.white),
      ),
    );
  }

  Widget _buildBody() {
    return Padding(
      padding: const EdgeInsets.all(10),
      child: BlocProvider(
        create: (_) => di.getIt<AuthBloc>(),
        child: LoginFormWidget(),
      ),
    );
  }
}
