"use client"; // necessário se estiver usando Next.js 13+ com app router

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Receita = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
  

};

export default function ReceitaDestaque() {
  const [receitaDestaque, setReceitaDestaque] = useState<Receita | null>(null);

  useEffect(() => {
    fetch("/receitas.json")
      .then((res) => res.json())
      .then((data: Receita[]) => {
        const destaque = data.find((r) => r.destaque);
        console.log("Receita destaque:", destaque);
        setReceitaDestaque(destaque || null);
      })
      .catch((err) => console.error("Erro ao carregar receitas:", err));
  }, []);

  if (!receitaDestaque) {
    return <p className="text-center mt-10">Carregando receita em destaque...</p>;
  }

  return (
    <div className="lg:w-full mx-auto flex flex-col m-10 md:flex-col lg:flex-row justify-around min-h-[30rem]pt-3 items-center">
  <Link href="/" aria-label="Ir para a página inicial">
    <Image
      src={`/images/${receitaDestaque.imagem}.png`}
      alt=""
      width={400}
      height={80}
    />
  </Link>

  <div className="space-y-10 max-w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
      Novidade de receita...
    </h1>
    <h3 className="text-xl sm:text-2xl md:text-3xl text-center">
      {receitaDestaque.nome}
    </h3>
    <p className="indent-4 text-base sm:text-lg md:text-xl text-center sm:w-100 md:w-200">
      {receitaDestaque.descricao}
    </p>
    <Link href={"/novidades"}>
      <button
        type="button"
        className="bg-red-700 text-white border border-gray-800 rounded-md px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg cursor-pointer w-full sm:w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600"
      >
        Ver mais
      </button>
    </Link>
  </div>
</div>
  );
}