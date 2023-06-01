import 'package:flutter/material.dart';

class SettingPageWidget extends StatelessWidget {
  const SettingPageWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 20),
      child: Column(
        children: [
          Card(
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                const Text(
                  'الحساب',
                  style: TextStyle(
                      fontSize: 20,
                      fontFamily: 'Mont',
                      fontWeight: FontWeight.bold),
                ),
                const SizedBox(
                  height: 10,
                ),
                MaterialButton(
                  onPressed: () {},
                  child: const Row(
                    textDirection: TextDirection.rtl,
                    children: [
                      Expanded(
                        child: Text(
                          maxLines: 2,
                          textDirection: TextDirection.rtl,
                          overflow: TextOverflow.ellipsis,
                          'الملف الشخصي',
                          style:
                          TextStyle(fontFamily: 'Mont', color: Colors.black),
                        ),
                      ),
                      Icon(Icons.arrow_back)
                    ],
                  ),
                ),
                const Divider(),
                MaterialButton(
                  onPressed: () {},
                  child: const Row(
                    textDirection: TextDirection.rtl,
                    children: [
                      Expanded(
                        child: Text(
                          maxLines: 2,
                          textDirection: TextDirection.rtl,
                          overflow: TextOverflow.ellipsis,
                          'تحديث الملف الشخصي',
                          style:
                          TextStyle(fontFamily: 'Mont', color: Colors.black),
                        ),
                      ),
                      Icon(Icons.arrow_back)
                    ],
                  ),
                ),
                const Divider(),
                MaterialButton(
                  onPressed: () {},
                  child: const Row(
                    textDirection: TextDirection.rtl,
                    children: [
                      Expanded(
                        child: Text(
                          maxLines: 2,
                          textDirection: TextDirection.rtl,
                          overflow: TextOverflow.ellipsis,
                          'حذف الحساب',
                          style:
                          TextStyle(fontFamily: 'Mont', color: Colors.black),
                        ),
                      ),
                      Icon(Icons.arrow_back)
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          Card(
            color: Colors.white,
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  const Text(
                    'الخصوصية والأمان',
                    style: TextStyle(
                        fontSize: 20,
                        fontFamily: 'Mont',
                        fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  MaterialButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/UpdateMyPasswordPage');
                    },
                    child: const Row(
                      textDirection: TextDirection.rtl,
                      children: [
                        Expanded(
                          child: Text(
                            maxLines: 2,
                            textDirection: TextDirection.rtl,
                            overflow: TextOverflow.ellipsis,
                            'تغيير كلمة المرور',
                            style: TextStyle(
                                fontFamily: 'Mont', color: Colors.black),
                          ),
                        ),

                        Icon(Icons.arrow_back)
                      ],
                    ),
                  ),
                  const Divider(),
                  MaterialButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/ForgetPasswordPage');
                    },
                    child: const Row(
                      textDirection: TextDirection.rtl,
                      children: [
                        Expanded(
                          child: Text(
                            maxLines: 2,
                            textDirection: TextDirection.rtl,
                            overflow: TextOverflow.ellipsis,
                            'طلب اعادة تعيين كلمة المرور',
                            style: TextStyle(
                                fontFamily: 'Mont', color: Colors.black),
                          ),
                        ),
                        Icon(Icons.arrow_back)
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
