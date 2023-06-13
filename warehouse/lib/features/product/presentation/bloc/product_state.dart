part of 'product_bloc.dart';

@freezed
class ProductState with _$ProductState {
  const factory ProductState.initial() = _Initial;
  const factory ProductState.loading() = _loading;
  const factory ProductState.successGetProductState() = _successGetProductState;
  const factory ProductState.errorGetProductState() = _errorGetProductState;
}
