'use client';

import { useEffect, useState } from "react";
import CompReceita from "./components/compReceita/compReceita";

export default function Home() {
    const [receitas, setReceitas] = useState<Receita[]>([]);

    type Receita = {
        id: number;
        titulo: string;
        descricao: string;
        imagem: string;
        tempoPreparo: string;
    };

    useEffect(() => {
        fetch('/receitas.json')
            .then((res) => res.json())
            .then((dados) => setReceitas(dados))
            .catch((erro) => console.log('Erro ao carregar receitas: ', erro))
    }, [])

    return (
        <>
            <main className="my-10 space-y-6">
                {receitas.map((receita) => (
                    <CompReceita key={receita.id} receita={receita} />
                ))}
            </main>
        </>
    );
}
