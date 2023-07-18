part of 'product_bloc.dart';

@freezed
abstract class ProductEvent with _$ProductEvent {
  const factory ProductEvent.getProductEvent(String id)=_getProductEvent;
  const factory ProductEvent.receiveProductEvent(String id,int status)=_receiveProductEvent;
}
