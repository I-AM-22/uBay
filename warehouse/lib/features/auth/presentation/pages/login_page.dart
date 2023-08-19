import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../bloc/auth/auth_bloc.dart';
import '../widget/login_form_widget.dart';

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
      centerTitle: true,
      title: const Text(
        'uBay',
        style: TextStyle(color: Colors.white, fontFamily: 'Mont'),
      ),
    );
  }

  Widget _buildBody() {
    return BlocProvider(
      create: (_) => di.getIt<AuthBloc>(),
      child: LoginFormWidget(),
    );
  }
}
