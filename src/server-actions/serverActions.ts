'use server'


import {createCar} from "@/services/api.services";
import {carValidator} from "@/validators/car.validator";
export const createNewCar = async (formData:FormData) =>{
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));
    const {error} = carValidator.validate({ brand, price, year });
    if(error){
        console.log(error)
    }

    await createCar({brand, price, year});
}