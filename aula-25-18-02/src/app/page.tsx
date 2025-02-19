'use client'

import Card, { Auxiliar } from "../app/components/Card/page";
import Botao from "./components/Botao/Botao";
import MeuComponente from "./components/MeuComponente/page";
import ToDo from "./components/ToDo/ToDo";

export default function Home() {
  return (
    <>
      <h1>Hello world!!!</h1>

      <Card />

      <MeuComponente />

      <Auxiliar />

      <Botao cor="red" texto="Excluir" clicado={() => { alert("Botao excluir foi pressionado") }} />

      <Botao cor="green" texto="Acessar" />

      <Botao texto="Confirmar" clicado={() => { alert("Botao Confirmar foi pressionado") }} />

        <ToDo />
    </>
  );
}
