class AllProductModel {
  Product product;
  Employee employee;

  AllProductModel({
    required this.product,
    required this.employee,
  });

  factory AllProductModel.fromJson(Map<String, dynamic> json) => AllProductModel(
    product: Product.fromJson(json["Product"]),
    employee: Employee.fromJson(json["Employee"]),
  );

  Map<String, dynamic> toJson() => {
    "Product": product.toJson(),
    "Employee": employee.toJson(),
  };
}

class Employee {
  String id;
  String name;
  String email;

  Employee({
    required this.id,
    required this.name,
    required this.email,
  });

  factory Employee.fromJson(Map<String, dynamic> json) => Employee(
    id: json["_id"],
    name: json["name"],
    email: json["email"],
  );

  Map<String, dynamic> toJson() => {
    "_id": id,
    "name": name,
    "email": email,
  };
}

class Product {
  String id;
  String title;
  String content;
  List<String> photos;
  int price;
  DateTime createdAt;

  Product({
    required this.id,
    required this.title,
    required this.content,
    required this.photos,
    required this.price,
    required this.createdAt,
  });

  factory Product.fromJson(Map<String, dynamic> json) => Product(
    id: json["_id"],
    title: json["title"],
    content: json["content"],
    photos: List<String>.from(json["photos"].map((x) => x)),
    price: json["price"],
    createdAt: DateTime.parse(json["createdAt"]),
  );

  Map<String, dynamic> toJson() => {
    "_id": id,
    "title": title,
    "content": content,
    "photos": List<dynamic>.from(photos.map((x) => x)),
    "price": price,
    "createdAt": createdAt.toIso8601String(),
  };
}