import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/features/product/data/model/all_product_model/all_product_model.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';

import '../../../../core/errors/failures.dart';
import '../../../../core/strings/failure.dart';
import '../../domain/usecase/get_all_product_usecase.dart';
import '../../domain/usecase/get_product_usecase.dart';
import '../../domain/usecase/get_receive_and_give_products_usecase.dart';
import '../../domain/usecase/logout_usecase.dart';
import '../../domain/usecase/receive_product_usecase.dart';
import '../../data/model/recive_and_give_model/recive_and_give_model.dart';

part 'product_event.dart';

part 'product_state.dart';

part 'product_bloc.freezed.dart';

@injectable
class ProductBloc extends Bloc<ProductEvent, ProductState> {
  final GetProductUseCase getProductUseCase;
  final ReceiveProductUseCase receiveProductUseCase;
  final LogOutUseCase logoutUseCase;
  final GetAllProductUseCase getAllProductUsecase;
  final ReceiveAndGiveProductsUseCase receiveAndGiveProductsUseCase;

  ProductBloc(
      this.getProductUseCase,
      this.receiveProductUseCase,
      this.logoutUseCase,
      this.getAllProductUsecase,
      this.receiveAndGiveProductsUseCase)
      : super(const ProductState.initial()) {
    on<_$_getProductEvent>((event, emit) async {
      emit(const _$_loading());
      final successOrFailure = await getProductUseCase(event.id);
      successOrFailure.fold((failure) {
        emit(_$_errorGetProductState(_mapFailureToString(failure)));
      }, (success) {
        emit(_$_successGetProductState(success));
      });
    });
    on<_$_receiveProductEvent>((event, emit) async {
      emit(const _$_loading());
      final succOrFailure = await receiveProductUseCase(event.id, event.status);
      succOrFailure.fold((l) {
        emit(_$_errorReceiveProductState(_mapFailureToString(l)));
      }, (r) {
        emit(const _$_successReceiveProductState());
      });
    });
    on<_$_logOut>((event, emit) async {
      await logoutUseCase();
      emit(const _successLogOutState('تم تسجيل الخروج'));
    });
    on<_$_getAllProduct>((event, emit) async {
      emit(const _loading());
      final successOrFailure = await getAllProductUsecase();
      successOrFailure.fold((failure) {
        emit(_errorGetAllProductState(_mapFailureToString(failure)));
      }, (success) {
        emit(_successGetAllProductState(success));
      });
    });
    on<_$_getReceiveAndGiveProducts>((event, emit) async{
      emit(const _$_loading());
      final successOrFailure=await receiveAndGiveProductsUseCase();
      successOrFailure.fold((failure){
        emit(_errorGetReceiveAndGiveProductsState(_mapFailureToString(failure)));
      }, (success){
        emit(_successGetReceiveAndGiveProductsState(success));
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
