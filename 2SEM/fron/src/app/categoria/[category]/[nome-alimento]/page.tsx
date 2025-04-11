
"use client";  

import Image from "next/image";
import { useParams } from "next/navigation"; // Importando o useParams do Next.js 13
import { useEffect, useState } from "react";


interface Receita {
  modoPreparo: string;
  tempo: string;
  nome: string;
  nomeurl:string;
  imagem:string;
  descricao:string
  ingredientes:string[];
  porcoes:number;
  

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
        <main className="max-w-xl mx-auto my-10 p-6">
            <article className="p-2 border border-gray-200 rounded-md shadow-md flex flex-col text-center items-center gap-6">
                <h1 className="text-3xl font-bold">{receitaDetalhe.nome}</h1>
                <Image
                    src={`/images/${receitaDetalhe.imagem}.png`}
                    alt={`Imagem da receitaDetalhe ${receitaDetalhe.imagem}`}
                    width={300}
                    height={200}
                    className="rounded-md">
                </Image>
                <p>{receitaDetalhe.descricao}</p>
                <p>Tempo de preparo: {receitaDetalhe.tempo}</p>
                <p>Porções: {receitaDetalhe.porcoes}</p>
                <section>
                    <h2 className="text-xl font-semibold">Ingredientes:</h2>
                    <ul className="list-disc list-inside text-left">
                        {receitaDetalhe.ingredientes.map((ingrediente, index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Modo de Preparo:</h2>
                    <p>{receitaDetalhe.modoPreparo}</p>
                </section>
            </article>
        </main>
    </>
)
}
;

export default ReceitaDetalhe;
