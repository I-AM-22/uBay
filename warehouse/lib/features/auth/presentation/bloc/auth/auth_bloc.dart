import 'package:bloc/bloc.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/generated/locale_keys.g.dart';

import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../domain/usecases/login_usecase.dart';
part 'auth_event.dart';
part 'auth_state.dart';
part 'auth_bloc.freezed.dart';

@Injectable()
class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final LoginUseCase loginUseCase;

  AuthBloc({
    required this.loginUseCase,
  }) : super(const AuthState.authInitial()) {
    on<_$_loginEvent>((event, emit) async {
      emit(const _$_loading());
      final login = await loginUseCase(event.email, event.password);
      login.fold((failure) {
        emit(AuthState.errorLoginState(_mapFailureToString(failure)));
      }, (success) {
        emit(AuthState.successLoginState(
            LocaleKeys.messages_login_successfully.tr()));
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
        return LocaleKeys.messages_unExpected_error.tr();
    }
  }
}
