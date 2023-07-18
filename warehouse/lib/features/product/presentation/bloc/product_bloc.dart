import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';

import '../../../../core/errors/failures.dart';
import '../../../../core/strings/failure.dart';
import '../../domain/usecase/get_product_usecase.dart';
import '../../domain/usecase/receive_product_usecase.dart';

part 'product_event.dart';

part 'product_state.dart';

part 'product_bloc.freezed.dart';

@injectable
class ProductBloc extends Bloc<ProductEvent, ProductState> {
  final GetProductUseCase getProductUseCase;
  final ReceiveProductUseCase receiveProductUseCase;

  ProductBloc(this.getProductUseCase, this.receiveProductUseCase)
      : super(const ProductState.initial()) {
      on<_$_getProductEvent>((event, emit) async {
        emit(const _$_loading());
        final successOrFailure = await getProductUseCase(event.id);
        print('in bloc \n');
        successOrFailure.fold((failure) {
          emit(_$_errorGetProductState(_mapFailureToString(failure)));
        }, (success) {
          emit(_$_successGetProductState(success));
        });
      });
      on<_$_receiveProductEvent>((event, emit) async {
        emit(const _$_loading());
        final succOrFailure = await receiveProductUseCase(event.id,event.status);
        succOrFailure.fold((l) {
          emit(_$_errorReceiveProductState(_mapFailureToString(l)));
        }, (r) {
          emit(const _$_successReceiveProductState());
        });
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
