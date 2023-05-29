import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:warehouse/features/auth/presentation/widget/text_form_widget.dart';

import '../../../../core/theme.dart';

class PasswordResetPageWidget extends StatelessWidget {
  PasswordResetPageWidget({Key? key}) : super(key: key);
  final emailController = TextEditingController();
  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
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
                      errorText: 'حقل البريد الالكتروني يجب الا يكون فارغا'),
                  FormBuilderValidators.minLength(8,
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
                    color: primaryColor,
                    borderRadius: BorderRadius.circular(12)),
                child: MaterialButton(
                  onPressed: () {},
                  color: primaryColor,
                  textColor: Colors.white,
                  child: const Text(
                    'ارسال رمز اعادة التعيين',
                    style: TextStyle(fontFamily: 'Mont'),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
