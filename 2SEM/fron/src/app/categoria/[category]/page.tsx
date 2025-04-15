"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Receita {
    id: number;
    categoria: "bebidas" | "sobremesas" | "salgados"; // Tipo literal
    nome: string;
    tempo: string;
    imagem: string;
    nomeurl: string;
}

const CategoryPage = () => {
    const { category } = useParams(); // Pega a categoria da URL
    const [receitas, setReceitas] = useState<Receita[]>([]);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const fetchReceitas = async () => {
            try {
                const response = await fetch("/receitas.json");
                if (!response.ok) {
                    throw new Error("Erro ao acessar as receitas");
                }
                const data: Receita[] = await response.json();
                const receitasFiltradas = data.filter((receita: Receita) => receita.categoria === category);

                setReceitas(receitasFiltradas);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setErro("Erro ao carregar as receitas");
                } else {
                    setErro("Erro desconhecido");
                }
            }
        };

        if (category) {
            fetchReceitas();
        }
    }, [category]);

    if (erro) return <p>{erro}</p>;

    return (

        <div className="w-full px-10 mt-10">
            <h1 className="font-bold text-4xl text-center pt-10 mb-8 font-serif">Receitas de {category}</h1>

            <div className="flex flex-wrap gap-4 justify-around pt-10 max-w-6xl mx-auto">
                {receitas.map((receita: Receita) => (
                    <div
                        key={receita.id}
                        className="flex-[0_0_25%] mb-8 box-border"
                    >
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full relative">
                            <div className="absolute top-2 right-2 shadow-10xl bg-black text-amber-50 text-sm px-2 py-1 rounded shadow">
                                ⏱ {receita.tempo}
                            </div>
                            <Image
                                src={`/images/${receita.imagem}.png`}
                                alt={receita.nome}
                                width={0}
                                height={0}
                                className="object-cover w-full h-48"
                                sizes="100vw"
                            />
                            <h2 className="font-bold text-xl text-center mt-4 text-black">{receita.nome}</h2>

                            <div className="flex-grow flex items-end">
                                <Link href={`/categoria/${category}/${encodeURIComponent(receita.nomeurl)}`} className="w-full flex justify-center pb-4 px-4">
                                    <button className="mt-4 w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
                                        Ver mais
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>




    );
};

export default CategoryPage;
