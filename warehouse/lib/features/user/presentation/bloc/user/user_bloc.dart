import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';
import 'dart:io';
import 'package:image_picker/image_picker.dart';
import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../data/model/user_model.dart';
import '../../../domain/usecases/delete_my_account_usecase.dart';
import '../../../domain/usecases/get_my_profile_usecase.dart';
import '../../../domain/usecases/logout_usecase.dart';
import '../../../domain/usecases/update_my_profile_usecase.dart';
import '../../../domain/usecases/update_password_usecase.dart';

part 'user_event.dart';

part 'user_state.dart';

part 'user_bloc.freezed.dart';

@Injectable()
class UserBloc extends Bloc<UserEvent, UserState> {
  final UpdatePasswordUseCase updatePasswordUseCase;
  final UpdateMyProfileUseCase updateMyProfileUseCase;
  final GetMyProfileUseCase getMyProfileUseCase;
  final DeleteMyAccountUseCase deleteMyAccountUseCase;
  final LogOutUseCase logOutUseCase;

  UserBloc(this.updatePasswordUseCase, this.updateMyProfileUseCase,
      this.getMyProfileUseCase, this.deleteMyAccountUseCase, this.logOutUseCase)
      : super(const UserState.userInitial()) {
    on<_$_updateMyPasswordEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure =
          await updatePasswordUseCase(event.currentPassword, event.password);
      successOrFailure.fold((failure) {
        emit(_$_errorUpdateMyPasswordState(_mapFailureToString(failure)));
      }, (success) {
        emit(const _$_successUpdateMyPasswordState(
            'تم تغيير كلمة المرور بنجاح'));
      });
    });
    on<_$_updateMyProfileEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure =
          await updateMyProfileUseCase(event.name, event.email, event.photo);
      successOrFailure.fold((failure) {
        emit(_$_errorUpdateMyProfileState(_mapFailureToString(failure)));
      }, (success) {
        emit(_$_successUpdateMyProfileState(success));
      });
    });
    on<_$_getMyProfileEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure = await getMyProfileUseCase();
      successOrFailure.fold((failure) {
        emit(_$_errorGetMyProfileState(_mapFailureToString(failure)));
      }, (success) {
        emit(_$_successGetMyProfileState(success));
      });
    });
    on<_$_changeIconVisibilityEvent>((event, emit) {
      emit(_$_changeIconVisibilityState(!event.isVisible));
    });
    on<_$_pickProfileImageEvent>((event, emit) async {
      final image = await ImagePicker().pickImage(source: event.imageSource);
      if (image != null) {
        emit(_$_successPickImageProfileState(File(image.path)));
      } else {
        emit(const _$_errorPickImageProfileState());
      }
    });
    on<_$_deleteMyAccountEvent>((event, emit) async{
      emit(const _$_loading());
      final successOrFailure=await deleteMyAccountUseCase();
      successOrFailure.fold((failure) {
        emit(_$_errorDeleteMyAccountState(_mapFailureToString(failure)));
      }, (_) {
        emit(const _$_successDeleteMyAccountState('تم حذف حسابك بنجاح'));
      });
    });
    on<_$_logOutEvent>((event, emit) async{
      emit(const _$_loading());
      await logOutUseCase();
      emit(const _$_successLogOutState('تم تسجيل الخروج بنجاح'));
    });
  }

  String _mapFailureToString(Failure failure) {
    switch (failure.runtimeType) {
      case ServerFailure:
        return SERVER_FAILURE;
      case OfflineFailure:
        return OFFLINE_FAILURE;
      case EmptyCacheFailure:
        return EMPTY_CACHE_FAILURE;
      default:
        return "خطأ غير معروف, الرجاء المحاولة لاحقاً";
    }
  }
}
