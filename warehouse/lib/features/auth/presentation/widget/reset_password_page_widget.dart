import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

import '../../../../core/theme.dart';
import '../bloc/auth/auth_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;

class ResetPasswordWidget extends StatelessWidget {
  ResetPasswordWidget({Key? key}) : super(key: key);
  final tokenController = TextEditingController();
  final passwordController = TextEditingController();
  final formKey = GlobalKey<FormState>();
  bool isVisibility = true;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => di.getIt<AuthBloc>(),
      child: BlocConsumer<AuthBloc, AuthState>(
          listener: (context, state) {
            state.when(
                authInitial: () {},
                loading: () {},
                successLoginState: (message) {},
                errorLoginState: (message) {},
                changeIconVisibilityState: (message) {},
                successForgetPasswordState: (message) {},
                errorForgetPasswordState: (message) {},
                successResetPasswordState: (message) {
                  SnackBarMessage().snackBarMessageSuccess(context, message);
                  if (token != null) {
                    Navigator.pushNamedAndRemoveUntil(
                        context, '/EmployeePage', (route) => false);
                  } else {
                    Navigator.pushNamedAndRemoveUntil(
                        context, '/loginScreen', (route) => false);
                  }
                },
                errorResetPasswordState: (message) {
                  SnackBarMessage().snackBarMessageError(context, message);
                });
          },
          builder: (context, state) => state.when(
              authInitial: () => _buildForm(context),
              loading: () => const LoadingWidget(),
              successLoginState: (message) => Container(),
              errorLoginState: (message) => Container(),
              changeIconVisibilityState: (isVisible) {
                isVisibility = isVisible;
                return _buildForm(context);
              },
              successForgetPasswordState: (message) => Container(),
              errorForgetPasswordState: (message) => Container(),
              successResetPasswordState: (message) => const LoginPage(),
              errorResetPasswordState: (message) => _buildForm(context))),
    );
  }

  Widget _buildForm(BuildContext context) => Form(
        key: formKey,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormWidget(
                  controller: tokenController,
                  validate: FormBuilderValidators.compose([
                    FormBuilderValidators.required(
                        errorText: 'حقل رمز التأكيد يجب ألا يكون فارغ')
                  ]),
                  hintText: 'رمز التأكيد',
                  suffixIcon: Icons.password_sharp,
                  obscureText: false),
              const SizedBox(
                height: 16,
              ),
              TextFormWidget(
                controller: passwordController,
                validate: FormBuilderValidators.compose([
                  FormBuilderValidators.required(
                      errorText: 'حقل كلمة المرور يجب ألا يكون فارغ'),
                  FormBuilderValidators.minLength(6,
                      errorText: 'كلمة المرور يجب ان تتكون من 6 رموز على الأقل')
                ]),
                hintText: 'كلمة المرور الجديدة',
                suffixIcon: Icons.lock,
                obscureText: isVisibility,
                prefixIcon:
                    isVisibility ? Icons.visibility : Icons.visibility_off,
                onPressed: () {
                  BlocProvider.of<AuthBloc>(context)
                      .add(AuthEvent.changeIconVisibilityEvent(isVisibility));
                },
              ),
              const SizedBox(
                height: 16,
              ),
              SizedBox(
                width: double.infinity,
                height: 50,
                child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: primaryColor,
                      disabledBackgroundColor: secondaryColor,
                      side: BorderSide(color: primaryColor),
                      //border width and color
                      elevation: 3,
                      //elevation of button
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12)),
                    ),
                    onPressed: () {
                      if (formKey.currentState!.validate()) {
                        BlocProvider.of<AuthBloc>(context).add(
                            AuthEvent.resetPasswordEvent(
                                tokenController.text, passwordController.text));
                      }
                    },
                    child: const Text(
                      'تغيير كلمة المرور',
                      style: TextStyle(
                          fontFamily: 'Mont',
                          color: Colors.white,
                          fontSize: 20),
                    )),
              )
            ],
          ),
        ),
      );
}
