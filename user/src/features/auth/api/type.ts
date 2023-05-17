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
