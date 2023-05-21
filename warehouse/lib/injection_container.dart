import 'package:get_it/get_it.dart';
import 'package:internet_connection_checker/internet_connection_checker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'core/network_info.dart';
import 'features/auth/data/datasources/auth_local_datasources.dart';
import 'features/auth/data/datasources/auth_remote_datasource.dart';
import 'features/auth/data/repositories/auth_repository_impl.dart';
import 'features/auth/domain/repositories/auth_repository.dart';
import 'features/auth/domain/usecases/login_usecase.dart';
import 'features/auth/domain/usecases/pick_profile_image_usecase.dart';
import 'features/auth/domain/usecases/signup_usecase.dart';
import 'features/auth/presentation/bloc/auth/auth_bloc.dart';

final sl = GetIt.instance;

Future<void> init() async {
  //! features

  //*Bloc

  sl.registerFactory(() => AuthBloc(
      signupUseCase: sl(), loginUseCase: sl(), pickProfileImageUseCase: sl()));

  //* UseCases

  // Auth UseCase
  sl.registerLazySingleton(() => LoginUseCase(sl()));
  sl.registerLazySingleton(() => SignupUseCase(sl()));
  sl.registerLazySingleton(() => PickProfileImageUseCase(sl()));

  //Posts UseCase

  //*Repositories

  // Auth Repository
  sl.registerLazySingleton<AuthRepository>(() => AuthRepositoryImpl(
      authRemoteDataSource: sl(),
      authLocalDataSource: sl(),
      networkInfo: sl()));

  //Posts Repository

  //*Datasources

  //Auth DataSource
  sl.registerLazySingleton<AuthRemoteDataSource>(
      () => AuthRemoteDataSourceImpl());
  sl.registerLazySingleton<AuthLocalDataSource>(
      () => AuthLocalDataSourceImpl(sl()));

  //PostsDataSource

  //*core

  sl.registerLazySingleton<NetworkInfo>(() => NetworkInfoImpl(sl()));

  //*External

  final sharedPreferences = await SharedPreferences.getInstance();

  sl.registerLazySingleton(() => sharedPreferences);
  sl.registerLazySingleton(() => InternetConnectionChecker());
}
