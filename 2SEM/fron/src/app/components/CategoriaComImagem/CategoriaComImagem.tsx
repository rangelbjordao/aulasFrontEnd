"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Categoria = "bebidas" | "salgados" | "sobremesas" | "pratos";//type union...Isso 
//restringe o valor de categoria a apenas esses...

const imagens: Record<Categoria, string> = {
    bebidas: "/images/categoria-home/freepik__background__84996.png",
    salgados: "/images/categoria-home/freepik__background__91512.png",
    sobremesas: "/images/categoria-home/freepik__background__74306.png",
    pratos: "/images/pratos/freepik__background__3907.png"
};//Um map com valores validos... e dps uma string com o caminho da img 

// Mapeamento da rota que será usada no "Ver mais"
const rotas: Record<Categoria, string> = {
    bebidas: "/categoria/bebidas",
    salgados: "/categoria/salgados",
    sobremesas: "/categoria/sobremesas",
    pratos: "/categoria/pratos-principais"
};//Quando eu uso esse record, ele trata a string como sendo algo especifico

export default function CategoriasComImagem() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria>("bebidas");//bebida é o valor padrao...

    return (
        <div className="min-h-screen p-4">
            <div className="bg-blue-950 max-w-[550px] mx-auto flex flex-col text-amber-50 items-center space-y-8 py-10 m-5 rounded-4xl mt-15">
                <h1 className="text-5xl font-bold">Nossas categorias</h1>
                <p className="max-w-3xl text-center px-4">
                    No nosso site, você encontra opções para todos os gostos: sobremesas doces e irresistíveis, salgados crocantes e recheados, bebidas refrescantes para todos os momentos e pratos principais saborosos e completos, feitos com ingredientes frescos para uma refeição deliciosa.
                </p>

                <nav>

                    <ul className="flex gap-6 text-lg  md:text-2xl ">
                        {/*aqui eu tranformo a string do record(algo especifico) em algo generico
        com o object, e dps eu mapeio cada elemento q tem no object, em uma var "cat"*/}
                        {Object.keys(imagens).map((cat) => (

                            <li key={cat}>
                                <button
                                    onClick={() => setCategoriaSelecionada(cat as Categoria)}
                                    className={`font-bold underline ${categoriaSelecionada === cat ? "text-yellow-400" : "text-white cursor-pointer"
                                        }`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="w-3/4 h-3/4 relative rounded overflow-hidden">
                    <Image
                        src={imagens[categoriaSelecionada]}
                        alt={`Imagem de ${categoriaSelecionada}`}
                        width={600}
                        height={550}
                        className="object-cover"
                    />
                </div>

                {/* Ver mais */}
                <Link href={rotas[categoriaSelecionada]}>
                    <button className="mt-4 px-6 py-2 w-72 bg-yellow-500 text-blue-900 font-semibold rounded hover:bg-yellow-400 transition-all cursor-pointer">
                        Ver mais sobre {categoriaSelecionada}
                    </button>
                </Link>
            </div>
        </div>

    );
}
