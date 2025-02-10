import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={'/cars'}>cars</Link> <br/>
            <Link href={'/createcar'}>create</Link>
        </div>
    );
};

export default Menu;