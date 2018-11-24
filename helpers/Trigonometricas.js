function operacaoFatorial(dadosDeEntrada) {
    if (dadosDeEntrada < 0) {
        var resultado = -1;
        return resultado;
    } else if (dadosDeEntrada == 0) {
        var resultado = 1;
        return resultado;
    } else {
        var tmp = dadosDeEntrada;
        while (dadosDeEntrada-- > 2) {
            tmp *= dadosDeEntrada;
        }
        return tmp;
    }
}

function operacaoCosseno(dadosDeEntrada) {
    var cosseno = Math.cos(dadosDeEntrada);
    return cosseno;
}
function operacaoSeno(dadosDeEntrada) {
    var seno = Math.sin(dadosDeEntrada);
    return seno;
}
function operacaoTangente(dadosDeEntrada) {
    var tangente = Math.tan(dadosDeEntrada);
    return tangente;
}
function operacaoRaizQuadrada(dadosDeEntrada) {
    var raiz = Math.sqrt(dadosDeEntrada);
    return raiz;
}

export { operacaoCosseno, operacaoSeno, operacaoFatorial, operacaoRaizQuadrada, operacaoTangente };