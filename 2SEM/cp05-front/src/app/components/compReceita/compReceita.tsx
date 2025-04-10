'use client'

import Image from "next/image";

type Props = {
    receita: {
        id: number;
        titulo: string;
        descricao: string;
        imagem: string;
        tempoPreparo: string;
    }
}

const CompReceita = ({ receita }: Props) => {

    return (
        <>
            <div className="flex flex-col items-center text-center border border-gray-200 rounded-md p-6 max-w-sm mx-auto">
                <Image
                    src={receita.imagem}
                    alt={`Imagem da receita ${receita.titulo}`}
                    width={300}
                    height={200}
                    className="rounded-md mb-4">
                </Image>
                <h2 className="text-2xl font-semibold">{receita.titulo}</h2>
                <p>{receita.descricao}</p>
                <p>{receita.tempoPreparo}</p>
            </div>
        </>
    )
}

export default CompReceita;