// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: unnecessary_lambdas
// ignore_for_file: lines_longer_than_80_chars
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:internet_connection_checker/internet_connection_checker.dart'
    as _i13;
import 'package:shared_preferences/shared_preferences.dart' as _i12;
import 'package:warehouse/core/network_info.dart' as _i11;
import 'package:warehouse/features/auth/data/datasources/auth_local_datasources.dart'
    as _i3;
import 'package:warehouse/features/auth/data/datasources/auth_remote_datasource.dart'
    as _i4;
import 'package:warehouse/features/auth/data/repositories/auth_repository_impl.dart'
    as _i5;
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart'
    as _i6;
import 'package:warehouse/features/auth/domain/usecases/login_usecase.dart'
    as _i7;
import 'package:warehouse/features/auth/domain/usecases/signup_usecase.dart'
    as _i8;
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart'
    as _i9;

extension GetItInjectableX on _i1.GetIt {
  // initializes the registration of main-scope dependencies inside of GetIt
  _i1.GetIt init({
    String? environment,
    _i2.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i2.GetItHelper(
      this,
      environment,
      environmentFilter,
    );
    gh.factory(() => _i9.AuthBloc(
        signupUseCase: gh<_i8.SignupUseCase>(),
        loginUseCase: gh<_i7.LoginUseCase>()));
    gh.factory(() => _i7.LoginUseCase(gh<_i6.AuthRepository>()));
    gh.factory<_i6.AuthRepository>(() => _i5.AuthRepositoryImplement(
        authRemoteDataSource: gh<_i4.AuthRemoteDataSource>(),
        authLocalDataSource: gh<_i3.AuthLocalDataSource>(),
        networkInfo: gh<_i11.NetworkInfo>()));
    gh.factory(() => _i8.SignupUseCase(gh<_i6.AuthRepository>()));
    gh.lazySingleton<_i4.AuthRemoteDataSource>(
        () => _i4.AuthRemoteDataSourceImplement());
    gh.lazySingleton<_i3.AuthLocalDataSource>(
        () => _i3.AuthLocalDataSourceImpl(gh<_i12.SharedPreferences>()));
    gh.factory<_i11.NetworkInfo>(
        () => _i11.NetworkInfoImplement(gh<_i13.InternetConnectionChecker>()));
    gh.factory(() => _i13.InternetConnectionChecker());

    return this;
  }
}
