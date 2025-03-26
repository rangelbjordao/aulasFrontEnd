"use client"

import { useParams } from "next/navigation";

const PaginaProduto = () => {

    const parametro = useParams();

    return (
        <>
            <h1>Produto: {parametro.id}</h1>
        </>
    )
}

export default PaginaProduto;