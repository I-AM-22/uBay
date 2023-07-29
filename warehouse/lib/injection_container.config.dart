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
    as _i8;
import 'package:shared_preferences/shared_preferences.dart' as _i4;
import 'package:warehouse/core/network_info.dart' as _i9;
import 'package:warehouse/features/auth/data/datasources/auth_local_datasources.dart'
    as _i3;
import 'package:warehouse/features/auth/data/datasources/auth_remote_datasource.dart'
    as _i5;
import 'package:warehouse/features/auth/data/repositories/auth_repository_impl.dart'
    as _i16;
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart'
    as _i15;
import 'package:warehouse/features/auth/domain/usecases/login_usecase.dart'
    as _i22;
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart'
    as _i24;
import 'package:warehouse/features/employee/data/datasources/employee_local_datasources.dart'
    as _i6;
import 'package:warehouse/features/employee/data/datasources/employee_remote_datasource.dart'
    as _i7;
import 'package:warehouse/features/employee/data/repositorie/employee_repository_implement.dart'
    as _i18;
import 'package:warehouse/features/employee/domain/repositories/employee_repository.dart'
    as _i17;
import 'package:warehouse/features/employee/domain/usecase/get_my_profile_usecase.dart'
    as _i19;
import 'package:warehouse/features/employee/domain/usecase/logout_usecase.dart'
    as _i21;
import 'package:warehouse/features/employee/presentation/bloc/employee/employee_bloc.dart'
    as _i25;
import 'package:warehouse/features/product/data/datasource/product_local_datasource.dart'
    as _i10;
import 'package:warehouse/features/product/data/datasource/product_remote_datasource.dart'
    as _i11;
import 'package:warehouse/features/product/data/repository/product_repository_implement.dart'
    as _i13;
import 'package:warehouse/features/product/domain/repository/product_repository.dart'
    as _i12;
import 'package:warehouse/features/product/domain/usecase/get_product_usecase.dart'
    as _i20;
import 'package:warehouse/features/product/domain/usecase/receive_product_usecase.dart'
    as _i14;
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart'
    as _i23;
import 'package:warehouse/injection_container.dart' as _i26;

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
    gh.lazySingleton<_i6.EmployeeLocalDataSource>(() =>
        _i6.EmployeeLocalDataSourceImplement(gh<_i4.SharedPreferences>()));
    gh.factory<_i7.EmployeeRemoteDataSource>(
        () => _i7.EmployeeRemoteDataSourceImplement());
    gh.factory<_i8.InternetConnectionChecker>(() => registerModule.internet);
    gh.factory<_i9.NetworkInfo>(
        () => _i9.NetworkInfoImplement(gh<_i8.InternetConnectionChecker>()));
    gh.factory<_i10.ProductLocalDataSource>(
        () => _i10.ProductLocalDataSourceImplement());
    gh.factory<_i11.ProductRemoteDataSource>(
        () => _i11.ProductRemoteDataSourceImplement());
    gh.factory<_i12.ProductRepository>(() => _i13.ProductRepositoryImplement(
          gh<_i9.NetworkInfo>(),
          gh<_i11.ProductRemoteDataSource>(),
          gh<_i10.ProductLocalDataSource>(),
        ));
    gh.factory<_i14.ReceiveProductUseCase>(
        () => _i14.ReceiveProductUseCase(gh<_i12.ProductRepository>()));
    gh.factory<_i15.AuthRepository>(() => _i16.AuthRepositoryImplement(
          authRemoteDataSource: gh<_i5.AuthRemoteDataSource>(),
          authLocalDataSource: gh<_i3.AuthLocalDataSource>(),
          networkInfo: gh<_i9.NetworkInfo>(),
        ));
    gh.factory<_i17.EmployeeRepository>(() => _i18.EmployeeRepositoryImplement(
          gh<_i7.EmployeeRemoteDataSource>(),
          employeeLocalDataSource: gh<_i6.EmployeeLocalDataSource>(),
          networkInfo: gh<_i9.NetworkInfo>(),
        ));
    gh.factory<_i19.GetMyProfileUseCase>(
        () => _i19.GetMyProfileUseCase(gh<_i17.EmployeeRepository>()));
    gh.factory<_i20.GetProductUseCase>(
        () => _i20.GetProductUseCase(gh<_i12.ProductRepository>()));
    gh.lazySingleton<_i21.LogOutUseCase>(
        () => _i21.LogOutUseCase(gh<_i17.EmployeeRepository>()));
    gh.factory<_i22.LoginUseCase>(
        () => _i22.LoginUseCase(gh<_i15.AuthRepository>()));
    gh.factory<_i23.ProductBloc>(() => _i23.ProductBloc(
          gh<_i20.GetProductUseCase>(),
          gh<_i14.ReceiveProductUseCase>(),
        ));
    gh.factory<_i24.AuthBloc>(
        () => _i24.AuthBloc(loginUseCase: gh<_i22.LoginUseCase>()));
    gh.factory<_i25.EmployeeBloc>(() => _i25.EmployeeBloc(
          gh<_i19.GetMyProfileUseCase>(),
          gh<_i21.LogOutUseCase>(),
        ));
    return this;
  }
}

class _$RegisterModule extends _i26.RegisterModule {}
