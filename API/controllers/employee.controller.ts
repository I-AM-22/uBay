import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from '@controllers/handlerFactory';
import Employee from '@models/employee.model';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '@utils/catchAsync';
import cls from 'cls-hooked';
import { signJwt } from '@utils/jwt.utils';
import { STATUS_CODE } from '../types/helper.types';
import AppError from '@utils/appError';




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
export const loginEmployee = () =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        //Check if  the email and password  exist
        const { email, password } = req.body;
        //check if the user exist and the password correct
        const employee = await Employee.findOne({ email }).select('+password ');
        if (
            !employee ||
            !( await employee.correctPassword(password))
        ) {
            return next(
                new AppError(
                    STATUS_CODE.UNAUTHORIZE,
                    [],
                    'كلمة المرور او البريد الالكتروني غير صحيح'
                )
            );
        }
        sendEmployee(employee, STATUS_CODE.SUCCESS, res);
    });


