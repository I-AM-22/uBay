import { Date, Document, Model, ObjectId, PopulatedDoc, Schema } from 'mongoose';

import { IPayment } from './payment.types';
import { IEmployee } from './employee.types';

export interface IDelivery {
  payment: PopulatedDoc<Document<ObjectId>> & IPayment;
  employee: PopulatedDoc<Document<ObjectId>> & IEmployee;
  user: number;
  customer_status: boolean;
  customer_receipt:Date;
}

export type DeliveryDoc = IDelivery & Document;
export type DeliveryModel = Model<DeliveryDoc, object, any>;
