import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/validation.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/pages/signup_page.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/snackbar_message.dart';
import '../bloc/auth/auth_bloc.dart';

// ignore: must_be_immutable
class SignupFormWidget extends StatelessWidget {
  SignupFormWidget({Key? key}) : super(key: key);

  var emailController = TextEditingController();
  var passwordController = TextEditingController();
  var passwordConfirmController = TextEditingController();
  var nameController = TextEditingController();
  var formKey = GlobalKey<FormState>();

  bool isVisibility = true;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AuthBloc, AuthState>(
        builder: (context, state) => state.when(
              authInitial: () {
                return _buildSignupWidget(context);
              },
              loading: () {
                return const LoadingWidget();
              },
              successLoginState: (String message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
                return Container();
              },
              errorLoginState: (String message) {
                SnackBarMessage().snackBarMessageError(context, message);
                return const SignupPage();
              },
              changeIconVisibilityState: (bool isVisible) {
                isVisibility = isVisible;
                return _buildSignupWidget(context);
              },
            ));
  }

  Widget _buildSignupWidget(BuildContext context) => Padding(
        padding: const EdgeInsets.all(10.0),
        child: Center(
          child: SingleChildScrollView(
            child: Form(
              key: formKey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Sign Up',
                    style: TextStyle(
                        fontSize: 40,
                        fontWeight: FontWeight.bold,
                        color: primaryColor),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormFileWidget(
                      controller: nameController,
                      validate: Validation.validateName,
                      hintText: 'name',
                      icon: Icons.person,
                      textInputType: TextInputType.name),
                  const SizedBox(
                    height: 20,
                  ),
                  TextFormFileWidget(
                      controller: emailController,
                      validate: Validation.validateEmail,
                      hintText: 'Email',
                      icon: Icons.email,
                      textInputType: TextInputType.emailAddress),
                  const SizedBox(
                    height: 20,
                  ),
                  TextFormFileWidget(
                    controller: passwordController,
                    obscureText: isVisibility,
                    validate: Validation.validatePassword,
                    hintText: 'Password',
                    icon: Icons.lock,
                    textInputType: TextInputType.visiblePassword,
                    suffixIcon:
                        isVisibility ? Icons.visibility_off : Icons.visibility,
                    onPressed: () {
                      BlocProvider.of<AuthBloc>(context).add(
                          AuthEvent.changeIconVisibilityEvent(isVisibility));
                    },
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  TextFormFileWidget(
                      controller: passwordConfirmController,
                      obscureText: isVisibility,
                      validate: Validation.validatePasswordConfirm,
                      hintText: 'Confirm Password',
                      icon: Icons.lock,
                      suffixIcon: isVisibility
                          ? Icons.visibility_off
                          : Icons.visibility,
                      onPressed: () {
                        BlocProvider.of<AuthBloc>(context).add(
                            AuthEvent.changeIconVisibilityEvent(isVisibility));
                      },
                      textInputType: TextInputType.visiblePassword),
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
                              AuthEvent.signupEvent(
                                  userName: nameController.text,
                                  email: emailController.text,
                                  password: passwordController.text,
                                  passwordConfirm:
                                      passwordConfirmController.text));
                        }
                      },
                      child: const Text(
                        'SIGN UP',
                        style: TextStyle(fontSize: 25, color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
}
