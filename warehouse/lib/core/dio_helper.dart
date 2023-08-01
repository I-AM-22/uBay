import 'package:dio/dio.dart';
import 'package:warehouse/core/strings/end_points.dart';

class DioHelper {
  static Dio dio = Dio();

  static init() {
    dio = Dio(BaseOptions(
        baseUrl: BASE_URL,
        receiveDataWhenStatusError: true,
        headers: {
          'Content-Type': 'application/json',
          'accept': ' application/json'
        }));
  }

  static Future<Response> postData(
      {required String url, Map<String, dynamic>? data, String? token}) async {
    return await dio.post(
      url,
      data: data,
        options: Options(headers: {
          'Authorization': 'Bearer $token',
        })
    );
  }

  static Future<Response> patchData(
      {required String url, Map<String, dynamic>? data, String? token}) async {
    return await dio.patch(url,
        data: data,
        options: Options(headers: {
          'Authorization': 'Bearer $token',
        }));
  }

  static Future<Response> getData(
      {required String url, Map<String, dynamic>? query, String? token}) async {
    return await dio.get(url,
        queryParameters: query,
        options: Options(headers: {
          'Authorization': 'Bearer $token',
        }));
  }

  static Future<Response> deleteData(
      {required String url, Map<String, dynamic>? query, String? token}) async {
    return await dio.delete(url,
        queryParameters: query,
        options: Options(headers: {
          'Authorization': 'Bearer $token',
        }));
  }
}
