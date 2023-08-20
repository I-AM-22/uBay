class AllProductModel {
  String id;
  Product product;
  Customer customer;

  AllProductModel({
    required this.id,
    required this.product,
    required this.customer,
  });

  factory AllProductModel.fromJson(Map<String, dynamic> json) =>
      AllProductModel(
        id: json["_id"],
        product: Product.fromJson(json["Product"]),
        customer: Customer.fromJson(json["Customer"]),
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "Product": product.toJson(),
        "Customer": customer.toJson(),
      };
}

class Customer {
  String id;
  String name;
  String photo;

  Customer({
    required this.id,
    required this.name,
    required this.photo,
  });

  factory Customer.fromJson(Map<String, dynamic> json) => Customer(
        id: json["_id"],
        name: json["name"],
        photo: json["photo"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "name": name,
        "photo": photo,
      };
}

class Product {
  String id;
  String title;
  String content;
  int price;
  List<String> photos;
  Customer user;
  DateTime createdAt;

  Product({
    required this.id,
    required this.title,
    required this.content,
    required this.price,
    required this.photos,
    required this.user,
    required this.createdAt,
  });

  factory Product.fromJson(Map<String, dynamic> json) => Product(
        id: json["_id"],
        title: json["title"],
        content: json["content"],
        price: json["price"],
        photos: List<String>.from(json["photos"].map((x) => x)),
        user: Customer.fromJson(json["user"]),
        createdAt: DateTime.parse(json["createdAt"]),
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "title": title,
        "content": content,
        "price": price,
        "photos": List<dynamic>.from(photos.map((x) => x)),
        "user": user.toJson(),
        "createdAt": createdAt.toIso8601String(),
      };
}
