import 'package:bloc/bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

import '../../domain/usecase/get_product_usecase.dart';

part 'product_event.dart';

part 'product_state.dart';

part 'product_bloc.freezed.dart';

@injectable
class ProductBloc extends Bloc<ProductEvent, ProductState> {
  final GetProductUseCase getProductUseCase;

  ProductBloc(this.getProductUseCase) : super(const ProductState.initial()) {
    on<ProductEvent>((event, emit) {
      on<_$_getProductEvent>((event, emit) async {
        emit(const _$_loading());
        final successOrFailure = await getProductUseCase(event.id);
      });
    });
  }
}
