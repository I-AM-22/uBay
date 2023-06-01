import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';
import 'package:warehouse/features/user/presentation/bloc/user/user_bloc.dart';

import '../../../../core/theme.dart';
import 'package:warehouse/injection_container.dart' as di;

// ignore: must_be_immutable
class UpdateMyPasswordPageWidget extends StatelessWidget {
  UpdateMyPasswordPageWidget({Key? key}) : super(key: key);
  final currentPasswordController = TextEditingController();
  final passwordController = TextEditingController();
  final formKey = GlobalKey<FormState>();
  bool isVisibility = true;
  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => di.getIt<UserBloc>(),
      child: BlocConsumer<UserBloc, UserState>(listener: (context, state) {
        state.when(
          userInitial: () {},
          loading: () {
            isLoading = true;
          },
          successUpdateMyPasswordState: (message) {
            SnackBarMessage().snackBarMessageSuccess(context, message);
            Navigator.pushNamedAndRemoveUntil(
                context, '/EmployeePage', (route) => false);
          },
          errorUpdateMyPasswordState: (message) {
            isLoading = false;
            SnackBarMessage().snackBarMessageError(context, message);
          },
          successChangeIconVisibilityState: (bool isVisible) {
            isVisibility = isVisible;
          },
        );
      }, builder: (context, state) {
        return _buildForm(context);
      }),
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
                controller: currentPasswordController,
                validate: FormBuilderValidators.compose([
                  FormBuilderValidators.required(
                      errorText: 'حقل كلمة المرور الحالية يجب ألا تكون فارغة')
                ]),
                hintText: 'كلمة المرور الحالية',
                suffixIcon: Icons.lock,
                obscureText: isVisibility,
                prefixIcon:
                    isVisibility ? Icons.visibility : Icons.visibility_off,
                onPressed: () {
                  BlocProvider.of<UserBloc>(context)
                      .add(UserEvent.changeIconVisibilityEvent(isVisibility));
                },
              ),
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
                  BlocProvider.of<UserBloc>(context)
                      .add(UserEvent.changeIconVisibilityEvent(isVisibility));
                },
              ),
              const SizedBox(
                height: 16,
              ),
              SizedBox(
                width: double.infinity,
                height: 50,
                child: ConditionalBuilder(
                  condition: !isLoading,
                  builder: (_) => ElevatedButton(
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
                          BlocProvider.of<UserBloc>(context).add(
                              UserEvent.updateMyPasswordEvent(
                                  currentPasswordController.text,
                                  passwordController.text));
                        }
                      },
                      child: const Text(
                        'تغيير كلمة المرور',
                        style: TextStyle(
                            fontFamily: 'Mont',
                            color: Colors.white,
                            fontSize: 20),
                      )),
                  fallback: (_) => const Center(
                    child: CircularProgressIndicator(),
                  ),
                ),
              )
            ],
          ),
        ),
      );
}
