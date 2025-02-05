import {FC} from "react";
import {IUser} from "@/models/IUser";
import Link from "next/link";

type UserPropsType = {
    user:IUser;
}
const User:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <Link href={{pathname:`users/${user.id}`, query:{data:JSON.stringify(user)} }}>{user.name}</Link>
        </div>
    );
};

export default User;