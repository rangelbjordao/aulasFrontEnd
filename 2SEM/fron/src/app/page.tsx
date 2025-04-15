import CategoriasComImagem from "./components/CategoriaComImagem/CategoriaComImagem";
import ReceitaDestaque from "./components/ReceitaDestaque/ReceitaDestaque";


export default function Home() {
  return (
    <>
      {/*Receita destaque*/}
      <ReceitaDestaque />

      {/*Mini navegacao das categorias */}

      <CategoriasComImagem />

    </>

  );
}
