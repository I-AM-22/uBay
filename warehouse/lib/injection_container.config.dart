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
    as _i12;
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart'
    as _i11;
import 'package:warehouse/features/auth/domain/usecases/forget_password_model.dart'
    as _i13;
import 'package:warehouse/features/auth/domain/usecases/login_usecase.dart'
    as _i14;
import 'package:warehouse/features/auth/domain/usecases/reset_password_usecase.dart'
    as _i15;
import 'package:warehouse/features/auth/domain/usecases/signup_usecase.dart'
    as _i16;
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart'
    as _i19;
import 'package:warehouse/features/user/data/datasources/user_remote_datasource.dart'
    as _i8;
import 'package:warehouse/features/user/data/repositories/user_repository_implement.dart'
    as _i10;
import 'package:warehouse/features/user/domain/repositories/user_repository.dart'
    as _i9;
import 'package:warehouse/features/user/domain/usecases/update_password_usecase.dart'
    as _i17;
import 'package:warehouse/features/user/presentation/bloc/user/user_bloc.dart'
    as _i18;
import 'package:warehouse/injection_container.dart' as _i20;

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
    gh.factory<_i8.UserRemoteDataSource>(
        () => _i8.UserRemoteDataSourceImplement());
    gh.factory<_i9.UserRepository>(() => _i10.UserRepositoryImplement(
          userRemoteDataSource: gh<_i8.UserRemoteDataSource>(),
          networkInfo: gh<_i7.NetworkInfo>(),
        ));
    gh.factory<_i11.AuthRepository>(() => _i12.AuthRepositoryImplement(
          authRemoteDataSource: gh<_i5.AuthRemoteDataSource>(),
          authLocalDataSource: gh<_i3.AuthLocalDataSource>(),
          networkInfo: gh<_i7.NetworkInfo>(),
        ));
    gh.factory<_i13.ForgetPasswordUseCase>(
        () => _i13.ForgetPasswordUseCase(gh<_i11.AuthRepository>()));
    gh.factory<_i14.LoginUseCase>(
        () => _i14.LoginUseCase(gh<_i11.AuthRepository>()));
    gh.factory<_i15.ResetPasswordUseCase>(
        () => _i15.ResetPasswordUseCase(gh<_i11.AuthRepository>()));
    gh.factory<_i16.SignupUseCase>(
        () => _i16.SignupUseCase(gh<_i11.AuthRepository>()));
    gh.factory<_i17.UpdatePasswordUseCase>(
        () => _i17.UpdatePasswordUseCase(gh<_i9.UserRepository>()));
    gh.factory<_i18.UserBloc>(
        () => _i18.UserBloc(gh<_i17.UpdatePasswordUseCase>()));
    gh.factory<_i19.AuthBloc>(() => _i19.AuthBloc(
          signupUseCase: gh<_i16.SignupUseCase>(),
          loginUseCase: gh<_i14.LoginUseCase>(),
          forgetPasswordUseCase: gh<_i13.ForgetPasswordUseCase>(),
          resetPasswordUseCase: gh<_i15.ResetPasswordUseCase>(),
        ));
    return this;
  }
}

class _$RegisterModule extends _i20.RegisterModule {}
