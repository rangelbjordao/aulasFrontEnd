'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

interface propDiscos {
    id: string;
    album: string;
    banda: string;
}

export default function Home() {

    const [discos, setDiscos] = useState<propDiscos[]>([]);

    useEffect(() => {
        const buscarDiscos = async () => {
            try {
                const response = await fetch("/discos.json")
                const data = await response.json();

                setDiscos(data);

            } catch (error) {
                console.error(error);
            }
        }
        buscarDiscos();
    }, [])

    return (
        <>
            <ul>
                {
                    discos.map((disco, index) => (
                        <li key={index}>
                            <Link href={`disco/${disco.id}`} key={index}> {disco.album}</Link>
                            - {disco.banda}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}