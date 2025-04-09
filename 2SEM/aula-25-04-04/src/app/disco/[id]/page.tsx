'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


interface propDiscos {
    id: string;
    banda: string;
    album: string;
    imagem: string;
    categoria: string;
    links: string;
    lancamento: string;
    faixas: string;
    descricao: string;
}

const pageDisco = () => {
    const { id } = useParams();

    const [disco, setDisco] = useState<propDiscos | null>(null);

    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const buscarDisco = async () => {


            try {
                const response = await fetch('/discos.json')
                if (!response.ok) {
                    throw new Error("Erro ao acessar a base de dados");
                }
                const data = await response.json();

                const encontrarDisco = data.find((d: { id: string }) => d.id === id);

                if (!encontrarDisco) {
                    throw new Error("album nao encontrado")
                }

                setDisco(encontrarDisco);
                setErro(null);
            }
            catch (error) {
                setErro((error instanceof Error ? error.message : "Erro desconhecido"));
            }
        }
        if (id) {
            buscarDisco()
        }
    }, [id])

    if (!disco) {
        return <p>Carregando!</p>
    }

    return (
        <>
            <Image src={`/imagens/${disco?.imagem}.jpg`} alt="" width={100} height={100} />
            <h1>{disco?.album}</h1>
            <p><b>Banda: </b>{disco?.banda}</p>
            <p><b>Ano: </b>{disco?.lancamento}</p>
            <p><b>Categoria: </b>{disco?.categoria}</p>
            <p><b>Faixas: </b>{disco?.faixas}</p>
            <p><b>Release: </b>{disco?.descricao}</p>
        </>
    )
}
export default pageDisco;