'use client'
import React, { useState } from "react";

export default function Home() {
    const [valor, setValor] = useState(0);

    const [dados, setDados] = useState("");

    const [nome, setNome] = useState("");

    const [conteudo, setConteudo] = useState("");

    const [fraseInicial, setFraseInicial] = useState("Clique no botao para mudar a mensagem");
    const [fraseModificada, setFraseModificada] = useState("Mensagem alterada")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDados(event.target.value)
    }

    const nomeDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value)
    }

    const exibirConteudo = () => {
        setConteudo(nome);
        setNome("");
    }

    const mudaFrase = () => {
        setFraseInicial(fraseModificada)
        setFraseModificada(fraseInicial)
    }

    return (
        <>
            <h1>Trabalhando com  UseState</h1>

            <h2>Exemplo 01</h2>

            <button onClick={() => { setValor(valor + 1) }}>Incrementar</button>
            <button onClick={() => { setValor(valor - 1) }} disabled={valor == 0}>Decrementar</button>
            <button onClick={() => { setValor(0) }}>Zerar</button>
            <p>Novo valor: {valor}</p>

            <h2>Exemplo 02</h2>
            Dados: <input value={dados} onChange={handleChange} />
            <p>Valor digitado: {dados}</p>

            <h3>Exemplo 03</h3>
            <form onSubmit={(e) => { e.preventDefault() }}>
                Nome: <input value={nome} onChange={nomeDigitado} />
                <button type="button" onClick={() => { exibirConteudo() }}>Enviar</button>
                <p>Nome digitado: {conteudo}</p>
            </form>

            <h3>Exercicio 01</h3>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <p>Mensagem: {fraseInicial}</p>
                <button type="button" onClick={() => { mudaFrase() }}>Mudar texto</button>
            </form>

        </>
    );
}
