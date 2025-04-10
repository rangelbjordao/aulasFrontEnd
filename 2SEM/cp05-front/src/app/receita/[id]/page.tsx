'use client'

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Receita = {
    id: number;
    titulo: string;
    descricao: string;
    ingredientes: string[];
    modoDePreparo: string;
    categoria: string;
    imagem: string;
    tempoPreparo: string;
    porcoes: number;
}

const PaginaReceita = () => {
    const params = useParams();
    const id = Number(params.id);

    const [receita, setReceita] = useState<Receita | null | undefined>(undefined);

    useEffect(() => {
        fetch('/receitas.json')
            .then(res => res.json())
            .then((dados: Receita[]) => {
                const receitaEncontrada = dados.find((receita) => receita.id === id);
                setReceita(receitaEncontrada ?? null);
            })
    }, [id]);

    if (receita === undefined) {
        return null;
    }


    if (receita === null) {
        return notFound();
    }

    return (
        <>
            <main className="max-w-xl mx-auto my-10 p-6">
                <article className="p-2 border border-gray-200 rounded-md shadow-md flex flex-col text-center items-center gap-6">
                    <h1 className="text-3xl font-bold">{receita.titulo}</h1>
                    <Image
                        src={receita.imagem}
                        alt={`Imagem da receita ${receita.titulo}`}
                        width={300}
                        height={200}
                        className="rounded-md">
                    </Image>
                    <p>{receita.descricao}</p>
                    <p>Tempo de preparo: {receita.tempoPreparo}</p>
                    <p>Porções: {receita.porcoes}</p>
                    <section>
                        <h2 className="text-xl font-semibold">Ingredientes:</h2>
                        <ul className="list-disc list-inside text-left">
                            {receita.ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Modo de Preparo:</h2>
                        <p>{receita.modoDePreparo}</p>
                    </section>
                </article>
            </main>
        </>
    )
}

export default PaginaReceita;