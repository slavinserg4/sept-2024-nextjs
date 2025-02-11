'use server'

type FormPropsType = {
    brand: string;
    price: number;
    year: number;
};
import {createCar} from "@/services/api.services";
export const createNewCar = async (formData:FormPropsType) =>{



    await createCar(formData);
}