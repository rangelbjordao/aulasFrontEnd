"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Receita {
  id: number;
  categoria: "bebidas" | "sobremesas" | "salgados"; // Tipo literal
  nome: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem: string; // A imagem pode ser opcional
  favorito: boolean;
  nomeurl:string;
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
      } catch (error) {
        setErro("Erro ao carregar as receitas");
      }
    };

    if (category) {
      fetchReceitas();
    }
  }, [category]);

  if (erro) return <p>{erro}</p>;

  return (
    
    <div className="w-full ">
      <h1 className="font-bold text-6xl text-center pt-6">Receitas de {category}</h1>
      <div className="space-y-10 max-w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {receitas.map((receita: any) => (
          <div key={receita.id} className="w-70 rounded overflow-hidden shadow-lg  bg-amber-700 ">
            <Image
              src={`/images/${receita.imagem}.png`}
              alt={receita.nome}
              width={200}
              height={100}
            />
            <h2 className="font-bold text-xl text-center">{receita.nome}</h2>
            
            <Link href={`/categoria/${category}/${encodeURIComponent(receita.nomeurl)}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full">
                Ver mais
              </button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
