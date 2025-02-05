import {getUsers} from "@/services/api.service";
import User from "@/components/User/User";

const Users = async () => {
    const users = await getUsers();
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;