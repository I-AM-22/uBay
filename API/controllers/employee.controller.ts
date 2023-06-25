import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from '@controllers/handlerFactory';
import Employee from '@models/employee.model';

export const getAllEmployee = getAll(Employee);
export const getEmployee = getOne(Employee);
export const createEmployee = createOne(Employee);
export const updateEmployee = updateOne(Employee);
export const deleteEmployee = deleteOne(Employee);
