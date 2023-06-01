import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart';
import 'package:warehouse/features/auth/presentation/pages/reset_password_page.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';

class ForgetPasswordPageWidget extends StatelessWidget {
  ForgetPasswordPageWidget({Key? key}) : super(key: key);
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
              successForgetPasswordState: (message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
              },
              errorForgetPasswordState: (message) {
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
            successForgetPasswordState: (message) {
              isLoading = false;
              return const ResetPasswordPage();
            },
            errorForgetPasswordState: (message) {
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
                  const Text(
                    'سيتم إرسال رمز لبريدك الالكتروني',
                    style: TextStyle(color: Colors.black, fontFamily: 'Mont'),
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
                  Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                        color: isLoading ? Colors.grey : primaryColor,
                        borderRadius: BorderRadius.circular(12)),
                    child: ConditionalBuilder(
                      condition: !isLoading,
                      builder: (_) => MaterialButton(
                        onPressed: () {
                          if (formKey.currentState!.validate()) {
                            BlocProvider.of<AuthBloc>(context).add(
                                AuthEvent.forgetPasswordEvent(
                                    emailController.text));
                          }
                        },
                        color: primaryColor,
                        textColor: Colors.white,
                        child: const Text(
                          'ارسال رمز اعادة التعيين',
                          style: TextStyle(fontFamily: 'Mont'),
                        ),
                      ),
                      fallback: (_) => Center(
                          child: CircularProgressIndicator(
                        color: primaryColor,
                      )),
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      );
}
