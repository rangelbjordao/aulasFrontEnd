"use client";

import { use, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
    nome: string;
    cpf: string;
    sexo: string;
    estadoCivil: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    ddd: string;
}

export default function Home() {

    const { register, handleSubmit, watch, setValue, setFocus, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    const cep = watch("cep");

    const validarCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, ""); // substitui tudo que nao for caractere numerico
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.substring(i, i + 1)) * (10 - i);
        let result = 11 - (add % 11);
        if (result === 10 || result === 11) result = 0;
        if (result !== parseInt(cpf.substring(9, 10))) return false;
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        result = 11 - (add % 11);
        if (result === 10 || result === 11) result = 0;
        return result === parseInt(cpf.charAt(10));
    }

    const buscarEndereco = async (cep: string) => {
        if (cep.length === 8) {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                alert("CEP não encontrado");
            }
            else {
                setValue("rua", data.logradouro);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setValue("estado", data.estado);
                setValue("ddd", data.ddd);
                setFocus("numero");
            }
        }
        else {
            alert("CEP incorreto");
        }
    }

    useEffect(() => {
        if (cep && cep.length === 8) {
            buscarEndereco(cep);
        }
    }, [cep]);


    return (
        <>
            <h1>Trabalhando com HOOK FORMS</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome:</label>
                    <input {...register("nome",
                        {
                            required: " - Nome obrigatorio",
                        }
                    )} />
                    {errors.nome && <span>{errors.nome.message}</span>}
                </div>
                <div>
                    <label>CPF:</label>
                    <input {...register("cpf",
                        {
                            required: " - CPF obrigatorio",
                            validate: (value) => validarCPF(value) || "CPF incorreto",
                        })} />
                    {errors.cpf && <span>{errors.cpf.message}</span>}
                </div>
                <div>
                    <label>Sexo:</label>
                    <input type="radio" id="masc" value="Masculino" {
                        ...register("sexo", {
                            required: " - Sexo obrigatorio"
                        })
                    } /> <label htmlFor="masc">Marculino</label>

                    <input type="radio" id="fem" value="Feminino" {
                        ...register("sexo", {
                            required: " - Sexo obrigatorio"
                        })
                    } /> <label htmlFor="fem">Feminino</label>

                    <input type="radio" id="outro" value="Outro" {
                        ...register("sexo", {
                            required: " - Sexo obrigatorio"
                        })
                    } /> <label htmlFor="outro">Outro</label>

                    {errors.sexo && <span>{errors.sexo.message}</span>}
                </div>

                <div>
                    <label>Estado Civil: </label>
                    <select {
                        ...register("estadoCivil", {
                            required: " - Estado civil é obrigatorio"
                        })
                    }>
                        <option value="">Selecione</option>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                        <option value="Separado">Separado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Viuvo">Viuvo</option>
                    </select>
                    {errors.estadoCivil && <span>{errors.estadoCivil.message}</span>}
                </div>

                <div>
                    <label>CEP: </label>
                    <input {...register("cep", {
                        required: "CEP obrigatorio"
                    }
                    )} />
                </div>

                <div>
                    <label>Rua: </label>
                    <input readOnly {...register("rua", {
                        required: "Rua obrigatorio"
                    }
                    )} />
                </div>

                <div>
                    <label>Número: </label>
                    <input {...register("numero", {
                        required: "Numero obrigatorio"
                    }
                    )} />

                </div>

                <div>
                    <label>Bairro: </label>
                    <input readOnly {...register("bairro", {
                        required: "Bairro obrigatorio"
                    }
                    )} />
                </div>

                <div>
                    <label>Cidade: </label>
                    <input readOnly {...register("cidade", {
                        required: "Cidade obrigatorio"
                    }
                    )} />
                </div>

                <div>
                    <label>Estado: </label>
                    <input readOnly {...register("estado", {
                        required: "Estado obrigatorio"
                    }
                    )} />
                </div>

                <div>
                    <label>DDD: </label>
                    <input readOnly {...register("ddd", {
                        required: "DDD obrigatorio"
                    }
                    )} />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    );
}