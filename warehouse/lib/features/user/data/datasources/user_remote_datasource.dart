import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:warehouse/core/dio_helper.dart';
import 'package:warehouse/core/errors/exceptions.dart';
import 'package:warehouse/core/strings/end_points.dart';
import 'package:warehouse/core/strings/failure.dart';
import 'package:warehouse/core/strings/id_and_token.dart';
import 'package:warehouse/features/user/data/model/user_model.dart';

import '../../../auth/data/model/user_login/user_login_model.dart';

abstract class UserRemoteDataSource {
  Future<UserLogin> updateMyPassword(String currentPassword, String password);

  Future<UserModel> updateMyProfile(String name, String email, File? photo);

  Future<UserModel> getMyProfile();

  Future<Unit> deleteMyAccount();
}

@Injectable(as: UserRemoteDataSource)
class UserRemoteDataSourceImplement implements UserRemoteDataSource {
  @override
  Future<UserLogin> updateMyPassword(
      String currentPassword, String password) async {
    UserLogin? userLogin;
    await DioHelper.patchData(
            url: UPDATE_MY_PASSWORD,
            token: userDetails!.token,
            data: {'passwordCurrent': currentPassword, 'password': password})
        .then((value) {
      userLogin = UserLogin.fromJson(value.data);
      return Future.value(userLogin);
    }).catchError((error) {
      if (error.response != null) {
        SERVER_FAILURE = _mapResponseError(error.response);
      }
      throw ServerException();
    });
    return Future.value(userLogin);
  }

  @override
  Future<UserModel> updateMyProfile(
      String name, String email, File? photo) async {
    UserModel? userModel;
    await DioHelper.patchData(url: MY_PROFILE, token: userDetails!.token)
        .then((value) {
      userModel = UserModel.fromJson(value.data);
      return Future.value(userModel);
    }).catchError((  error) {
      if (error.response != null) {
        SERVER_FAILURE = _mapResponseError(error.response!);
      }
      throw ServerException();
    });
    return Future.value(userModel);
  }

  @override
  Future<UserModel> getMyProfile() async {
    UserModel? userModel;
    await DioHelper.getData(url: MY_PROFILE, token: userDetails!.token)
        .then((value) {
      userModel = UserModel.fromJson(value.data);
      return Future.value(userModel);
    }).catchError((error) {
      if (error.response != null) {
        SERVER_FAILURE = _mapResponseError(error.response);
      }
      throw ServerException();
    });
    return Future.value(userModel);
  }

  @override
  Future<Unit> deleteMyAccount() async {
    await DioHelper.deleteData(url: MY_PROFILE, token: userDetails!.token)
        .then((value) {
          return Future.value(unit);
    })
        .catchError((error) {
          if(error.ressponse!=null){
            SERVER_FAILURE=_mapResponseError(error.response);
          }
          throw ServerException();
    });
    return Future.value(unit);
  }
}

String _mapResponseError(Response response) {
  switch (response.data['type']) {
    case 'default':
      return response.data['message'];
    case 'form':
      return response.data['errors'][0]['message'];
    default:
      return SERVER_FAILURE;
  }
}
