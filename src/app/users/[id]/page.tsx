import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {IUser} from "@/models/IUser";

type userProps = {
    searchParams: Promise<SearchParams>;
}

const Page:FC<userProps> = async ({searchParams}) => {
    const {data}=await searchParams;
    let user=null
    if(data==="string"){
        user = JSON.parse(data) as IUser
        console.log(user)
    }
    return (
        <div>
            Id:{user?.id} <br/>
            Name:{user?.name}
        </div>
    );
};

export default Page;