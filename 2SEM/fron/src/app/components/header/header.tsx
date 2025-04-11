import Link from "next/link";
import Image from "next/image";
import DropDownCategories from "../DropDownCategories/DropDownCategories";

export function Header() {


    return (
        <>
            <header className="w-full bg-blue-950 py-6 text-sm sm:text-base md:text-lg lg:text-xl">
                <div className="w- max-w-11/12 mx-auto flex justify-around items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="Ir para a página inicial">
                        <Image
                            src="/images/—Pngtree—food logo_8239850.png"
                            alt="Logo da CCR"
                            width={80}
                            height={80}
                            className="w-14 h-14 md:w-16 md:h-16 lg:h-20 lg:w-20"
                        />
                    </Link>


                    {/* Menu de navegação */}
                    <nav>
                        <ul className="flex items-center gap-5 list-none p-1 " >
                            <li>
                                <Link className=" font-bold px-2 hover:underline text-white " href="/">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link className="font-bold text-white px-2 hover:underline" href="/integrantes">
                                    Favoritos
                                </Link>

                            </li>


                            <li>
                                <Link className="font-bold text-white px-2 hover:underline" href="/favoritos">
                                    Novidades
                                </Link>

                            </li>
                            <li>
                                <DropDownCategories />
                            </li>

                        </ul>


                    </nav>

                    {/* Campo pesquisa */}

                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-950 border-white  text-white"
                    />

                </div>
            </header>
        </>
    )
}