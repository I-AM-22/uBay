import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

import '../../../../core/theme.dart';
import '../bloc/auth/auth_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;

class ResetPasswordWidget extends StatelessWidget {
  const ResetPasswordWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final tokenController = TextEditingController();
    final passwordController = TextEditingController();
    final formKey = GlobalKey<FormState>();
    bool isVisibility = true;
    return BlocProvider(
      create: (_) => di.getIt<AuthBloc>(),
      child: BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {},
        builder: (context, state) {
          return Form(
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  TextFormWidget(
                      controller: tokenController,
                      validate: FormBuilderValidators.compose(
                          [FormBuilderValidators.required()]),
                      hintText: 'رمز التأكيد',
                      suffixIcon: Icons.password_sharp,
                      obscureText: false),
                  const SizedBox(
                    height: 16,
                  ),
                  TextFormWidget(
                    controller: passwordController,
                    validate: FormBuilderValidators.compose([
                      FormBuilderValidators.required(),
                      FormBuilderValidators.minLength(8)
                    ]),
                    hintText: 'كلمة المرور الجديدة',
                    suffixIcon: Icons.lock,
                    obscureText: isVisibility,
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
                  SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: primaryColor,
                          side: BorderSide(
                              color: primaryColor), //border width and color
                          elevation: 3, //elevation of button
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12)),
                        ),
                        onPressed: () {},
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
        },
      ),
    );
  }
}
