import 'package:dio/dio.dart';
import 'package:warehouse/core/strings/end_points.dart';

class DioHelper {
  static Dio dio = Dio();

  static init() {
    dio = Dio(BaseOptions(baseUrl: BASE_URL, receiveDataWhenStatusError: true,headers: {'Content-Type': 'application/json',}));
  }

  static Future<Response> postData(
      {required String url, Map<String, dynamic>? data, String? token}) async {
    return await dio.post(
      url,
      data: data,
    );
  }
}
