
const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*()|{}[]_";

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumberCase() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbolsCase() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function gerarSenha() {
    const xs = [];

    if (upperEl.checked) {
        xs.push(getUpperCase());
    }
    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if (numberEl.checked) {
        xs.push(getNumberCase());
    }
    if (symbolEl.checked) {
        xs.push(getSymbolsCase());
    }

    if (xs.length === 0) return "Selecione uma opção";
    return xs[Math.floor(Math.random() * xs.length)]
}

function criarSenha() {
    const len = lengthEl.value;
    let senha = '';
    for (i = 0; i < len; i++) {
        senha += gerarSenha();
    }
    pwEl.innerHTML = senha;
}

generateEl.addEventListener("click", criarSenha)