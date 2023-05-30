import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/core/widget/message_display_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

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
        listener: (context, state) {},
        builder: (context, state) => state.when(authInitial: () {
              return _buildLoginFormWidget(context);
            }, loading: () {
              return const LoadingWidget();
            }, successLoginState: (message) {
              return MessageDisplayWidget(message: message);
            }, errorLoginState: (message) {
              return MessageDisplayWidget(message: message);
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
                      FormBuilderValidators.minLength(8,
                          errorText: 'كلمة المرور يجب ان تكون على الاقل 8 رموز')
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
                  Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                        color: primaryColor,
                        borderRadius: BorderRadius.circular(12)),
                    child: MaterialButton(
                      onPressed: () {
                        print(form.currentState!.validate());
                        // if (form.valid) {
                        //   BlocProvider.of<AuthBloc>(context).add(
                        //       AuthEvent.loginEvent(
                        //           email: form.value['email'].toString(),
                        //           password:
                        //               form.value['password'].toString()));
                        // }
                      },
                      child: const Text(
                        'تسجيل الدخول',
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                            fontFamily: 'Mont'),
                      ),
                    ),
                  ),
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
                  Divider(),
                  Row(
                    textDirection: TextDirection.rtl,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'نسيت كلمة المرور؟',
                        style: TextStyle(fontFamily: 'Mont'),
                      ),
                      TextButton(
                        child: const Text(
                          'إعادة تعيين كلمة المرور',
                          style: TextStyle(
                              decoration: TextDecoration.underline,
                              fontFamily: 'Mont'),
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
