import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../domain/usecases/login_usecase.dart';
import '../../../domain/usecases/signup_usecase.dart';
part 'auth_event.dart';
part 'auth_state.dart';
part 'auth_bloc.freezed.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final LoginUseCase loginUseCase;
  final SignupUseCase signupUseCase;

  AuthBloc({
    required this.signupUseCase,
    required this.loginUseCase,
  }) : super(const AuthState.authInitial()) {
    on<_$_loginEvent>((event, emit) async {
      emit(const _$_loading());
      final login = await loginUseCase(event.email, event.password);
      login.fold((failure) {
        emit(AuthState.errorLoginState(_mapFailureToString(failure)));
      }, (success) {
        emit(const AuthState.successLoginState("Login Successfully"));
      });
    });
    on<_$_signupEvent>((event, emit) async {
      emit(const AuthState.loading());
      final signup = await signupUseCase(
          event.userName, event.email, event.password, event.passwordConfirm);
      signup.fold((failure) {
        emit(AuthState.errorLoginState(_mapFailureToString(failure)));
      }, (_) {
        emit(const AuthState.successLoginState("Signup Successfully"));
      });
    });
    on<_$_changeIconVisibilityEvent>((event, emit) {
      emit(AuthState.changeIconVisibilityState(!event.isVisible));
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
