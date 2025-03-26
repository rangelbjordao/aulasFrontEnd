'use client'

import Link from "next/link";
import Botao from "./components/Botao/botao";

export default function Home() {
    return (
        <>
            <h1>Props!</h1>

            <Botao texto="Acessar" corFundo="green" clicar={() => alert('Botao Acessar foi clicado')} />

            <Botao texto="Excluir" clicar={() => alert('Botao Excluir foi clicado')} />

            <Botao />

            <nav>
                <ul>
                    <li>
                        <Link href="produto/1">Produto 1</Link>
                    </li>

                    <li>
                        <Link href="produto/2">Produto 2</Link>
                    </li>

                    <li>
                        <Link href="produto/3">Produto 3</Link>
                    </li>

                    <li>
                        <Link href="produto/4">Produto 4</Link>
                    </li>

                    <li>
                        <Link href="produto/5">Produto 5</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
