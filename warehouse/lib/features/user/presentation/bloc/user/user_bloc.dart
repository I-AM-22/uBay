import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../domain/usecases/update_password_usecase.dart';

part 'user_event.dart';

part 'user_state.dart';

part 'user_bloc.freezed.dart';

@Injectable()
class UserBloc extends Bloc<UserEvent, UserState> {
  final UpdatePasswordUseCase updatePasswordUseCase;

  UserBloc(this.updatePasswordUseCase) : super(const UserState.userInitial()) {
    on<_$_updateMyPasswordEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure =
          await updatePasswordUseCase(event.currentPassword, event.password);
      successOrFailure.fold((failure) {
        emit(
            UserState.errorUpdateMyPasswordState(_mapFailureToString(failure)));
      }, (success) {
        emit(const UserState.successUpdateMyPasswordState(
            'تم تغيير كلمة المرور بنجاح'));
      });
    });
    on<_$_changeIconVisibilityEvent>((event, emit) {
      emit(UserState.successChangeIconVisibilityState(!event.isVisible));
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
