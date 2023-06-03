import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/auth/presentation/pages/login_page.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

import '../bloc/auth/auth_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;

// ignore: must_be_immutable
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
                successForgotPasswordState: (message) {},
                errorForgotPasswordState: (message) {},
                successResetPasswordState: (message) {
                  SnackBarMessage().snackBarMessageSuccess(context, message);
                  if (userDetails!.token.isNotEmpty) {
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
              successForgotPasswordState: (message) => Container(),
              errorForgotPasswordState: (message) => Container(),
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
              ElevatedButtonWidget(
                  onPressed: () {
                    if (formKey.currentState!.validate()) {
                      BlocProvider.of<AuthBloc>(context).add(
                          AuthEvent.resetPasswordEvent(
                              tokenController.text, passwordController.text));
                    }
                  },
                  row: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        'اعادة تعيين كلمة المرور',
                        style: Theme.of(context).textTheme.bodyMedium,
                      )
                    ],
                  ))
            ],
          ),
        ),
      );
}
