import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/theme.dart';
import 'package:warehouse/core/util/chose_date_time.dart';
import 'package:warehouse/core/widget/error_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';
import 'package:warehouse/features/user/presentation/bloc/user/user_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;
import '../../../../core/util/header_curved.dart';

class UserProfileWidget extends StatelessWidget {
  const UserProfileWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) =>
          di.getIt<UserBloc>()..add(const UserEvent.getMyProfileEvent()),
      child: BlocConsumer<UserBloc, UserState>(
        listener: (context, state) {
          // state.when(
          //     userInitial: () {},
          //     loading: () {},
          //     successUpdateMyPasswordState: (message) {},
          //     errorUpdateMyPasswordState: (m) {},
          //     successChangeIconVisibilityState: (m) {},
          //     successPickImageProfileState: (m) {},
          //     errorPickImageProfileState: () {},
          //     successUpdateMyProfileState: (m) {},
          //     errorUpdateMyProfileState: (m) {},
          //     successGetMyProfileState: (UserModel model) {},
          //     errorGetMyProfileState: (message) {
          //       SnackBarMessage().snackBarMessageError(context, message);
          //     });
        },
        builder: (context, state) => state.maybeWhen(
          orElse: ()=>const ErrorMessageWidget(message: 'حاول لاحقا 😀'),
            userInitial: () => const LoadingWidget(),
            loading: () => const LoadingWidget(),
            successGetMyProfileState: (m) => _buildMyProfile(context, m),
            errorGetMyProfileState: (m) => ErrorMessageWidget(
                  message: m,
                ),),
      ),
    );
  }

  Widget _buildMyProfile(BuildContext context, UserModel model) =>
      SingleChildScrollView(
        child: Card(
          margin: EdgeInsets.zero,
          color: Colors.white,
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
                        top: MediaQuery.of(context).size.height / 10),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Container(
                          width: MediaQuery.of(context).size.width / 2.5,
                          height: MediaQuery.of(context).size.width / 2.5,
                          padding: const EdgeInsets.all(10.0),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: Colors.white,
                            image: DecorationImage(
                              image: NetworkImage(model.data.photo),
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(20.0),
                          child: Text(model.data.name,
                              style: Theme.of(context).textTheme.bodyLarge),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                textDirection: TextDirection.rtl,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Icon(
                      Icons.email,
                      color: primaryColor,
                    ),
                  ),
                  Expanded(
                    child: Text(
                      model.data.email,
                      textDirection: TextDirection.rtl,
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 16,
              ),
              Row(
                textDirection: TextDirection.rtl,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Icon(
                      Icons.date_range,
                      color: primaryColor,
                    ),
                  ),
                  Expanded(
                      child: Text(
                    textDirection: TextDirection.rtl,
                    ChoseDateTime().chose(model.data.createdAt),
                    style: Theme.of(context).textTheme.bodyMedium,
                  )),
                ],
              ),
              const SizedBox(
                height: 16,
              ),
              const Divider(),
              TextButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/EditProfilePage');
                  },
                  child: Text(
                    'تعديل التفاصيل العامة',
                    style: Theme.of(context)
                        .textTheme
                        .bodyMedium!
                        .copyWith(color: primaryColor),
                  ))
            ],
          ),
        ),
      );
}
