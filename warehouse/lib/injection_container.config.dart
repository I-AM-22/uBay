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
    as _i7;
import 'package:shared_preferences/shared_preferences.dart' as _i5;
import 'package:warehouse/core/network_info.dart' as _i8;
import 'package:warehouse/features/app/presentation/cubit/app_cubit.dart'
    as _i3;
import 'package:warehouse/features/auth/data/datasources/auth_local_datasources.dart'
    as _i4;
import 'package:warehouse/features/auth/data/datasources/auth_remote_datasource.dart'
    as _i6;
import 'package:warehouse/features/auth/data/repositories/auth_repository_impl.dart'
    as _i16;
import 'package:warehouse/features/auth/domain/repositories/auth_repository.dart'
    as _i15;
import 'package:warehouse/features/auth/domain/usecases/login_usecase.dart'
    as _i20;
import 'package:warehouse/features/auth/presentation/bloc/auth/auth_bloc.dart'
    as _i22;
import 'package:warehouse/features/product/data/datasource/product_local_datasource.dart'
    as _i9;
import 'package:warehouse/features/product/data/datasource/product_remote_datasource.dart'
    as _i10;
import 'package:warehouse/features/product/data/repository/product_repository_implement.dart'
    as _i12;
import 'package:warehouse/features/product/domain/repository/product_repository.dart'
    as _i11;
import 'package:warehouse/features/product/domain/usecase/get_all_product_usecase.dart'
    as _i17;
import 'package:warehouse/features/product/domain/usecase/get_product_usecase.dart'
    as _i18;
import 'package:warehouse/features/product/domain/usecase/get_receive_and_give_products_usecase.dart'
    as _i13;
import 'package:warehouse/features/product/domain/usecase/logout_usecase.dart'
    as _i19;
import 'package:warehouse/features/product/domain/usecase/receive_product_usecase.dart'
    as _i14;
import 'package:warehouse/features/product/presentation/bloc/product_bloc.dart'
    as _i21;
import 'package:warehouse/injection_container.dart' as _i23;

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
    gh.lazySingleton<_i3.AppCubit>(() => _i3.AppCubit());
    gh.lazySingleton<_i4.AuthLocalDataSource>(
        () => _i4.AuthLocalDataSourceImpl(gh<_i5.SharedPreferences>()));
    gh.factory<_i6.AuthRemoteDataSource>(
        () => _i6.AuthRemoteDataSourceImplement());
    gh.factory<_i7.InternetConnectionChecker>(() => registerModule.internet);
    gh.factory<_i8.NetworkInfo>(
        () => _i8.NetworkInfoImplement(gh<_i7.InternetConnectionChecker>()));
    gh.factory<_i9.ProductLocalDataSource>(
        () => _i9.ProductLocalDataSourceImplement(gh<_i5.SharedPreferences>()));
    gh.factory<_i10.ProductRemoteDataSource>(
        () => _i10.ProductRemoteDataSourceImplement());
    gh.factory<_i11.ProductRepository>(() => _i12.ProductRepositoryImplement(
          gh<_i8.NetworkInfo>(),
          gh<_i10.ProductRemoteDataSource>(),
          gh<_i9.ProductLocalDataSource>(),
        ));
    gh.factory<_i13.ReceiveAndGiveProductsUseCase>(
        () => _i13.ReceiveAndGiveProductsUseCase(gh<_i11.ProductRepository>()));
    gh.factory<_i14.ReceiveProductUseCase>(
        () => _i14.ReceiveProductUseCase(gh<_i11.ProductRepository>()));
    gh.factory<_i15.AuthRepository>(() => _i16.AuthRepositoryImplement(
          authRemoteDataSource: gh<_i6.AuthRemoteDataSource>(),
          authLocalDataSource: gh<_i4.AuthLocalDataSource>(),
          networkInfo: gh<_i8.NetworkInfo>(),
        ));
    gh.factory<_i17.GetAllProductUseCase>(
        () => _i17.GetAllProductUseCase(gh<_i11.ProductRepository>()));
    gh.factory<_i18.GetProductUseCase>(
        () => _i18.GetProductUseCase(gh<_i11.ProductRepository>()));
    gh.lazySingleton<_i19.LogOutUseCase>(
        () => _i19.LogOutUseCase(gh<_i11.ProductRepository>()));
    gh.factory<_i20.LoginUseCase>(
        () => _i20.LoginUseCase(gh<_i15.AuthRepository>()));
    gh.factory<_i21.ProductBloc>(() => _i21.ProductBloc(
          gh<_i18.GetProductUseCase>(),
          gh<_i14.ReceiveProductUseCase>(),
          gh<_i19.LogOutUseCase>(),
          gh<_i17.GetAllProductUseCase>(),
          gh<_i13.ReceiveAndGiveProductsUseCase>(),
        ));
    gh.factory<_i22.AuthBloc>(
        () => _i22.AuthBloc(loginUseCase: gh<_i20.LoginUseCase>()));
    return this;
  }
}

class _$RegisterModule extends _i23.RegisterModule {}
