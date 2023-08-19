class ChoseDateTime {
  String chose(DateTime createdAt) {
    final date=DateTime.now().difference(createdAt);
    if (date.inMinutes < 60) {
      return ' منذ ${date.inMinutes} دقيقة ';
    } else if (date.inHours < 24) {
      return '  منذ ${date.inHours} ساعة ';
    } else if (date.inDays < 7) {
      return ' منذ ${date.inDays} يوم ';
    } else {
      return '${createdAt.year}-'
          '${createdAt.month}-'
          '${createdAt.day}';
    }
  }
}
