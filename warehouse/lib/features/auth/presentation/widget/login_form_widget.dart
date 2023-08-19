import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

import '../../../../core/theme.dart';
import '../bloc/auth/auth_bloc.dart';

// ignore: must_be_immutable
class LoginFormWidget extends StatelessWidget {
  LoginFormWidget({Key? key}) : super(key: key);

  bool isVisibility = true;
  bool isLoading = false;
  final form = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          state.maybeWhen(
            orElse: () {},
            loading: () {
              isLoading = true;
            },
            successLoginState: (message) {
              SnackBarMessage().snackBarMessageSuccess(context, message);
              Navigator.pushNamedAndRemoveUntil(
                  context, '/homePage', (route) => false);
            },
            errorLoginState: (message) {
              isLoading = false;
              SnackBarMessage().snackBarMessageError(context, message);
            },
          );
        },
        builder: (context, state) => state.maybeWhen(
            orElse: () => _buildLoginFormWidget(context),
            authInitial: () {
              return _buildLoginFormWidget(context);
            },
            errorLoginState: (message) {
              return _buildLoginFormWidget(context);
            },
            changeIconVisibilityState: (isVisible) {
              isVisibility = isVisible;
              return _buildLoginFormWidget(context);
            }));
  }

  Widget _buildLoginFormWidget(context) => Center(
        child: Form(
          key: form,
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'تسجيل الدخول',
                    textAlign: TextAlign.end,
                    style: TextStyle(
                        fontSize: 25,
                        fontFamily: 'Mont',
                        fontWeight: FontWeight.bold,
                        color: primaryColor),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  SvgPicture.asset('assets/images/login.svg'),
                  const SizedBox(
                    height: 50,
                  ),
                  TextFormWidget(
                    obscureText: false,
                    controller: emailController,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText:
                              'حقل البريد الالكتروني يجب الا يكون فارغا'),
                      FormBuilderValidators.minLength(8,
                          errorText:
                              'البريد الالكتروني يجب ان يكون بريدا الكترونيا صالحا')
                    ]),
                    hintText: 'البريد الالكتروني',
                    suffixIcon: Icons.email_outlined,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextFormWidget(
                    controller: passwordController,
                    obscureText: isVisibility,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText: 'حقل كلمة المرور يجب الا يكون فارغا'),
                      FormBuilderValidators.minLength(6,
                          errorText: 'كلمة المرور يجب ان تكون على الاقل 6 رموز')
                    ]),
                    hintText: 'كلمة المرور',
                    suffixIcon: Icons.lock,
                    prefixIcon:
                        isVisibility ? Icons.visibility : Icons.visibility_off,
                    onPressed: () {
                      BlocProvider.of<AuthBloc>(context).add(
                          AuthEvent.changeIconVisibilityEvent(isVisibility));
                    },
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ConditionalBuilder(
                    condition: !isLoading,
                    fallback: (context) => ElevatedButtonWidget(
                        onPressed: () {},
                        widget: LoadingWidget(),
                        color: Colors.grey),
                    builder: (context) => ElevatedButtonWidget(
                        color: primaryColor,
                        onPressed: () {
                          if (form.currentState!.validate()) {
                            BlocProvider.of<AuthBloc>(context).add(
                                AuthEvent.loginEvent(
                                    email: emailController.text,
                                    password: passwordController.text));
                          }
                        },
                        widget: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              'تسجيل الدخول',
                              style: Theme.of(context).textTheme.titleMedium,
                            )
                          ],
                        )),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
}
