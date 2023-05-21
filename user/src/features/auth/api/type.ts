export type UserLoginBody = {
  email: string;
  password: string;
};
export interface UserLogin {
  status: string;
  token: string;
  data: {
    user: {
      _id: string;
      name: string;
      email: string;
      photo: string;
      role: string;
      createdAt: Date;
      updatedAt: Date;
      id: string;
    };
  };
}

export type UserSignupBody = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface UserSignup {
  status: string;
  token: string;
  data: {
    user: {
      _id: string;
      name: string;
      email: string;
      photo: string;
      role: string;
      createdAt: Date;
      updatedAt: Date;
      id: string;
    };
  };
}
