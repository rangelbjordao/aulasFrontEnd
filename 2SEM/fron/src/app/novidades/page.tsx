"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Receita {
    id: number;
    categoria: "bebidas" | "sobremesas" | "salgados";
    nome: string;
    ingredientes: string[];
    modoPreparo: string;
    tempo: string;
    imagem: string;
    favorito: boolean;
    nomeurl: string;
    novidades: boolean;
}

const NovidadesPage = () => {
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
                const receitasFiltradas = data.filter((r) => r.novidades === true);
                setReceitas(receitasFiltradas);
            } catch (error) {
                setErro("Erro ao carregar as receitas");
            }
        };

        fetchReceitas();
    }, []);

    if (erro) return <p>{erro}</p>;

    return (
        <div className="w-full min-h-screen px-6 py-15 bg-gradient-to-b ">
            <h1 className="font-bold text-5xl text-center mb-12 text-amber-800 font-serif"> Novidades da Semana</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20">
                {receitas.map((receita) => (
                    <div key={receita.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">

                        {/* Tempo no canto superior direito */}
                        <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded z-10">
                            ⏱ {receita.tempo}
                        </div>

                        {/* Imagem */}
                        <Image
                            src={`/images/${receita.imagem}.png`}
                            alt={receita.nome}
                            width={400}
                            height={240}
                            className="w-full h-48 object-cover"
                        />

                        {/* Conteúdo */}
                        <div className="p-4 flex flex-col justify-between h-[calc(100%-192px)]">
                            <h2 className="font-semibold text-lg text-center text-amber-900">{receita.nome}</h2>

                            <Link href={`/categoria/${receita.categoria}/${encodeURIComponent(receita.nomeurl)}`} className="mt-4">
                                <button className="w-full px-4 py-2 bg-amber-500 text-white font-medium rounded hover:bg-amber-600 transition cursor-pointer">
                                    Ver mais
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NovidadesPage;
