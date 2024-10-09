function trocar() {
    var lampada = document.getElementById("lampada");

    if (lampada.src.match("bulbon")) {
        lampada.src = "imagens/pic_bulboff.gif";
        document.body.style.backgroundColor = "#000";
    } else {
        lampada.src = "imagens/pic_bulbon.gif";
        document.body.style.backgroundColor = "#fff";
    }
}