"use client";
import { useState } from "react";


const CompContato = () => {
    const [count, setCount] = useState(0);
    return (

        <>
            <h1>Contato</h1>
            <button onClick={() => { setCount(count + 1) }}>Contar</button>
            <p>Contador: {count}</p>
        </>
    )
}
export default CompContato;