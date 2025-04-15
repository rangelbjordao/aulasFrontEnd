
"use client";

import Image from "next/image";
import { useParams } from "next/navigation"; // Importando o useParams do Next.js 13
import { useEffect, useState } from "react";



interface Receita {
    modoPreparo: string;
    tempo: string;
    nome: string;
    nomeurl: string;
    imagem: string;
    descricao: string
    ingredientes: string[];
    porcoes: number;
}

const ReceitaDetalhe = () => {
    // Captura os parâmetros da URL (category e nome-alimento)
    const { category, "nome-alimento": nomeAlimento } = useParams();

    const [receitaDetalhe, setReceitaDetalhe] = useState<Receita | null>(null);

    useEffect(() => {
        const fetchReceitaDetalhe = async () => {
            const response = await fetch('/receitas.json');
            const data = await response.json();
            const receita = data.find(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (receita: any) =>
                    receita.categoria === category && receita.nomeurl === nomeAlimento
            );
            setReceitaDetalhe(receita);
        };

        if (category && nomeAlimento) {
            fetchReceitaDetalhe();
        }
    }, [category, nomeAlimento]);

    if (!receitaDetalhe) return <div>Carregando...</div>;

    return (
        <>
            <main className="max-w-xl mx-auto my-10 p-6 text-center items-center">
                <h1 className="text-3xl w-full font-bold bg-blue-900 rounded-md text-white mb-4">{receitaDetalhe.nome}</h1>
                <article className=" border border-gray-200 rounded-md shadow-md flex flex-col gap-6 bg-blue-100">
                    <Image
                        src={`/images/${receitaDetalhe.imagem}.png`}
                        alt={`Imagem da receitaDetalhe ${receitaDetalhe.imagem}`}
                        width={300}
                        height={200}
                        className="rounded-md self-center mt-4">
                    </Image>
                    <p>{receitaDetalhe.descricao}</p>
                    <p>Tempo de preparo: {receitaDetalhe.tempo}</p>
                    <p>Porções: {receitaDetalhe.porcoes}</p>
                    <section>
                        <h2 className="text-xl font-semibold">Ingredientes:</h2>
                        <ul className="text-center items-center">
                            {receitaDetalhe.ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente} </li>
                            ))}
                        </ul>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold">Modo de Preparo:</h2>
                        <p className="whitespace-pre-line text-left ml-2">{receitaDetalhe.modoPreparo}</p>
                    </section>
                </article>

            </main>
        </>
    )
}
    ;

export default ReceitaDetalhe;
