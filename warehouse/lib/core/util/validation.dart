class Validation {
  static String? password;
  static String? validateEmail(String? value) {
    if (RegExp(
            r"^[a-zA-Z0-9.a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
        .hasMatch(value!)) {
      return null;
    }
    return "check your email, must be like \"a+@b+.c+\"";
  }

  static String? validateName(String? value) {
    if (value!.isNotEmpty) {
      return null;
    }
    return "name must be not empty";
  }

  static String? validatePassword(String? value) {
    password = value.toString();
    if (value!.isNotEmpty) {
      if (value.length < 8) {
        return 'Password must be between 8 and 32 characters';
      }
      return null;
    }
    return "password must be not empty";
  }

  static String? validatePasswordConfirm(String? value) {
    if (value.toString() != password) {
      return 'password does not match';
    }
    return null;
  }
}
