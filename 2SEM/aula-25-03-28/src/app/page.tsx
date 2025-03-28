"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValue = {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    confSenha: string;
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
}

export default function Home() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log(data)
    }


    const senha = watch("senha");


    return (
        <>
            <h1>HOOK FORMS</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nome: </label>
                <input {...register("nome", { required: true })} />
                {errors.nome && <span>Campo Obrigatório</span>}
                <br />

                <label>Sobrenome: </label>
                <input {...register("sobrenome", { required: true })} />
                {errors.sobrenome && <span>Campo Obrigatório</span>}
                <br />

                <label>E-mail: </label>
                <input type="email"{...register("email", {
                    required: "Email obrigatorio",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Email incorreto" }
                })}
                    placeholder="E-mail"
                />
                {errors.email && <span>{errors.email.message}</span>}
                <br />

                <label>Senha: </label>
                <input type="password"
                    {...register("senha",
                        {
                            required: "Senha obrigatoria",
                            minLength: { value: 6, message: "Tamanho minimo de 6 caracteres" },
                            validate: value =>
                                !/[A-Z]/.test(value) ? "Deve conter uma letra maiuscula!" :
                                    !/[a-z]/.test(value) ? "Deve conter uma letra minuscula!" :
                                        !/\d/.test(value) ? "Deve conter um numero!" :
                                            !/[^A-Za-z0-9]/.test(value) ? "Deve conter um caracter especial!" :
                                                true
                        })}
                />
                {errors.senha && <span>{errors.senha.message}</span>}
                <br />

                <label>Corfirmacao de Senha: </label>
                <input type="password"
                    {...register("confSenha", {
                        required: "Confirmacao Obrigatoria",
                        validate: value => value === senha || "As senha devem ser iguais"
                    })} />
                {errors.confSenha && <span>{errors.confSenha.message}</span>}
                <br />

                <label>CEP: </label>
                <input {...register("cep", {
                    required: "Campo obrigatorio",
                    pattern: { value: /^[0-9]{8}$/, message: "Cep incorreto" }
                })} />
                {errors.cep && <span>{errors.cep.message}</span>}
                <br />

                <label>Rua: </label>
                <input {...register("rua")} readOnly />
                <br />

                <label>Numero: </label>
                <input {...register("numero")} />
                <br />

                <label>Bairro: </label>
                <input {...register("bairro")} readOnly />
                <br />

                <label>Cidade: </label>
                <input {...register("cidade")} readOnly />
                <br />

                <label>Estado: </label>
                <input {...register("estado")} readOnly />
                <br />

                <button type="submit">Enviar</button>
            </form>
        </>

    );
}
