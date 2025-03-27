"use client"

import { useParams } from "next/navigation"

const Categoria = () => {
    const params = useParams();
    const { categoria } = params;

    return (
        <>
            <h1>Categoria: {categoria as string}</h1>
        </>
    )
}

export default Categoria