import City from '@models/city.model';
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from '@controllers/handlerFactory';

export const getAllCities = getAll(City);
export const getCity = getOne(City);
export const createCity = createOne(City);
export const updateCity = updateOne(City);
export const deleteCity = deleteOne(City);