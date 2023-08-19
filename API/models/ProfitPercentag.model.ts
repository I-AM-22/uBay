import { Query, Schema, Types, model } from 'mongoose';
import { ProfitPercentageDoc, ProfitPercentageModel } from 'types/ProfitPercentage.types';
const ProfitPercentageSchema = new Schema<ProfitPercentageDoc, ProfitPercentageModel, any>(
    {
        value: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true, versionKey: false },
        toObject: { virtuals: true, versionKey: false },
    }
);

const ProfitPercentage = model<ProfitPercentageDoc>('ProfitPercentage', ProfitPercentageSchema);

export default ProfitPercentage;
