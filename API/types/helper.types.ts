import { Model } from 'mongoose';

export interface CustomModel<T> extends Model<T, object, any> {
  findByIdAndCheckAuthorization(
    id: string,
    user: Express.User
  ): Promise<T | null>;
}

export enum STATUS_CODE {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  SUCCESS = 200,
  FORBIDDEN = 403,
  UNAUTHORIZE = 401,
  DELETED = 204,
  CREATED = 201,
  INTERNAL_SERVER_ERROR = 500,
}
