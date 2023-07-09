import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';
import 'dart:io';
import 'package:image_picker/image_picker.dart';
import '../../../../../core/errors/failures.dart';
import '../../../../../core/strings/failure.dart';
import '../../../data/model/employee_model/employee_model.dart';
import '../../../domain/usecase/get_my_profile_usecase.dart';
import '../../../domain/usecase/logout_usecase.dart';

part 'employee_event.dart';

part 'employee_state.dart';

part 'employee_bloc.freezed.dart';

@Injectable()
class EmployeeBloc extends Bloc<EmployeeEvent, EmployeeState> {
  final GetMyProfileUseCase getMyProfileUseCase;
  final LogOutUseCase logOutUseCase;

  EmployeeBloc(
      this.getMyProfileUseCase,this.logOutUseCase)
      : super(const EmployeeState.userInitial()) {
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
