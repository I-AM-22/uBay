import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/core/util/snackbar_message.dart';
import 'package:warehouse/core/widget/elevated_button_widget.dart';
import 'package:warehouse/core/widget/loading_widget.dart';
import 'package:warehouse/features/product/data/model/product_model/product_model.dart';
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart';
import 'package:warehouse/injection_container.dart' as di;

import '../../../../core/theme.dart';

class GetProductWidget extends StatelessWidget {
  final String payment;
  final String product;
  final bool isDeliver;

  const GetProductWidget({super.key, required this.payment, required this.product, required this.isDeliver});



  @override
  Widget build(BuildContext context) {
    String message=isDeliver?'تم استلام القطعة بنجاح':'تم تسليم القطعة للمشتري بنجاح';
    String bottom=isDeliver?'تأكيد استلام القطعة':'تأكيد تسليم القطعة';
    String store=isDeliver?'هذه القطعة لا يجب تسليمها لمستودعنا':'هذه القطعة ليست في مستودعنا';
    return BlocProvider(
      create: (_) =>
          di.getIt<ProductBloc>()..add(ProductEvent.getProductEvent(product)),
      child: BlocConsumer<ProductBloc, ProductState>(
          listener: (context, state) {
            state.maybeWhen(
                orElse: () {},
                errorGetProductState: (message) {
                  SnackBarMessage().snackBarMessageError(context, message);
                },
              successReceiveProductState: (){
                SnackBarMessage().snackBarMessageSuccess(context, message);
                 Navigator.pushNamedAndRemoveUntil(context, '/homePage', (route) => false);

              },
              errorReceiveProductState: (message){
                  SnackBarMessage().snackBarMessageError(context, message);
              }
            );
          },
          builder: (context, state) => state.maybeWhen(
              orElse: () => const Center(child: Text('No Data')),
              successGetProductState: (productModel) =>
                  _buildProduct(productModel, context,bottom,store),
              loading: () => const LoadingWidget())),
    );
  }

  Widget _buildProduct(ProductModel productModel, BuildContext context,String bottom,String store) {
    return Column(
      children: [
        if(idStore!=productModel.store.id)...[
          Card(
            color: primaryColor1,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(borderRadius),
            ),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Text(store,),
                  SizedBox(width: 5,),
                  Icon(Icons.error_outline,color: Colors.red,)
                ],
              ),
            ),
          ),
          SizedBox(height: 10,),
        ],
        Card(
          margin: const EdgeInsets.all(5),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(borderRadius),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Text(
                        productModel.user.name,
                        style: Theme.of(context).textTheme.bodyMedium!.copyWith(fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(
                        width: 10,
                      ),
                      CircleAvatar(
                        radius: 25,
                        backgroundImage: NetworkImage(productModel.user.photo),
                      ),
                    ],
                  ),
                  const Divider(),
                  Text(
                    productModel.title,
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                  const SizedBox(height: 10,),
                  Text(
                    productModel.content,
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  ListView.separated(
                      shrinkWrap: true,
                      physics: const BouncingScrollPhysics(),
                      itemBuilder: (context, index) => Image(

                          image: NetworkImage(productModel.photos[index])),
                      separatorBuilder: (context, index) => const SizedBox(
                            height: 10,
                          ),
                      itemCount: productModel.photos.length),
                  const SizedBox(
                    height: 16,
                  ),
                  ElevatedButtonWidget(
                      onPressed: () {
                        BlocProvider.of<ProductBloc>(context)
                            .add(ProductEvent.receiveProductEvent(payment,isDeliver?'0':'1'));
                      },
                      row: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            bottom,
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium!
                                .copyWith(color: Colors.white),
                          )
                        ],
                      )),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }
}
