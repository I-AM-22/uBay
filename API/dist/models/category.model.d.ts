import { CategoryDoc } from '../types/category.types';
declare const Category: import("mongoose").Model<CategoryDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, CategoryDoc> & Omit<import("../types/category.types").ICategory & import("mongoose").Document<any, any, any> & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>;
export default Category;
