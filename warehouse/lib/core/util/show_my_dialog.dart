import 'package:flutter/material.dart';

class ShowMyDialog {
  static void showMyDialog(
          {required context,
          required String title,
          required String content,
          required Widget widget}) =>
      showDialog<String>(
          context: context,
          builder: (BuildContext context) => AlertDialog(
                  title: Text(title,textDirection: TextDirection.rtl,style: Theme.of(context).textTheme.bodyMedium!.copyWith(fontSize: 18),),
                  elevation: 10,
                  content: Text(content,textDirection: TextDirection.rtl,style: Theme.of(context).textTheme.bodyMedium,),
                  actions: [
                    widget
                  ]));

  static const String edit = 'edit';
  static const String delete = 'delete';
  static const List<String> chose = [edit, delete];
}
