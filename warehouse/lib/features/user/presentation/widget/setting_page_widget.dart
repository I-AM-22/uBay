import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/features/user/presentation/bloc/user/user_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/theme.dart';
import '../../../../core/util/show_my_dialog.dart';
import '../../../../core/widget/error_widget.dart';
import '../../../../core/widget/loading_widget.dart';

// ignore: must_be_immutable
class SettingPageWidget extends StatelessWidget {
  SettingPageWidget({Key? key}) : super(key: key);
  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => di.getIt<UserBloc>(),
      child: BlocConsumer<UserBloc, UserState>(
        listener: (context, state) {
          state.maybeWhen(
              orElse: () {},
              loading: () {
                isLoading = true;
              },
              successDeleteMyAccountState: (message) {
                SnackBarMessage().snackBarMessageSuccess(context, message);
                Navigator.pushNamedAndRemoveUntil(
                    context, '/loginScreen', (route) => false);


              },
              errorDeleteMyAccountState: (message) {
                SnackBarMessage().snackBarMessageError(context, message);
                isLoading = true;
              },successLogOutState: (message){
                SnackBarMessage().snackBarMessageSuccess(context, message);
                Navigator.pushNamedAndRemoveUntil(context, '/loginScreen', (route) => false);
          });
        },
        builder: (context, state) => state.maybeWhen(
            orElse: () => const ErrorMessageWidget(message: 'حاول لاحقاً'),
            userInitial: () => _buildUserProfile(context),
            loading: ()=>const LoadingWidget(),
            errorDeleteMyAccountState: (_) => _buildUserProfile(context)),
      ),
    );
  }

  Widget _buildUserProfile(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 20),
        child: Column(
          children: [
            Card(
              color: Colors.white,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    'الحساب',
                    style: Theme.of(context)
                        .textTheme
                        .bodyLarge!
                        .copyWith(fontSize: 20),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  MaterialButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/UserProfilePage');
                    },
                    child: const Row(
                      textDirection: TextDirection.rtl,
                      children: [
                        Expanded(
                          child: Text(
                            maxLines: 2,
                            textDirection: TextDirection.rtl,
                            overflow: TextOverflow.ellipsis,
                            'الملف الشخصي',
                            style: TextStyle(
                                fontFamily: 'Mont', color: Colors.black),
                          ),
                        ),
                        Icon(Icons.arrow_back)
                      ],
                    ),
                  ),
                  const Divider(),
                  MaterialButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/EditProfilePage');
                    },
                    child: const Row(
                      textDirection: TextDirection.rtl,
                      children: [
                        Expanded(
                          child: Text(
                            maxLines: 2,
                            textDirection: TextDirection.rtl,
                            overflow: TextOverflow.ellipsis,
                            'تحديث الملف الشخصي',
                            style: TextStyle(
                                fontFamily: 'Mont', color: Colors.black),
                          ),
                        ),
                        Icon(Icons.arrow_back)
                      ],
                    ),
                  ),
                  const Divider(),
                  MaterialButton(
                    onPressed: () {
                      ShowMyDialog.showMyDialog(
                        context: context,
                        title: 'هل أنت متأكد؟',
                        content:
                            'سيتم حذف حساب نظيف الخاص بك ، هذا الفعل لا عودة فيه',
                        widget: Column(
                          children: [
                            TextButton(
                                style: ElevatedButton.styleFrom(
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(
                                            borderRadius)),
                                    side: const BorderSide(color: Colors.red),
                                    //border width and co
                                    elevation: 3,
                                    backgroundColor: Colors.red),
                                onPressed: () {
                                  context.read<UserBloc>().add(const UserEvent.deleteMyAccountEvent());
                                  Navigator.pop(context);
                                },
                                child: Row(
                                  textDirection: TextDirection.rtl,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      'نعم, احذف حسابي',
                                      style: Theme.of(context)
                                          .textTheme
                                          .bodyMedium!
                                          .copyWith(color: Colors.white),
                                    ),
                                    const SizedBox(
                                      width: 10,
                                    ),
                                    const Icon(
                                      Icons.sentiment_very_dissatisfied,
                                      color: Colors.white,
                                    )
                                  ],
                                )),
                            TextButton(
                                style: ElevatedButton.styleFrom(
                                    shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(
                                            borderRadius)),
                                    side: BorderSide(color: primaryColor),
                                    //border width and co
                                    elevation: 3,
                                    backgroundColor: primaryColor,
                                    disabledBackgroundColor: secondaryColor),
                                onPressed: () =>
                                    Navigator.pop(context, 'cancel'),
                                child: Row(
                                  textDirection: TextDirection.rtl,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      'الغاء',
                                      style: Theme.of(context)
                                          .textTheme
                                          .bodyMedium!
                                          .copyWith(color: Colors.white),
                                    ),
                                    const SizedBox(
                                      width: 10,
                                    ),
                                    const Icon(
                                      Icons.tag_faces_sharp,
                                      color: Colors.white,
                                    )
                                  ],
                                ))
                          ],
                        ),
                      );
                    },
                    child: const Row(
                      textDirection: TextDirection.rtl,
                      children: [
                        Expanded(
                          child: Text(
                            maxLines: 2,
                            textDirection: TextDirection.rtl,
                            overflow: TextOverflow.ellipsis,
                            'حذف الحساب',
                            style: TextStyle(
                                fontFamily: 'Mont', color: Colors.black),
                          ),
                        ),
                        Icon(Icons.arrow_back)
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Card(
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text(
                      'الخصوصية والأمان',
                      style: Theme.of(context)
                          .textTheme
                          .bodyLarge!
                          .copyWith(fontSize: 20),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    MaterialButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/UpdateMyPasswordPage');
                      },
                      child: const Row(
                        textDirection: TextDirection.rtl,
                        children: [
                          Expanded(
                            child: Text(
                              maxLines: 2,
                              textDirection: TextDirection.rtl,
                              overflow: TextOverflow.ellipsis,
                              'تغيير كلمة المرور',
                              style: TextStyle(
                                  fontFamily: 'Mont', color: Colors.black),
                            ),
                          ),
                          Icon(Icons.arrow_back)
                        ],
                      ),
                    ),
                    const Divider(),
                    MaterialButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/ForgetPasswordPage');
                      },
                      child: const Row(
                        textDirection: TextDirection.rtl,
                        children: [
                          Expanded(
                            child: Text(
                              maxLines: 2,
                              textDirection: TextDirection.rtl,
                              overflow: TextOverflow.ellipsis,
                              'طلب اعادة تعيين كلمة المرور',
                              style: TextStyle(
                                  fontFamily: 'Mont', color: Colors.black),
                            ),
                          ),
                          Icon(Icons.arrow_back)
                        ],
                      ),
                    ),
                    const Divider(),
                    MaterialButton(
                      onPressed: () {
                        context.read<UserBloc>().add(const UserEvent.logOutEvent());
                      },
                      child: const Row(
                        textDirection: TextDirection.rtl,
                        children: [
                          Expanded(
                            child: Text(
                              maxLines: 2,
                              textDirection: TextDirection.rtl,
                              overflow: TextOverflow.ellipsis,
                              'تسجيل الخروج',
                              style: TextStyle(
                                  fontFamily: 'Mont', color: Colors.red),
                            ),
                          ),
                          Icon(Icons.arrow_back)
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      );
}
