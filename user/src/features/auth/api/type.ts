import { User } from "features/account";

export type AuthenticationResponse = {
  token: string;
  user: User;
};

export type UserLoginBody = {
  email: string;
  password: string;
};
export type UserLogin = AuthenticationResponse;

export type UserSignupBody = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};
export type UserSignup = AuthenticationResponse;

export type UserForgotPasswordBody = {
  email: string;
};

export type UserResetPasswordBody = {
  token: string;
  password: string;
};
export type UserResetPassword = AuthenticationResponse;

export type UserUpdatePasswordBody = { passwordCurrent: string; password: string };
export type UserUpdatePassword = AuthenticationResponse;
