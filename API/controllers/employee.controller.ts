import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@controllers/handlerFactory';
import { NextFunction, Request, Response, response } from 'express';
// import catchAsync from '@utils/catchAsync';
import catchAsync from '@utils/catchAsync';
import cls from 'cls-hooked';
import { signJwt } from '@utils/jwt.utils';
import { STATUS_CODE } from '../types/helper.types';
import AppError from '@utils/appError';
import Employee from '@models/employee.model';
import mongoose, { PipelineStage } from 'mongoose';
import Delivery from '@models/delivery.model';
import { receive } from './delivery.controller';

export const getAllEmployee = getAll(Employee);
export const getEmployee = getOne(Employee);
export const createEmployee = createOne(Employee);
export const updateEmployee = updateOne(Employee);
export const deleteEmployee = deleteOne(Employee);

//Send The User With the response after login and signup
const sendEmployee = (employee: any, statusCode: number, res: Response) => {
  const namespace = cls.getNamespace('app');
  const token = signJwt(employee.id.toString());
  employee.password = undefined;
  namespace?.set('loggedInEmployeeId', employee.id);

  res.status(statusCode).send({
    token,
    employee,
  });
};
//login for employee
export const loginEmployee = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //Check if  the email and password  exist
    const { email, password } = req.body;
    //check if the user exist and the password correct
    const employee = await Employee.findOne({ email }).select('+password ');
    if (!employee || !(await employee.correctPassword(password))) {
      return next(
        new AppError(
          STATUS_CODE.UNAUTHORIZE,
          [],
          'كلمة المرور او البريد الالكتروني غير صحيح'
        )
      );
    }
    sendEmployee(employee, STATUS_CODE.SUCCESS, res);
  }
);

//login for employee
export const watchEmployee = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //Check if  the email and password  exist
    const { employeeID } = req.params;
    const employeeDoc = await Employee.findById(employeeID);
    if (!employeeDoc) {
      return next(
        new AppError(STATUS_CODE.UNAUTHORIZE, [], 'هذا الموظف غير موجود')
      );
    }
    //return the product  that receive from seller
    let pipeline1: PipelineStage[] = [
      {
        $match: {
          employee_seller: employeeDoc._id,
        },
      },
      {
        $lookup: {
          from: 'payments',
          localField: 'payment',
          foreignField: '_id',
          as: 'payment',
        },
      },
      {
        $unwind: '$payment',
      },
      {
        $lookup: {
          from: 'products',
          localField: 'payment.product',
          foreignField: '_id',
          as: 'product',
        },
      },
      {
        $unwind: '$product',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'product.user',
          foreignField: '_id',
          as: 'product.user',
        },
      },
      {
        $unwind: '$product.user',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'payment.customer',
          foreignField: '_id',
          as: 'customer',
        },
      },
      {
        $unwind: '$customer',
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'employee_seller',
          foreignField: '_id',
          as: 'employee_seller',
        },
      },
      {
        $unwind: '$employee_seller',
      },
      {
        $project: {
          product: {
            _id: 1,
            content: 1,
            title: 1,
            photos: 1,
            price: 1,
            user: { _id: 1, name: 1, photo: 1 },
          },
          customer: { _id: 1, name: 1, photo: 1 },
          employee_seller: { _id: 1, name: 1, photo: 1 },
          receive_date: '$seller_date',
        },
      },
      {
        $sort: {
          receive_date: -1, // Sort by seller_date in descending order
        },
      },
    ];
    //return the product that give to buyer
    let pipeline2: PipelineStage[] = [
      {
        $match: {
          employee_customer: employeeDoc._id,
        },
      },
      {
        $lookup: {
          from: 'payments',
          localField: 'payment',
          foreignField: '_id',
          as: 'payment',
        },
      },
      {
        $unwind: '$payment',
      },
      {
        $lookup: {
          from: 'products',
          localField: 'payment.product',
          foreignField: '_id',
          as: 'product',
        },
      },
      {
        $unwind: '$product',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'product.user',
          foreignField: '_id',
          as: 'product.user',
        },
      },
      {
        $unwind: '$product.user',
      },
      {
        $lookup: {
          from: 'users',
          localField: 'payment.customer',
          foreignField: '_id',
          as: 'customer',
        },
      },
      {
        $unwind: '$customer',
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'employee_customer',
          foreignField: '_id',
          as: 'employee_customer',
        },
      },
      {
        $unwind: '$employee_customer',
      },
      {
        $project: {
          product: {
            _id: 1,
            content: 1,
            title: 1,
            photos: 1,
            price: 1,
            user: { _id: 1, name: 1, photo: 1 },
          },
          customer: { _id: 1, name: 1, photo: 1 },
          employee_customer: { _id: 1, name: 1, photo: 1 },
          give_date: '$customer_date',
        },
      },
      {
        $sort: {
          give_date: -1, // Sort by seller_date in descending order
        },
      },
    ];
    const products_receive = await Delivery.aggregate(pipeline1);
    const products_give = await Delivery.aggregate(pipeline2);
    res.status(STATUS_CODE.SUCCESS).json({
      receive: products_receive,
      give: products_give,
    });
  }
);
