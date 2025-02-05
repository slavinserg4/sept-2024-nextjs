import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={'/users'}>users</Link><br/>
            <Link href={'/posts'}>posts</Link><br/>
            <Link href={'/comments'}>comments</Link><br/>

        </div>
    );
};

export default Menu;