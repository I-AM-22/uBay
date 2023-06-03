import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart';
import 'package:warehouse/features/auth/presentation/pages/reset_password_page.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';

// ignore: must_be_immutable
class ForgotPasswordPageWidget extends StatelessWidget {
  ForgotPasswordPageWidget({Key? key}) : super(key: key);
  final emailController = TextEditingController();
  final formKey = GlobalKey<FormState>();
  bool isLoading = false;

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
              changeIconVisibilityState: (isVisible) {},
              successForgotPasswordState: (message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
              },
              errorForgotPasswordState: (message) {
                SnackBarMessage().snackBarMessageError(context, message);
              },
              successResetPasswordState: (message) {},
              errorResetPasswordState: (message) {});
        },
        builder: (context, state) => state.when(
            authInitial: () => _buildBuilder(context),
            loading: () {
              isLoading = true;
              return _buildBuilder(context);
            },
            successLoginState: (message) => Container(),
            errorLoginState: (message) => Container(),
            changeIconVisibilityState: (isVis) => Container(),
            successForgotPasswordState: (message) {
              isLoading = false;
              return const ResetPasswordPage();
            },
            errorForgotPasswordState: (message) {
              isLoading = false;
              return _buildBuilder(context);
            },
            successResetPasswordState: (message) => Container(),
            errorResetPasswordState: (message) => Container()),
      ),
    );
  }

  Widget _buildBuilder(BuildContext context) => Padding(
        padding: const EdgeInsets.all(20.0),
        child: Center(
          child: Form(
            key: formKey,
            child: SingleChildScrollView(
              physics: const BouncingScrollPhysics(),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'إعادة تعيين كلمة المرور',
                    style: TextStyle(
                        color: primaryColor, fontFamily: 'Mont', fontSize: 25),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                   Text(
                    'سيتم إرسال رمز لبريدك الالكتروني',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  TextFormWidget(
                    controller: emailController,
                    hintText: 'البريد الالكتروني',
                    suffixIcon: Icons.email_outlined,
                    obscureText: false,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(
                          errorText:
                              'حقل البريد الالكتروني يجب الا يكون فارغا'),
                      FormBuilderValidators.email(
                          errorText:
                              'البريد الالكتروني يجب ان يكون بريدا الكترونيا صالحا')
                    ]),
                  ),
                  const SizedBox(
                    height: 16,
                  ),
                  ConditionalBuilder(
                    condition: !isLoading,
                    builder: (_) => ElevatedButtonWidget(
                        onPressed: () {
                          if (formKey.currentState!.validate()) {
                            BlocProvider.of<AuthBloc>(context).add(
                                AuthEvent.forgotPasswordEvent(
                                    emailController.text));
                          }
                        },
                        row: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              'ارسال رمز اعادة التعيين',
                              style: Theme.of(context).textTheme.titleMedium,
                            )
                          ],
                        )),
                    fallback: (_) =>
                        const Center(child: CircularProgressIndicator()),
                  )
                ],
              ),
            ),
          ),
        ),
      );
}
