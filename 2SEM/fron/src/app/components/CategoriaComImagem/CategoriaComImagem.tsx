"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Categoria = "bebidas" | "salgados" | "sobremesas";//type union...Isso 
//restringe o valor de categoria a apenas esses...

const imagens: Record<Categoria, string> = {
  bebidas: "/images/categoria-home/freepik__background__84996.png",
  salgados: "/images/categoria-home/freepik__background__91512.png",
  sobremesas: "/images/categoria-home/freepik__background__74306.png",
};//Um map com valores validos... e dps uma string com o caminho da img 

// Mapeamento da rota que será usada no "Ver mais"
const rotas: Record<Categoria, string> = {
  bebidas: "/categoria/bebidas",
  salgados: "/categoria/salgados",
  sobremesas: "/categoria/sobremesas",
};//Quando eu uso esse record, ele trata a string como sendo algo especifico

export default function CategoriasComImagem() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria>("bebidas");//bebida é o valor padrao...

  return (
    <div className="min-h-screen bg-gray-200">
        <div className="bg-blue-950 w-[700px] mx-auto  flex flex-col text-amber-50 items-center space-y-8 py-10 m-5 rounded-4xl">
      <h1 className="text-5xl font-bold">Nossas categorias</h1>
      <p className="max-w-3xl text-center px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi nemo voluptatem sunt in nobis harum neque maxime, distinctio ipsum ad, sequi, incidunt accusamus earum pariatur! Saepe magni accusamus dicta!
      </p>

      <nav>
        
        <ul className="flex gap-6 text-2xl">
         {/*aqui eu tranformo a string do record(algo especifico) em algo generico
        com o object, e dps eu mapeio cada elemento q tem no object, em uma var "cat"*/}
          {Object.keys(imagens).map((cat) => ( 
            
            <li key={cat}>
              <button
                onClick={() => setCategoriaSelecionada(cat as Categoria)}
                className={`font-bold underline ${
                  categoriaSelecionada === cat ? "text-yellow-400" : "text-white"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-[600px] h-[550px] relative rounded overflow-hidden">
        <Image
          src={imagens[categoriaSelecionada]}
          alt={`Imagem de ${categoriaSelecionada}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Ver mais */}
      <Link href={rotas[categoriaSelecionada]}>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-blue-900 font-semibold rounded hover:bg-yellow-400 transition-all">
          Ver mais sobre {categoriaSelecionada}
        </button>
      </Link>
    </div>
    </div>
    
  );
}
