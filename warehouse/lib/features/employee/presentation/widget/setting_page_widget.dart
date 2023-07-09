import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/widget/error_widget.dart';
import '../../../../core/widget/loading_widget.dart';
import '../bloc/employee/employee_bloc.dart';

// ignore: must_be_immutable
class SettingPageWidget extends StatelessWidget {
  SettingPageWidget({Key? key}) : super(key: key);
  bool isLoading = false;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => di.getIt<EmployeeBloc>(),
      child: BlocConsumer<EmployeeBloc, EmployeeState>(
        listener: (context, state) {
          state.maybeWhen(
              orElse: () {},
              loading: () {
                isLoading = true;
              },
              successLogOutState: (message){
                SnackBarMessage().snackBarMessageSuccess(context, message);
                Navigator.pushNamedAndRemoveUntil(context, '/loginScreen', (route) => false);
          });
        },
        builder: (context, state) => state.maybeWhen(
            orElse: () => const ErrorMessageWidget(message: 'حاول لاحقاً'),
            userInitial: () => _buildUserProfile(context),
            loading: ()=>const LoadingWidget(),),
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
                        context.read<EmployeeBloc>().add(const EmployeeEvent.logOutEvent());
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
