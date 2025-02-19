import React from "react";

type BotaoProps = {
    texto?: string;
    cor?: string;
    clicado?: () => void;
};

const Botao: React.FC<BotaoProps> = ({
    texto = "Clique aqui",
    cor = "blue",
    clicado,
}) => {
    return (
        <>
            <button
                onClick={clicado}
                style={{
                    backgroundColor: cor,
                    color: "#fff",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none",
                }}
            >
                {texto}
            </button>
        </>
    );
};

export default Botao;
