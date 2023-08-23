import { Schema, model, Query, Types } from 'mongoose';
import { EmployeeDoc, EmployeeModel, IEmployee } from 'types/employee.types';
import bcryptjs from 'bcryptjs';

const employeeSchema = new Schema<EmployeeDoc, EmployeeModel, any>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    photo: {
      type: String,
      default: 'https://i.imgur.com/7rlze8l.jpg',
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    store: {
      type: Types.ObjectId,
      required: true,
      ref: 'Store',
    },
    address: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    includeInActive: {
      type: Boolean,
      default: true,
      select: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);
employeeSchema.virtual('role').get(function () {
  return 'employee';
});
employeeSchema.index({ name: 1, email: 1 });
//Document Middleweare
employeeSchema.pre('save', async function (next) {
  //if the password not changed end the process
  if (!this.isModified('password')) return next();
  //crypt the password
  this.password = await bcryptjs.hash(this.password, 12);
  next();
});

employeeSchema.pre('save', function (next) {
  //if the password not changed or newUser made end the process
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordResetToken = undefined;
  this.passwordResetExpires = undefined;
  this.passwordChangedAt = new Date(Date.now() - 1000);
  next();
});
employeeSchema.methods.correctPassword = async function (
  candidatePassword: string
) {
  //candidate password means the password with the body
  return bcryptjs.compare(candidatePassword, this.password);
};

employeeSchema.pre<Query<IEmployee, IEmployee>>(/^find/, function (next) {
  this.populate({
    path: 'store',
    select: 'name address',
  });
  next();
});
employeeSchema.pre<Query<IEmployee, IEmployee>>(/^find/, function (next) {
  const query: any = {};
  // Check if the query has an "includeInactive" parameter
  if (this.getQuery().includeInActive !== undefined) {
    // If "includeInactive" parameter is present, bypass the "active" filtering
    this.find({});
  } else {
    // If "includeInactive" parameter is not present, apply the "active" filter
    query.active = { $ne: false };
    this.find(query);
  }
  next();
});
employeeSchema.pre<any>('findOneAndUpdate', async function (next) {
  if (!this.getUpdate().password) return next();
  this.getUpdate().password = await bcryptjs.hash(
    this.getUpdate().password,
    12
  );
  next();
});
employeeSchema.methods.isPasswordChanged = function (JWTTimestamp: number) {
  if (this.passwordChangedAt) {
    const changeTimestamp: number = this.passwordChangedAt.getTime() / 1000;
    return changeTimestamp > JWTTimestamp;
  }
  return false;
};
const Employee = model<EmployeeDoc>('Employee', employeeSchema);

export default Employee;
