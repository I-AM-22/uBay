part of 'product_bloc.dart';

@freezed
abstract class ProductState with _$ProductState {
  const factory ProductState.initial() = _Initial;
  const factory ProductState.loading() = _loading;
  const factory ProductState.successGetProductState(ProductModel productModel) = _successGetProductState;
  const factory ProductState.errorGetProductState(String message) = _errorGetProductState;
  const factory ProductState.successReceiveProductState() = _successReceiveProductState;
  const factory ProductState.errorReceiveProductState(String message) = _errorReceiveProductState;
  const factory ProductState.successLogOutState(String message)=_successLogOutState;
  const factory ProductState.successGetAllProductState(List<AllProductModel> allProductModel)=_successGetAllProductState;
  const factory ProductState.errorGetAllProductState(String message)=_errorGetAllProductState;
  const factory ProductState.successGetReceiveAndGiveProductsState(ReceiveAndGiveModel receiveAndGiveModel)=_successGetReceiveAndGiveProductsState;
  const factory ProductState.errorGetReceiveAndGiveProductsState(String message)=_errorGetReceiveAndGiveProductsState;
}
