import Image from "next/image";
import Link from "next/link";
import CategoriasComImagem from "./components/CategoriaComImagem/CategoriaComImagem";
import { Footer } from "./components/footer/footer";
import ReceitaDestaque from "./components/ReceitaDestaque/ReceitaDestaque";


export default function Home() {
  return (
    <>
      {/*Receita destaque*/}
      <ReceitaDestaque/>
      
      {/*Mini navegacao das categorias */}

      <CategoriasComImagem/>
      
      <Footer/>
      
      
    </>
    
  );
}
