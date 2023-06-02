import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';
import 'package:warehouse/main.dart';

import '../../../../core/theme.dart';
import '../bloc/auth/auth_bloc.dart';

// ignore: must_be_immutable
class LoginFormWidget extends StatelessWidget {
  LoginFormWidget({Key? key}) : super(key: key);

  bool isVisibility = true;
  final form = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          state.when(
              authInitial: () => null,
              loading: () => null,
              successLoginState: (message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
                Navigator.pushNamedAndRemoveUntil(
                    context, '/EmployeePage', (route) => false);
              },
              errorLoginState: (message) {
                SnackBarMessage().snackBarMessageError(context, message);
              },
              changeIconVisibilityState: (message) => null,
              successForgetPasswordState: (message) => null,
              errorForgetPasswordState: (message) => null,
              successResetPasswordState: (message) => null,
              errorResetPasswordState: (message) => null);
        },
        builder: (context, state) => state.when(authInitial: () {
              return _buildLoginFormWidget(context);
            }, loading: () {
              return const LoadingWidget();
            }, successLoginState: (message) {
              return Employee();
            }, errorLoginState: (message) {
              return _buildLoginFormWidget(context);
            }, changeIconVisibilityState: (isVisible) {
              isVisibility = isVisible;
              return _buildLoginFormWidget(context);
            }, successForgetPasswordState: (String message) {
              return Container();
            }, errorForgetPasswordState: (String message) {
              return Container();
            }, successResetPasswordState: (String message) {
              return Container();
            }, errorResetPasswordState: (String message) {
              return Container();
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
                  SvgPicture.asset('assets/images/register.svg'),
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
                  ElevatedButtonWidget(
                      onPressed: () {
                        if (form.currentState!.validate()) {
                          BlocProvider.of<AuthBloc>(context).add(
                              AuthEvent.loginEvent(
                                  email: emailController.text,
                                  password: passwordController.text));
                        }
                      },
                      row: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'تسجيل الدخول',
                            style: Theme.of(context).textTheme.titleMedium,
                          )
                        ],
                      )),
                  Row(
                    textDirection: TextDirection.rtl,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'ليس لديك حساب؟',
                        style: TextStyle(
                            fontSize: 15,
                            fontFamily: 'Mont',
                            color: primaryColor5),
                      ),
                      TextButton(
                          onPressed: () {
                            Navigator.pushNamed(context, '/SignupScreen');
                          },
                          child: Text(
                            'انشاء حساب',
                            style: TextStyle(
                                decoration: TextDecoration.underline,
                                fontSize: 13,
                                color: primaryColor5,
                                fontFamily: 'Mont'),
                          ))
                    ],
                  ),
                  const Divider(),
                  Row(
                    textDirection: TextDirection.rtl,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                       Text(
                        'نسيت كلمة المرور؟',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                      TextButton(
                        child:  Text(
                          'إعادة تعيين كلمة المرور',
                          style: Theme.of(context).textTheme.bodyMedium!.copyWith(color: primaryColor),
                        ),
                        onPressed: () {
                          Navigator.pushNamed(context, '/ForgetPasswordPage');
                        },
                      ),
                    ],
                  )
                ],
              ),
            ),
          ),
        ),
      );
}
