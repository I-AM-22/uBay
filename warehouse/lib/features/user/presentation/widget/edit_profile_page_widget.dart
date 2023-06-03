import 'dart:io';
import 'package:conditional_builder_null_safety/conditional_builder_null_safety.dart';
import 'package:image_picker/image_picker.dart';
import 'package:reactive_forms/reactive_forms.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/show_bottom_sheet.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/core/util/chose_date_time.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';
import 'package:warehouse/features/user/presentation/bloc/user/user_bloc.dart';
import 'package:warehouse/features/user/presentation/widget/reactive_text_filed_widget.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/util/header_curved.dart';
import '../../../../core/widget/elevated_button_widget.dart';

// ignore: must_be_immutable
class EditProfilePageWidget extends StatelessWidget {
  EditProfilePageWidget({Key? key}) : super(key: key);
  File? profileImage;
  bool isLoading = false;
  final form = FormGroup({
    'name': FormControl<String>(
        validators: [Validators.required], value: userDetails!.data.user.name),
    'email': FormControl<String>(validators: [
      Validators.required,
      Validators.email,
    ], value: userDetails!.data.user.email),
  });

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => di.getIt<UserBloc>(),
      child: BlocConsumer<UserBloc, UserState>(
        listener: (context, state) {
          state.when(
              userInitial: () {},
              loading: () {
                isLoading = true;
              },
              successUpdateMyPasswordState: (message) {},
              errorUpdateMyPasswordState: (m) {},
              successChangeIconVisibilityState: (m) {},
              successPickImageProfileState: (image) {
                profileImage = image;
              },
              errorPickImageProfileState: () {
                SnackBarMessage()
                    .snackBarMessageError(context, 'الرجاء المحاولة لاحقا');
              },
              successUpdateMyProfileState: (UserModel userModel) {
                SnackBarMessage().snackBarMessageSuccess(
                    context, 'تم تحديث معلوماتك الشخصية بنجاح');
                isLoading = false;
                Navigator.pop(context);
              },
              errorUpdateMyProfileState: (String message) {
                isLoading = false;
                SnackBarMessage().snackBarMessageError(context, message);
              },
              successGetMyProfileState: (UserModel model) {},
              errorGetMyProfileState: (String message) {
                SnackBarMessage().snackBarMessageError(context, message);
              });
        },
        builder: (context, state) => _buildUpdateProfile(context),
      ),
    );
  }

  Widget _buildUpdateProfile(BuildContext context)=>SingleChildScrollView(
    child: Card(
      margin: EdgeInsets.zero,
      color: Colors.white,
      child: ReactiveForm(
        formGroup: form,
        child: Column(
          children: [
            Stack(
              alignment: Alignment.center,
              children: [
                CustomPaint(
                  painter: HeaderCurvedContainer(),
                  child: SizedBox(
                    width: MediaQuery.of(context).size.width,
                    height: MediaQuery.of(context).size.height / 2,
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(
                      top: MediaQuery.of(context).size.height / 70),
                  child:
                  Stack(alignment: Alignment.bottomRight, children: [
                    if (profileImage == null)
                      Container(
                        width: MediaQuery.of(context).size.width / 2.5,
                        height: MediaQuery.of(context).size.width / 2.5,
                        padding: const EdgeInsets.all(10.0),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: Colors.white,
                          image: DecorationImage(
                            image: NetworkImage(
                                userDetails!.data.user.photo),
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    if (profileImage != null)
                      Container(
                        width: MediaQuery.of(context).size.width / 2.5,
                        height: MediaQuery.of(context).size.width / 2.5,
                        padding: const EdgeInsets.all(10.0),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: Colors.white,
                          image: DecorationImage(
                            image: FileImage(profileImage!),
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    CircleAvatar(
                      backgroundColor: primaryColor,
                      child: IconButton(
                        onPressed: () {
                          ShowModalBottomSheet().showBottomSheet(
                              context, _buildPickProfileImage(context));
                        },
                        icon: const Icon(
                          Icons.camera_alt,
                          color: Colors.white,
                        ),
                      ),
                    )
                  ]),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: ReactiveTextFiledWidget(
                  validationMessageRequired:
                  'حقل الاسم يجب الا يكون فارغا',
                  controller: 'name',
                  labelText: 'الاسم',
                  suffixIcon: Icons.face,
                  obscureText: false),
            ),
            const SizedBox(
              height: 16,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: ReactiveTextFiledWidget(
                  validationMessage:
                  'البريد الالكتروني يجب ان يكون بريدا الكترونيا صالحا',
                  validationMessageRequired:
                  'حقل البريد الالكتروني يجب الا يكون فارغا',
                  controller: 'email',
                  labelText: 'البريد الالكتروني',
                  suffixIcon: Icons.email,
                  obscureText: false),
            ),
            const SizedBox(
              height: 16,
            ),
            ConditionalBuilder(
                condition: !isLoading,
                builder: (_) => SizedBox(
                  width: MediaQuery.of(context).size.width / 3,
                  child: ElevatedButtonWidget(
                      onPressed: () {
                        print(form.value);
                        if (form.valid) {
                          String name = form.value['name'].toString();
                          String email =
                          form.value['email'].toString();
                          BlocProvider.of<UserBloc>(context).add(
                              UserEvent.updateMyProfileEvent(
                                  name, email, profileImage));
                        }
                      },
                      row: Row(
                        textDirection: TextDirection.rtl,
                        children: [
                          Text(
                            'حفظ',
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium,
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          const Icon(
                            Icons.save,
                            color: Colors.white,
                          ),
                        ],
                      )),
                ),
                fallback: (_) => const Center(
                  child: CircularProgressIndicator(),
                )),
            const SizedBox(
              height: 16,
            )
          ],
        ),
      ),
    ),
  );

  Widget _buildPickProfileImage(context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          MaterialButton(
            onPressed: () {
              BlocProvider.of<UserBloc>(context).add(
                  const UserEvent.pickProfileImageEvent(ImageSource.camera));
            },
            child: Row(
              textDirection: TextDirection.rtl,
              children: [
                Icon(
                  Icons.camera_alt_outlined,
                  color: primaryColor,
                ),
                const SizedBox(
                  width: 10,
                ),
                Expanded(
                  child: Text(
                    maxLines: 2,
                    textDirection: TextDirection.rtl,
                    overflow: TextOverflow.ellipsis,
                    'التقاط صورة',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          MaterialButton(
            onPressed: () {
              BlocProvider.of<UserBloc>(context).add(
                  const UserEvent.pickProfileImageEvent(ImageSource.gallery));
            },
            child: Row(
              textDirection: TextDirection.rtl,
              children: [
                Icon(
                  Icons.photo_library_sharp,
                  color: primaryColor,
                ),
                const SizedBox(
                  width: 10,
                ),
                Expanded(
                  child: Text(
                    maxLines: 2,
                    textDirection: TextDirection.rtl,
                    overflow: TextOverflow.ellipsis,
                    'تحديد صورة من المعرض',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
