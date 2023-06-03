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
    as _i13;
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart'
    as _i12;
import 'package:warehouse/features/auth/domain/usecases/forgot_password_model.dart'
    as _i15;
import 'package:warehouse/features/auth/domain/usecases/login_usecase.dart'
    as _i18;
import 'package:warehouse/features/auth/domain/usecases/reset_password_usecase.dart'
    as _i19;
import 'package:warehouse/features/auth/domain/usecases/signup_usecase.dart'
    as _i20;
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart'
    as _i24;
import 'package:warehouse/features/user/data/datasources/user_local_datasources.dart'
    as _i8;
import 'package:warehouse/features/user/data/datasources/user_remote_datasource.dart'
    as _i9;
import 'package:warehouse/features/user/data/repositories/user_repository_implement.dart'
    as _i11;
import 'package:warehouse/features/user/domain/repositories/user_repository.dart'
    as _i10;
import 'package:warehouse/features/user/domain/usecases/delete_my_account_usecase.dart'
    as _i14;
import 'package:warehouse/features/user/domain/usecases/get_my_profile_usecase.dart'
    as _i16;
import 'package:warehouse/features/user/domain/usecases/logout_usecase.dart'
    as _i17;
import 'package:warehouse/features/user/domain/usecases/update_my_profile_usecase.dart'
    as _i21;
import 'package:warehouse/features/user/domain/usecases/update_password_usecase.dart'
    as _i22;
import 'package:warehouse/features/user/presentation/bloc/user/user_bloc.dart'
    as _i23;
import 'package:warehouse/injection_container.dart' as _i25;

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
    gh.lazySingleton<_i8.UserLocalDataSource>(
        () => _i8.AuthLocalDataSourceImpl(gh<_i4.SharedPreferences>()));
    gh.factory<_i9.UserRemoteDataSource>(
        () => _i9.UserRemoteDataSourceImplement());
    gh.factory<_i10.UserRepository>(() => _i11.UserRepositoryImplement(
          gh<_i8.UserLocalDataSource>(),
          userRemoteDataSource: gh<_i9.UserRemoteDataSource>(),
          networkInfo: gh<_i7.NetworkInfo>(),
        ));
    gh.factory<_i12.AuthRepository>(() => _i13.AuthRepositoryImplement(
          authRemoteDataSource: gh<_i5.AuthRemoteDataSource>(),
          authLocalDataSource: gh<_i3.AuthLocalDataSource>(),
          networkInfo: gh<_i7.NetworkInfo>(),
        ));
    gh.lazySingleton<_i14.DeleteMyAccountUseCase>(
        () => _i14.DeleteMyAccountUseCase(gh<_i10.UserRepository>()));
    gh.factory<_i15.ForgotPasswordUseCase>(
        () => _i15.ForgotPasswordUseCase(gh<_i12.AuthRepository>()));
    gh.factory<_i16.GetMyProfileUseCase>(
        () => _i16.GetMyProfileUseCase(gh<_i10.UserRepository>()));
    gh.lazySingleton<_i17.LogOutUseCase>(
        () => _i17.LogOutUseCase(gh<_i10.UserRepository>()));
    gh.factory<_i18.LoginUseCase>(
        () => _i18.LoginUseCase(gh<_i12.AuthRepository>()));
    gh.factory<_i19.ResetPasswordUseCase>(
        () => _i19.ResetPasswordUseCase(gh<_i12.AuthRepository>()));
    gh.factory<_i20.SignupUseCase>(
        () => _i20.SignupUseCase(gh<_i12.AuthRepository>()));
    gh.factory<_i21.UpdateMyProfileUseCase>(
        () => _i21.UpdateMyProfileUseCase(gh<_i10.UserRepository>()));
    gh.factory<_i22.UpdatePasswordUseCase>(
        () => _i22.UpdatePasswordUseCase(gh<_i10.UserRepository>()));
    gh.factory<_i23.UserBloc>(() => _i23.UserBloc(
          gh<_i22.UpdatePasswordUseCase>(),
          gh<_i21.UpdateMyProfileUseCase>(),
          gh<_i16.GetMyProfileUseCase>(),
          gh<_i14.DeleteMyAccountUseCase>(),
          gh<_i17.LogOutUseCase>(),
        ));
    gh.factory<_i24.AuthBloc>(() => _i24.AuthBloc(
          signupUseCase: gh<_i20.SignupUseCase>(),
          loginUseCase: gh<_i18.LoginUseCase>(),
          forgetPasswordUseCase: gh<_i15.ForgotPasswordUseCase>(),
          resetPasswordUseCase: gh<_i19.ResetPasswordUseCase>(),
        ));
    return this;
  }
}

class _$RegisterModule extends _i25.RegisterModule {}
