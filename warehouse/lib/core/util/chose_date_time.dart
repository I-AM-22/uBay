class ChoseDateTime {
  String chose(DateTime createdAt) {
    final date=DateTime.now().difference(createdAt);
    if (date.inMinutes < 60) {
      return '${date.inMinutes} minutes ago';
    } else if (date.inHours < 24) {
      return '${date.inHours} hours ago';
    } else if (date.inDays < 7) {
      return '${date.inDays} days ago';
    } else {
      return '${createdAt.year}-'
          '${createdAt.month}-'
          '${createdAt.day}';
    }
  }
}
