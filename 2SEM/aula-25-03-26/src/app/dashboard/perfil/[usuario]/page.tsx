import { use } from "react";
import { notFound } from "next/navigation";

const usuariosValidos = ["joao", "maria", "ana"]; // Informaçao vem da base de dados

/* 
params é uma promise queueMicrotask, quando resolvido, retorna um objeto, contendo usuario 
*/

interface Params {
    params: Promise<{ usuario?: string }>;
}

const Perfil = ({ params }: Params) => {

    const ParamsResolvido = use(params); // use é uma funcao que resolve a Promise

    const usuario = ParamsResolvido.usuario || ""; // usuario é uma string ou undefined

    if (!usuario || !usuariosValidos.includes(usuario)) {
        notFound(); 
    }

    return (
        <>
            <h1>Perfil do {usuario}</h1>
        </>
    )
}

export default Perfil