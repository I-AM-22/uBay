import { Date, Document, Model, ObjectId, PopulatedDoc, Schema } from 'mongoose';

import { IPayment } from './payment.types';
import { IEmployee } from './employee.types';
import { EnumDeclaration } from 'typescript';
import { IStore } from './store.types';

export interface IDelivery {
  payment: PopulatedDoc<Document<ObjectId>> & IPayment;
  employee_seller: PopulatedDoc<Document<ObjectId>> & IEmployee;
  employee_customer: PopulatedDoc<Document<ObjectId>> & IEmployee;
  delivery_status: string;
  customer_date: Date;
  seller_date: Date;
  store: PopulatedDoc<Document<ObjectId>> & IStore;
}

export type DeliveryDoc = IDelivery & Document;
export type DeliveryModel = Model<DeliveryDoc, object, any>;
