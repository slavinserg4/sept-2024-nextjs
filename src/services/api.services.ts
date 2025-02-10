import {ICar} from "@/models/ICar";
type createCarType = {
    brand: string;
    price: number;
    year: number;
}



export const getAllCars = async ():Promise<ICar[]> => {
    let cars = await fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(res => res.json());
    return cars;
}
export const createCar = async ({ brand, price, year }: createCarType): Promise<ICar> => {
    const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ brand, price, year }),
    });

    console.log(response);
    return response.json();
};