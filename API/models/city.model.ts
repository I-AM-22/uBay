import { Query, Schema, Types, model } from 'mongoose';
import { CityDoc, CityModel } from '../types/city.types';
import Store from './store.model';
import User from './user.model';
const citySchema = new Schema<CityDoc, CityModel, any>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

citySchema.post<any>('findOneAndUpdate', async function (next) {
  const { deleted }: any = this.getUpdate()['$set'];

  if (deleted) {
    const doc = await this.model.findOne({ _id: this.getQuery()._id });
    await User.updateMany(
      { favoriteCities: { $elemMatch: { $eq: doc.id } } },
      { $set: { $pull: { favoriteCities: doc.id } } }
    );
    await Store.updateMany({ city: doc.id }, { $set: { deleted: true } });
  }
});
const City = model<CityDoc>('City', citySchema);

export default City;
