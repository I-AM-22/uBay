import { IUser } from 'src/types/user.types'

export declare global {
  namespace Express {
    interface User extends Omit<IUser, 'password'> {
      id: string
      _id: string
    }
  }
}
