import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';
import '../../../../core/theme.dart';
import '../../../../core/util/snackbar_message.dart';
import '../bloc/auth/auth_bloc.dart';

// ignore: must_be_immutable
class SignupFormWidget extends StatelessWidget {
  SignupFormWidget({Key? key}) : super(key: key);

  final form = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final passwordConfirmController = TextEditingController();
  final nameController = TextEditingController();
  String passwordConfirmation = '';
  bool isVisibility = true;

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          state.when(
              authInitial: () {},
              loading: () {},
              successLoginState: (String message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
              },
              errorLoginState: (String message) {
                SnackBarMessage().snackBarMessageError(context, message);
              },
              changeIconVisibilityState: (bool isVis) {});
        },
        builder: (context, state) => state.when(
              authInitial: () {
                return _buildSignupWidget(context);
              },
              loading: () {
                return const LoadingWidget();
              },
              successLoginState: (String message) {
                return Container();
              },
              errorLoginState: (String message) {
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
            child: Form(
              key: form,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
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
                  TextFormWidget(
                    obscureText: false,
                    controller: nameController,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText: 'حقل الاسم يجب الا يكون فارغا'),
                    ]),
                    hintText: 'الاسم',
                    suffixIcon: Icons.face,
                  ),
                  const SizedBox(
                    height: 16,
                  ),
                  TextFormWidget(
                    obscureText: false,
                    controller: emailController,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText:
                              'حقل البريد الالكتروني يجب الا يكون فارغا'),
                      FormBuilderValidators.email(
                          errorText:
                              'البريد الالكتروني يجب ان يكون بريدا الكترونيا صالحا')
                    ]),
                    hintText: 'البريد الالكتروني',
                    suffixIcon: Icons.email_outlined,
                  ),
                  const SizedBox(
                    height: 16,
                  ),
                  TextFormWidget(
                    obscureText: isVisibility,
                    controller: passwordController,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText: 'حقل كلمة المرور يجب الا يكون فارغا'),
                      FormBuilderValidators.minLength(8,
                          errorText: 'كلمة المرور يجب ان تكون على الأقل 8 رموز')
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
                    height: 16,
                  ),
                  TextFormWidget(
                    controller: passwordConfirmController,
                    obscureText: isVisibility,
                    validate: (val) {
                      if (val!.isEmpty) {
                        return 'حقل تأكيد كلمة المرور يجب الا يكون فارغا';
                      }
                      if (val != passwordController.text) {
                        return 'كلمة المرور غير متطابقة';
                      }
                      return null;
                    },
                    hintText: 'تأكيد كلمة المرور',
                    suffixIcon: Icons.lock,
                    prefixIcon:
                        isVisibility ? Icons.visibility : Icons.visibility_off,
                    onPressed: () {
                      BlocProvider.of<AuthBloc>(context).add(
                          AuthEvent.changeIconVisibilityEvent(isVisibility));
                    },
                  ),
                  const SizedBox(
                    height: 16,
                  ),
                  Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      color: primaryColor,
                    ),
                    child: MaterialButton(
                      onPressed: () {
                        print(form.currentState!.validate());
                        if (form.currentState!.validate()) {
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
                        'تسجيل الدخول',
                        style: TextStyle(fontSize: 20, color: Colors.white),
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
