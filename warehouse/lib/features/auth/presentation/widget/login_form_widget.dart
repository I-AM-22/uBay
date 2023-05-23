import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:injectable/injectable.dart';
import 'package:reactive_forms/reactive_forms.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/core/widget/message_display_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/reactiv_text_filed_widget.dart';

import '../../../../core/theme.dart';
import '../bloc/auth/auth_bloc.dart';

// ignore: must_be_immutable
class LoginFormWidget extends StatelessWidget {
  LoginFormWidget({Key? key}) : super(key: key);

  final form = FormGroup({
    'email': FormControl(validators: [Validators.required, Validators.email]),
    'password':
        FormControl(validators: [Validators.required, Validators.minLength(8)])
  });
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

  Widget _buildLoginFormWidget(context) => Center(
        child: SingleChildScrollView(
          child: ReactiveForm(
            formGroup: form,
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'تسجيل الدخول',
                    textAlign: TextAlign.end,
                    style: TextStyle(
                        fontSize: 40,
                        fontWeight: FontWeight.bold,
                        color: primaryColor),
                  ),
                  const SizedBox(
                    height: 50,
                  ),
                  ReactiveTextFieldWidget(
                      controller: 'email',
                      hintText: 'البريد الالكتروني',
                      suffixIcon: Icons.email_outlined,
                      validationMessageRequired:
                          'يجب ألا تتكون البريد الالكتروني فارغة',
                      typeValidate: 'email',
                      validationMessage:
                          'يجب أن تتكون كلمة البريد الالكتروني بريدًا إلكترونيًا صالحًا',
                      textInputType: TextInputType.emailAddress),
                  const SizedBox(
                    height: 10,
                  ),
                  ReactiveTextFieldWidget(
                    controller: 'password',
                    hintText: 'كلمة المرور',
                    suffixIcon: Icons.lock,
                    textInputType: TextInputType.visiblePassword,
                    obscureText: isVisibility,
                    validationMessageRequired:
                        'يجب ألا تتكون كلمة المرور فارغة',
                    typeValidate: 'minLength',
                    validationMessage:
                        'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل',
                    onPressed: () {
                      BlocProvider.of<AuthBloc>(context).add(
                          AuthEvent.changeIconVisibilityEvent(isVisibility));
                    },
                    prefixIcon:
                        isVisibility ? Icons.visibility : Icons.visibility_off,
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                        color: primaryColor,
                        borderRadius: BorderRadius.circular(5)),
                    child: ReactiveFormConsumer(
                      builder: (context, form, child) => MaterialButton(
                        onPressed: () {
                          if (form.valid) {
                            BlocProvider.of<AuthBloc>(context).add(
                                AuthEvent.loginEvent(
                                    email: form.value['email'].toString(),
                                    password:
                                        form.value['password'].toString()));
                          }
                        },
                        child: const Text(
                          'تسجيل الدخول',
                          style: TextStyle(color: Colors.white, fontSize: 20),
                        ),
                      ),
                    ),
                  ),
                  Row(
                    textDirection: TextDirection.rtl,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'ليس لديك حساب؟',
                        style: TextStyle(fontSize: 18),
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      TextButton(
                          onPressed: () {
                            Navigator.pushNamed(context, '/SignupScreen');
                          },
                          child: Text(
                            'انشاء حساب',
                            style: TextStyle(fontSize: 18, color: primaryColor),
                          ))
                    ],
                  )
                ],
              ),
            ),
          ),
        ),
      );
}
