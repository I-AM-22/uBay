import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';
import 'package:warehouse/generated/locale_keys.g.dart';

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
                    LocaleKeys.auth_login.tr(),
                    style: TextStyle(
                        fontSize: 25,
                        fontFamily: 'Mont',
                        fontWeight: FontWeight.bold,
                        color: primaryColor),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  TextFormWidget(
                    obscureText: false,
                    controller: emailController,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText: LocaleKeys
                              .validation_the_email_field_must_not_be_empty
                              .tr()),
                      FormBuilderValidators.minLength(8,
                          errorText: LocaleKeys
                              .validation_the_email_must_be_a_valid_email
                              .tr())
                    ]),
                    hintText: LocaleKeys.auth_email.tr(),
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
                          errorText: LocaleKeys
                              .validation_the_password_field_must_not_be_empty
                              .tr()),
                      FormBuilderValidators.minLength(6,
                          errorText: LocaleKeys
                              .validation_The_password_must_be_at_least_characters_long
                              .tr())
                    ]),
                    hintText: LocaleKeys.auth_password.tr(),
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
                              LocaleKeys.auth_login.tr(),
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
