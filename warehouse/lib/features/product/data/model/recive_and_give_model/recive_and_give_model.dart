

class ReceiveAndGiveModel {
  List<Ive> give;
  List<Ive> recive;

  ReceiveAndGiveModel({
    required this.give,
    required this.recive,
  });

  factory ReceiveAndGiveModel.fromJson(Map<String, dynamic> json) => ReceiveAndGiveModel(
    give: List<Ive>.from(json["give"].map((x) => Ive.fromJson(x))),
    recive: List<Ive>.from(json["recive"].map((x) => Ive.fromJson(x))),
  );

  Map<String, dynamic> toJson() => {
    "give": List<dynamic>.from(give.map((x) => x.toJson())),
    "recive": List<dynamic>.from(recive.map((x) => x.toJson())),
  };
}

class Ive {
  Product product;
  DateTime date;

  Ive({
    required this.product,
    required this.date,
  });

  factory Ive.fromJson(Map<String, dynamic> json) => Ive(
    product: Product.fromJson(json["product"]),
    date: DateTime.parse(json["date"]),
  );

  Map<String, dynamic> toJson() => {
    "product": product.toJson(),
    "date": date.toIso8601String(),
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
