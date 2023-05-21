import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/core/widget/message_display_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form.dart';

import '../../../../core/theme.dart';
import '../bloc/auth/auth_bloc.dart';
import '../pages/signup_page.dart';

// ignore: must_be_immutable
class LoginFormWidget extends StatelessWidget {
  LoginFormWidget({Key? key}) : super(key: key);

  var emailController = TextEditingController();
  var passwordController = TextEditingController();
  var formKey = GlobalKey<FormState>();

  bool isVisibility = true;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AuthBloc, AuthState>(
        builder: (context, state) => state.when(
              authInitial: () => _buildLoginFormWidget(context),
              loading: () => const LoadingWidget(),
              successLoginState: (message) =>
                  MessageDisplayWidget(message: message),
              errorLoginState: (message) =>
                  MessageDisplayWidget(message: message),
              changeIconVisibilityState: (isVisible) {
                isVisibility = isVisible;
                return _buildLoginFormWidget(context);
              },
            ));
  }

  Widget _buildLoginFormWidget(context) => Padding(
        padding: const EdgeInsets.all(15.0),
        child: Form(
          key: formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Log In',
                style: TextStyle(
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                    color: primaryColor),
              ),
              const SizedBox(
                height: 30,
              ),
              TextFormFileWidget(
                  controller: emailController,
                  validate: validateEmail,
                  hintText: 'Email',
                  icon: Icons.email,
                  textInputType: TextInputType.emailAddress),
              const SizedBox(height: 20),
              TextFormFileWidget(
                controller: passwordController,
                obscureText: isVisibility,
                validate: validatePassword,
                hintText: 'Password',
                icon: Icons.lock,
                textInputType: TextInputType.visiblePassword,
                suffixIcon:
                    isVisibility ? Icons.visibility_off : Icons.visibility,
                onPressed: () {
                  BlocProvider.of<AuthBloc>(context)
                      .add(AuthEvent.changeIconVisibilityEvent(isVisibility));
                },
              ),
              const SizedBox(
                height: 20,
              ),
              Container(
                width: double.infinity,
                color: primaryColor,
                child: TextButton(
                  onPressed: () {
                    if (formKey.currentState!.validate()) {
                      BlocProvider.of<AuthBloc>(context).add(
                          AuthEvent.loginEvent(
                              email: emailController.text,
                              password: passwordController.text));
                    }
                  },
                  child: const Text(
                    'LOGIN',
                    style: TextStyle(fontSize: 25, color: Colors.white),
                  ),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Don\'t have an account?',
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                  TextButton(
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (_) => const SignupPage()));
                    },
                    child: Text(
                      'Register',
                      style: TextStyle(fontSize: 15, color: primaryColor),
                    ),
                  )
                ],
              ),
            ],
          ),
        ),
      );

  String? validateEmail(String? value) {
    if (RegExp(
            r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
        .hasMatch(value!)) {
      return null;
    }
    return "check your email, must be like \"a+@b+.c+\"";
  }

  String? validatePassword(String? value) {
    if (value!.isNotEmpty) {
      if (value.length < 8) {
        return 'Password must be between 8 and 32 characters';
      }
      return null;
    }
    return "password must be not empty";
  }
}
