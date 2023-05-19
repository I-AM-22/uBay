import 'dart:io';

import 'package:bloc/bloc.dart';

import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../domain/usecases/login_usecase.dart';
import '../../../domain/usecases/pick_profile_image_usecase.dart';
import '../../../domain/usecases/signup_usecase.dart';
import 'auth_event.dart';
import 'auth_state.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final LoginUseCase loginUseCase;
  final SignupUseCase signupUseCase;
  final PickProfileImageUseCase pickProfileImageUseCase;

  AuthBloc({
    required this.signupUseCase,
    required this.loginUseCase,
    required this.pickProfileImageUseCase,
  }) : super(AuthInitial()) {
    on<LoginEvent>((event, emit) async {
      emit(LoadingLoginState());
      final login = await loginUseCase(event.email, event.password);
      login.fold((failure) {
        emit(ErrorLoginState(_mapFailureToString(failure)));
      }, (success) {
        emit(const SuccessLoginState("Login Successfully"));
      });
    });
    on<SignupEvent>((event, emit) async {
      emit(LoadingLoginState());
      final signup = await signupUseCase(
          event.userName, event.email, event.password, event.passwordConfirm);
      signup.fold((failure) {
        emit(ErrorSignupState(_mapFailureToString(failure)));
      }, (_) {
        emit(SuccessSignupState("Signup Successfully"));
      });
    });
    on<PickProfileImageEvent>((event, emit) async {
      final image = await pickProfileImageUseCase(event.source);
      image.fold((l) {
        emit(const ErrorPickImageState());
      }, (success) {
        emit(SuccessPickImageState(File(success.path)));
      });
    });
  }

  String _mapFailureToString(Failure failure) {
    switch (failure.runtimeType) {
      case ServerFailure:
        return SERVER_FAILURE;
      case OfflineFailure:
        return OFFLINE_FAILURE;
      default:
        return "unExpected Error, pleas try again later";
    }
  }
}
