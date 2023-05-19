import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:image_picker/image_picker.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';
import '../../../../core/util/show_bottom_sheet.dart';
import '../../../../core/util/snackbar_message.dart';
import '../bloc/auth/auth_bloc.dart';
import '../bloc/auth/auth_event.dart';
import '../bloc/auth/auth_state.dart';
import '../pages/login_page.dart';

// ignore: must_be_immutable
class SignupFormWidget extends StatelessWidget {
  SignupFormWidget({Key? key}) : super(key: key);
  var emailController = TextEditingController();
  var passWordController = TextEditingController();
  var nameController = TextEditingController();
  var formKey = GlobalKey<FormState>();
  File? userImage;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: ((_) => di.sl<AuthBloc>()),
      child: BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          if (state is SuccessSignupState) {
            SnackBarMessage().snackBarMessageSuccess(context, state.message);
            Navigator.pushAndRemoveUntil(
                context,
                MaterialPageRoute(builder: (_) => const LoginPage()),
                (route) => false);
          } else if (state is ErrorSignupState) {
            SnackBarMessage().snackBarMessageError(context, state.error);
          }
          if (state is SuccessPickImageState) {
            userImage = state.image;
          }
        },
        builder: (context, state) {
          {
            if (state is LoadingLoginState) {
              return Form(
                key: formKey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Sign Up',
                      style: TextStyle(
                          fontSize: 40,
                          fontWeight: FontWeight.bold,
                          color: primaryColor),
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    Stack(
                        clipBehavior: Clip.antiAlias,
                        alignment: Alignment.bottomRight,
                        children: [
                          Container(
                            height: 200,
                            width: double.infinity,
                            decoration: BoxDecoration(
                                image: DecorationImage(
                                    fit: BoxFit.contain,
                                    image: userImage != null
                                        ? Image(image: FileImage(userImage!))
                                            .image
                                        : const AssetImage(
                                            'assets/image/user.jpg'))),
                          ),
                          Container(
                            padding: const EdgeInsets.all(5),
                            color: primaryColor,
                            child: IconButton(
                              onPressed: () {
                                ShowModalBottomSheet().showBottomSheet(
                                    context, _buildPickProfileImage(context));
                              },
                              icon: const Icon(Icons.add_a_photo),
                            ),
                          )
                        ]),
                    const SizedBox(
                      height: 10,
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Expanded(
                        child: MaterialButton(
                      onPressed: () {
                        BlocProvider.of<AuthBloc>(context).add(
                            const PickProfileImageEvent(ImageSource.gallery));
                      },
                      color: primaryColor,
                      child: const Text('Gallery',
                          style: TextStyle(color: Colors.white)),
                    )),
                    Container(
                      width: double.infinity,
                      color: primaryColor,
                      child: TextButton(
                        onPressed: () {
                          if (formKey.currentState!.validate()) {
                            BlocProvider.of<AuthBloc>(context).add(SignupEvent(
                                nameController.text,
                                emailController.text,
                                passWordController.text,
                                null));
                          }
                        },
                        child: const Text(
                          'SIGN UP',
                          style: TextStyle(fontSize: 25, color: Colors.white),
                        ),
                      ),
                    ),
                  ],
                ),
              );
            }
            return SignupFormWidget();
          }
        },
      ),
    );
  }

  Widget _buildPickProfileImage(context) {
    return Column(
      children: [
        ElevatedButton(
          onPressed: () {
            BlocProvider.of<AuthBloc>(context)
                .add(const PickProfileImageEvent(ImageSource.camera));
          },
          child: const Text("camera"),
        ),
        const SizedBox(
          height: 10,
        ),
        ElevatedButton(
          onPressed: () {
            BlocProvider.of<AuthBloc>(context)
                .add(const PickProfileImageEvent(ImageSource.gallery));
          },
          child: const Text('gallery'),
        ),
      ],
    );
  }

  String? validateEmail(String? value) {
    if (RegExp(
            r"^[a-zA-Z0-9.a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
        .hasMatch(value!)) {
      return null;
    }
    return "check your email, must be like \"a+@b+.c+\"";
  }

  String? validateName(String? value) {
    if (value!.isNotEmpty) {
      return null;
    }
    return "name must be not empty";
  }

  String? validatePassword(String? value) {
    if (value!.isNotEmpty) {
      if (value.length < 8) {
        return 'Password must be between 8 and 32 characters';
      }
      return null;
    }
    return "password must be not empty";
  }
}
