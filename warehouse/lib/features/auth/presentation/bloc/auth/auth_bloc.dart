import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/auth/domain/usecases/forget_password_model.dart';
import 'package:warehouse/features/auth/domain/usecases/reset_password_usecase.dart';

import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../domain/usecases/login_usecase.dart';
import '../../../domain/usecases/signup_usecase.dart';
part 'auth_event.dart';
part 'auth_state.dart';
part 'auth_bloc.freezed.dart';

@Injectable()
class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final LoginUseCase loginUseCase;
  final SignupUseCase signupUseCase;
  final ForgetPasswordUseCase forgetPasswordUseCase;
  final ResetPasswordUseCase resetPasswordUseCase;

  AuthBloc(
      {required this.signupUseCase,
      required this.loginUseCase,
      required this.forgetPasswordUseCase,
      required this.resetPasswordUseCase})
      : super(const AuthState.authInitial()) {
    on<_$_loginEvent>((event, emit) async {
      emit(const _$_loading());
      final login = await loginUseCase(event.email, event.password);
      login.fold((failure) {
        emit(AuthState.errorLoginState(_mapFailureToString(failure)));
      }, (success) {
        emit(const AuthState.successLoginState("تم تسجيل الدخول بنجاح"));
      });
    });
    on<_$_signupEvent>((event, emit) async {
      emit(const AuthState.loading());
      final signup = await signupUseCase(
          event.userName, event.email, event.password, event.passwordConfirm);
      signup.fold((failure) {
        emit(AuthState.errorLoginState(_mapFailureToString(failure)));
      }, (_) {
        emit(const AuthState.successLoginState("تم تسجيل الدخول بنجاح"));
      });
    });
    on<_$_changeIconVisibilityEvent>((event, emit) {
      emit(AuthState.changeIconVisibilityState(!event.isVisible));
    });
    on<_$_forgetPasswordEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure = await forgetPasswordUseCase(event.email);
      successOrFailure.fold((failure) {
        emit(_$_errorForgetPasswordState(_mapFailureToString(failure)));
      }, (success) {
        emit(_$_successForgetPasswordState(success));
      });
    });
    on<_$_resetPasswordEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure =
          await resetPasswordUseCase(event.token, event.password);
      successOrFailure.fold((failure) {
        emit(_$_errorResetPasswordState(_mapFailureToString(failure)));
      }, (success) {
        emit(const _$_successResetPasswordState('تم تغيير كلمة المرور بنجاح'));
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
