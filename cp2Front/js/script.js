function validar() {
    var nomeEl = document.getElementById("txtNome");
    var rgEl = document.getElementById("txtRG");
    var cpfEl = document.getElementById("txtCPF");
    var senhaEl = document.getElementById("txtSenha");
    var confSenhaEl = document.getElementById("txtConfSenha");
    var rdoMascEl = document.getElementById("txtSexoM");
    var rdoFemEl = document.getElementById("txtSexoF");
    var rdoOutroEl = document.getElementById("txtSexoO");

    if (nomeEl.value == "") {
        alert("Preencha o campo nome");
        nomeEl.focus();
        return false;
    }

    if (rgEl.value == "") {
        alert("Preencha o campo rg");
        rgEl.focus();
        return false;
    }

    if (cpfEl.value == "") {
        alert("Preencha o campo cpf");
        cpfEl.focus();
        return false;
    }

    if (senhaEl.value == "" || (confSenhaEl.value == "")) {
        alert("Preencha os campos senha e confirmacao de senha");
        senhaEl.focus();
    }

    if (!rdoFemEl.checked && !rdoMascEl.checked && !rdoOutroEl.checked) {
        alert("Selecione o sexo");
        return false;
    }
}