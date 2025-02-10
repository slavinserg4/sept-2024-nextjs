import Form from "next/form";
import {createNewCar} from "@/server-actions/serverActions";

const Page = () => {
    return (
        <div>
            <h1>Create New Car</h1>
            <Form action={createNewCar} >
                <input type="text" name={'brand'} placeholder="brand" required />
                <input type="number" name={'price'} placeholder="price" required />
                <input type="number" name={'year'} placeholder="year" required/>
                <button>submit</button>

            </Form>
        </div>
    );
};

export default Page;