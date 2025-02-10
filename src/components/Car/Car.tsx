import {ICar} from "@/models/ICar";
import {FC} from "react";

type carProps = {
    car:ICar
}


const Car:FC<carProps> = ({car}) => {
    return (
        <div>
            {car.id}| {car.brand}
        </div>
    );
};

export default Car;