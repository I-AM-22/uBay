part of 'product_bloc.dart';

@freezed
abstract class ProductEvent with _$ProductEvent {
  const factory ProductEvent.getProductEvent(String id)=_getProductEvent;
  const factory ProductEvent.receiveProductEvent(String id,String status)=_receiveProductEvent;
  const factory ProductEvent.logOut()=_logOut;
  const factory ProductEvent.getAllProduct()=_getAllProduct;
  const factory ProductEvent.getReceiveAndGiveProducts()=_getReceiveAndGiveProducts;

}
