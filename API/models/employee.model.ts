import { Schema, model, Query, Types } from 'mongoose';
import { EmployeeDoc, EmployeeModel } from 'types/employee.types';
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';


const employeeSchema = new Schema<EmployeeDoc, EmployeeModel, any>(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        store: {
            type: Types.ObjectId,
            required: true,
            ref: 'Store'
        },
        address: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        work_time: {
            type: String,
            required: true,
        },
        active: {
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
const Employee = model<EmployeeDoc>('Employee', employeeSchema);

export default Employee;
