"use client"

import { useParams } from "next/navigation";

const Subcategoria = () => {
    const params = useParams();
    const { categoria, subcategoria } = params;

    return (
        <>
            <h1>Categoria: {categoria as string} |
                Subcategoria:{" "} {subcategoria as string}
            </h1>
        </>
    )
}

export default Subcategoria