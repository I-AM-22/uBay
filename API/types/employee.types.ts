import { Document, Model, ObjectId, PopulatedDoc } from 'mongoose';
import { IStore } from './store.types';

export interface IEmployee {
    name: String;
    photo: string;
    email: string;
    store: PopulatedDoc<Document<ObjectId> & IStore>;
    address: string;
    password: string;
}
export interface EmployeeDoc extends IEmployee, Document {
    createdAt: Date;
    updatedAt: Date;
    passwordChangedAt: Date | undefined;
    passwordResetToken: string | undefined;
    passwordResetExpires: Date | undefined;
    active: boolean;
    includeInActive: boolean;
    correctPassword(password: string): boolean;
    isPasswordChanged(JWTTimestamp: number | undefined): boolean;
    createPasswordResetToken(): string;
}
export type EmployeeModel = Model<EmployeeDoc, object, any>;

// export interface EmployeeModel extends Model<EmployeeDoc, object, any> {
//     filter(path: string, user: Express.User): any;
// }
