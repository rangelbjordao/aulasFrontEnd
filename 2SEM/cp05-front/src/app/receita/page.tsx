import CompReceita from "../components/compReceita/compReceita"

const Receita = () => {
    return (
        <>
            <CompReceita receita={{
                id: 0,
                titulo: "",
                descricao: "",
                imagem: "",
                tempoPreparo: ""
            }} />
        </>
    );
};

export default Receita;