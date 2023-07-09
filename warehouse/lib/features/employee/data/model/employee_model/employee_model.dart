import 'package:freezed_annotation/freezed_annotation.dart';

part 'employee_model.freezed.dart';
part 'employee_model.g.dart';

@freezed
class EmployeeModel with _$EmployeeModel {
  factory EmployeeModel(
      {required String name,
        required String email,
        required String photo,
        required Store store,
        required String address,
        required DateTime createdAt,
        required DateTime updatedAt,
        required String role,
        required String id}) = _EmployeeModel;

  factory EmployeeModel.fromJson(Map<String, dynamic> json) =>
      _$EmployeeModelFromJson(json);
}

@freezed
class Store with _$Store {
  factory Store(
      {required String id,
        required String name,
        required String address,
        required City city}) = _Store;

  factory Store.fromJson(Map<String, dynamic> json) => _$StoreFromJson(json);
}

@freezed
class City with _$City {
  factory City({required String id, required String name}) = _City;

  factory City.fromJson(Map<String, dynamic> json) => _$CityFromJson(json);
}