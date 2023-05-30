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
    as _i6;
import 'package:shared_preferences/shared_preferences.dart' as _i4;
import 'package:warehouse/core/network_info.dart' as _i7;
import 'package:warehouse/features/auth/data/datasources/auth_local_datasources.dart'
    as _i3;
import 'package:warehouse/features/auth/data/datasources/auth_remote_datasource.dart'
    as _i5;
import 'package:warehouse/features/auth/data/repositories/auth_repository_impl.dart'
    as _i9;
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart'
    as _i8;
import 'package:warehouse/features/auth/domain/usecases/forget_password_model.dart'
    as _i10;
import 'package:warehouse/features/auth/domain/usecases/login_usecase.dart'
    as _i11;
import 'package:warehouse/features/auth/domain/usecases/reset_password_usecase.dart'
    as _i12;
import 'package:warehouse/features/auth/domain/usecases/signup_usecase.dart'
    as _i13;
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart'
    as _i14;
import 'package:warehouse/injection_container.dart' as _i15;

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
    final registerModule = _$RegisterModule();
    gh.lazySingleton<_i3.AuthLocalDataSource>(
        () => _i3.AuthLocalDataSourceImpl(gh<_i4.SharedPreferences>()));
    gh.factory<_i5.AuthRemoteDataSource>(
        () => _i5.AuthRemoteDataSourceImplement());
    gh.factory<_i6.InternetConnectionChecker>(() => registerModule.internet);
    gh.factory<_i7.NetworkInfo>(
        () => _i7.NetworkInfoImplement(gh<_i6.InternetConnectionChecker>()));
    gh.factory<_i8.AuthRepository>(() => _i9.AuthRepositoryImplement(
          authRemoteDataSource: gh<_i5.AuthRemoteDataSource>(),
          authLocalDataSource: gh<_i3.AuthLocalDataSource>(),
          networkInfo: gh<_i7.NetworkInfo>(),
        ));
    gh.factory<_i10.ForgetPasswordUseCase>(
        () => _i10.ForgetPasswordUseCase(gh<_i8.AuthRepository>()));
    gh.factory<_i11.LoginUseCase>(
        () => _i11.LoginUseCase(gh<_i8.AuthRepository>()));
    gh.factory<_i12.ResetPasswordUseCase>(
        () => _i12.ResetPasswordUseCase(gh<_i8.AuthRepository>()));
    gh.factory<_i13.SignupUseCase>(
        () => _i13.SignupUseCase(gh<_i8.AuthRepository>()));
    gh.factory<_i14.AuthBloc>(() => _i14.AuthBloc(
          signupUseCase: gh<_i13.SignupUseCase>(),
          loginUseCase: gh<_i11.LoginUseCase>(),
          forgetPasswordUseCase: gh<_i10.ForgetPasswordUseCase>(),
          resetPasswordUseCase: gh<_i12.ResetPasswordUseCase>(),
        ));
    return this;
  }
}

class _$RegisterModule extends _i15.RegisterModule {}
