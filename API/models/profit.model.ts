import { Query, Schema, model } from 'mongoose';
import { IProfit, ProfitDoc, ProfitModel } from 'types/profit';
const profitSchema = new Schema<ProfitDoc, ProfitModel, any>(
  {
    product: {
      type: String,
      required: true,
      ref:'Product'
    },
    value: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

const Profit = model<ProfitDoc>('Profit', profitSchema);

export default Profit;
