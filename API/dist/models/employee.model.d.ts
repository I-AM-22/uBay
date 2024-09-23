import { Types } from 'mongoose';
import { EmployeeDoc } from 'types/employee.types';
declare const Employee: import("mongoose").Model<EmployeeDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, EmployeeDoc> & Omit<EmployeeDoc & {
    _id: Types.ObjectId;
}, never>, any>;
export default Employee;
