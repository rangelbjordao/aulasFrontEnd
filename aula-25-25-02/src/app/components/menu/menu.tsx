import Link from "next/link";

const Menu = () => {
    return (
        <>
            <ul className="menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/produto">Produto</Link></li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
        </>
    )
}

export default Menu;