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
      appBar: _buildAppBar(context),
      body: _buildBody(),
    );
  }

  AppBar _buildAppBar(BuildContext context) {
    return AppBar(
      leading: IconButton(
        onPressed: () {
          Navigator.pop(context);
        },
        icon: const Icon(
          Icons.arrow_back,
          color: Colors.white,
        ),
      ),
      centerTitle: true,
      title: const Text(
        'نظيف',
        style: TextStyle(color: Colors.white, fontFamily: 'Mont'),
      ),
    );
  }

  Widget _buildBody() {
    return BlocProvider(
        create: (_) => di.getIt<AuthBloc>(), child: SignupFormWidget());
  }
}
