import {getAllCars} from "@/services/api.services";
import Car from "@/components/Car/Car";

const Cars = async () => {
    const cars = await getAllCars();
    return (
        <div>
            {cars.map((car, index) => <Car key={index} car={car}/>)}
        </div>
    );
};

export default Cars;