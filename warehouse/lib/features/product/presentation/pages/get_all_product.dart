import 'package:flutter/material.dart';
import 'package:warehouse/features/product/presentation/pages/get_product_page.dart';

class GetAllProductPage extends StatelessWidget {
  const GetAllProductPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return  Center(
      child: TextButton(
        onPressed: (){
          Navigator.push(context, MaterialPageRoute(builder: (_)=>GetProductPage(payment: 's',product: 'd',)));
        },
        child: Text(
          'منتجات',
          style: Theme.of(context).textTheme.bodyMedium!.copyWith(fontSize: 20),
        ),
      ),
    );
  }
}
