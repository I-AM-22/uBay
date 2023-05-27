import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:reactive_forms/reactive_forms.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/pages/signup_page.dart';
import 'package:warehouse/features/auth/presentation/widget/reactiv_text_filed_widget.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/snackbar_message.dart';
import '../bloc/auth/auth_bloc.dart';

// ignore: must_be_immutable
class SignupFormWidget extends StatelessWidget {
  SignupFormWidget({Key? key}) : super(key: key);

  final form = FormGroup({
    'name': FormControl<String>(validators: [Validators.required]),
    'email': FormControl<String>(
        validators: [Validators.required, Validators.email]),
    'password': FormControl<String>(
        validators: [Validators.required, Validators.minLength(8)]),
    'passwordConfirmation': FormControl<String>(),
  }, validators: [
    Validators.mustMatch('password', 'passwordConfirmation'),
  ]);

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
                return _buildSignupWidget(context);
              },
              changeIconVisibilityState: (bool isVisible) {
                isVisibility = isVisible;
                return _buildSignupWidget(context);
              },
            ));
  }

  Widget _buildSignupWidget(BuildContext context) => Padding(
        padding: const EdgeInsets.all(20.0),
        child: Center(
          child: SingleChildScrollView(
            child: ReactiveForm(
              formGroup: form,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    'مرحباً',
                    style: TextStyle(
                        color: primaryColor, fontFamily: 'Mont', fontSize: 25),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  SvgPicture.asset('assets/images/register.svg'),
                  const SizedBox(
                    height: 40,
                  ),
                  ReactiveTextFieldWidget(
                    controller: 'name',
                    hintText: 'الاسم',
                    suffixIcon: Icons.person,
                    textInputType: TextInputType.name,
                    validationMessageRequired: 'يجب ألا يكون حقل الاسم فارغا',
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ReactiveTextFieldWidget(
                    controller: 'email',
                    hintText: 'البريد الالكتروني',
                    validationMessageRequired:
                        'يجب ألا يكون البريد الالكتروني فارغا',
                    validationMessage:
                        'يجب أن تكون كلمة البريد الالكتروني بريدًا إلكترونيًا صالحًا',
                    suffixIcon: Icons.email_outlined,
                    textInputType: TextInputType.emailAddress,
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ReactiveTextFieldWidget(
                    controller: 'password',
                    hintText: 'كلمة المرور',
                    suffixIcon: Icons.lock,
                    textInputType: TextInputType.visiblePassword,
                    obscureText: isVisibility,
                    validationMessageRequired: 'يجب ألا تكون كلمة المرور فارغة',
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
                  ReactiveTextFieldWidget(
                    controller: 'passwordConfirmation',
                    hintText: 'تأكيد كلمة المرور',
                    suffixIcon: Icons.lock,
                    textInputType: TextInputType.visiblePassword,
                    obscureText: isVisibility,
                    validationMessageRequired: 'يجب ألا تكون كلمة المرور فارغة',
                    validationMessage: 'يجب أن تتكون كلمة المرور متطابقة',
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
                      borderRadius: BorderRadius.circular(12),
                      color: primaryColor,
                    ),
                    child: ReactiveFormConsumer(
                      builder: (context, form, child) => MaterialButton(
                        onPressed: () {
                          form.markAllAsTouched();
                          if (form.valid) {
                            BlocProvider.of<AuthBloc>(context).add(
                                AuthEvent.signupEvent(
                                    userName: form.value['name'].toString(),
                                    email: form.value['email'].toString(),
                                    password: form.value['password'].toString(),
                                    passwordConfirm: form
                                        .value['passwordConfirmation']
                                        .toString()));
                          }
                          print(
                              '${form.value} ${form.hasErrors} ${form.valid}');
                          print(form.errors);
                        },
                        child: const Text(
                          'تسجيل الدخول',
                          style: TextStyle(fontSize: 20, color: Colors.white),
                        ),
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
