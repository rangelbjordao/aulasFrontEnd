var num1;

let num2;

num3;

const pi = 3.14;

function boasVindas() {
    alert("Seja bem vindo!!");
    document.write("Seja bem vindo");
}

function somar() {
    // Valor01 = parseInt(document.frmCalc.txtValor1.value);
    // Valor02 = parseInt(document.getElementById("txtValor2").value);

    Valor01 = document.getElementById("txtValor1");
    Valor02 = document.getElementById("txtValor2");
    result = document.getElementById("result")

    if (Valor01.value == "") {
        alert("campo obrigatorio");
        Valor01.focus();
        return false;
    }

    soma = parseInt(Valor01).value + parseInt(Valor02).value;

    result.innerHTML = soma;
}