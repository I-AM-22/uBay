class ChoseDateTime {
  String chose(DateTime createdAt) {
    if (DateTime.now().difference(createdAt).inMinutes < 60) {
      return 'تم الانضمام منذ ${DateTime.now().difference(createdAt).inMinutes} دقائق ';
    } else if (DateTime.now().difference(createdAt).inHours < 24) {
      return 'تم الانضمام منذ ${DateTime.now().difference(createdAt).inHours} ساعات ';
    } else if (DateTime.now().difference(createdAt).inDays < 7) {
      return 'تم الانضمام منذ ${DateTime.now().difference(createdAt).inDays} ايام ';
    } else {
      return 'تم الانضمام بتاريخ '
        '${createdAt.year}-'
          '${createdAt.month}-'
          '${createdAt.day}';
    }
  }
}
