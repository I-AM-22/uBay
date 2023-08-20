class ReceiveAndGiveModel {
  List<Receive> receive;
  List<Give> give;

  ReceiveAndGiveModel({
    required this.receive,
    required this.give,
  });

  factory ReceiveAndGiveModel.fromJson(Map<String, dynamic> json) => ReceiveAndGiveModel(
    receive: List<Receive>.from(json["receive"].map((x) => Receive.fromJson(x))),
    give: List<Give>.from(json["give"].map((x) => Give.fromJson(x))),
  );

  Map<String, dynamic> toJson() => {
    "receive": List<dynamic>.from(receive.map((x) => x.toJson())),
    "give": List<dynamic>.from(give.map((x) => x.toJson())),
  };
}

class Give {
  String id;
  Customer employeeCustomer;
  Product product;
  Customer customer;
  DateTime giveDate;

  Give({
    required this.id,
    required this.employeeCustomer,
    required this.product,
    required this.customer,
    required this.giveDate,
  });

  factory Give.fromJson(Map<String, dynamic> json) => Give(
    id: json["_id"],
    employeeCustomer: Customer.fromJson(json["employee_customer"]),
    product: Product.fromJson(json["product"]),
    customer: Customer.fromJson(json["customer"]),
    giveDate: DateTime.parse(json["give_date"]),
  );

  Map<String, dynamic> toJson() => {
    "_id": id,
    "employee_customer": employeeCustomer.toJson(),
    "product": product.toJson(),
    "customer": customer.toJson(),
    "give_date": giveDate.toIso8601String(),
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
  Customer user;
  List<String> photos;
  int price;

  Product({
    required this.id,
    required this.title,
    required this.content,
    required this.user,
    required this.photos,
    required this.price,
  });

  factory Product.fromJson(Map<String, dynamic> json) => Product(
    id: json["_id"],
    title: json["title"],
    content: json["content"],
    user: Customer.fromJson(json["user"]),
    photos: List<String>.from(json["photos"].map((x) => x)),
    price: json["price"],
  );

  Map<String, dynamic> toJson() => {
    "_id": id,
    "title": title,
    "content": content,
    "user": user.toJson(),
    "photos": List<dynamic>.from(photos.map((x) => x)),
    "price": price,
  };
}

class Receive {
  String id;
  Customer employeeSeller;
  Product product;
  Customer customer;
  DateTime receiveDate;

  Receive({
    required this.id,
    required this.employeeSeller,
    required this.product,
    required this.customer,
    required this.receiveDate,
  });

  factory Receive.fromJson(Map<String, dynamic> json) => Receive(
    id: json["_id"],
    employeeSeller: Customer.fromJson(json["employee_seller"]),
    product: Product.fromJson(json["product"]),
    customer: Customer.fromJson(json["customer"]),
    receiveDate: DateTime.parse(json["receive_date"]),
  );

  Map<String, dynamic> toJson() => {
    "_id": id,
    "employee_seller": employeeSeller.toJson(),
    "product": product.toJson(),
    "customer": customer.toJson(),
    "receive_date": receiveDate.toIso8601String(),
  };
}
