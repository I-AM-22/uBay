import { Query, Schema, Types, model } from 'mongoose';
import { CityDoc, CityModel } from '../types/city.types';
const citySchema = new Schema<CityDoc, CityModel, any>(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true, versionKey: false },
        toObject: { virtuals: true, versionKey: false },
    }
);

const City = model<CityDoc>('City', citySchema);

export default City;
