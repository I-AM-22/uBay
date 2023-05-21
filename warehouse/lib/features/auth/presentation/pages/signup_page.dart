import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../widget/signup_form_widget.dart';

class SignupPage extends StatelessWidget {
  const SignupPage({Key? key}) : super(key: key);

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
    return BlocProvider(
        create: (_) => di.getIt<AuthBloc>(), child: SignupFormWidget());
  }
}
