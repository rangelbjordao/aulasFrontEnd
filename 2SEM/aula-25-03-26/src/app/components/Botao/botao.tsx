import React from "react";

type BotaoProps = {
    texto?: string;
    corFundo?: string;
    clicar?: () => void;
}

const Botao: React.FC<BotaoProps> = ({
    texto = "Clque aqui!",
    corFundo = "red",
    clicar
}) => {
    return (
        <>
            <button style={{
                backgroundColor: corFundo,
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
                onClick={clicar}
            >
                {texto}
            </button >
        </>
    )
}

export default Botao;