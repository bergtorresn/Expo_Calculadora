function addNumerouOuOperador(dadosDeEntrada, value) {
    var ultimoCharacter = dadosDeEntrada.slice(-1);
    if (verificarSeCharacterEOperador(ultimoCharacter) && verificarSeCharacterEOperador(value)) {
        return dadosDeEntrada = dadosDeEntrada.replace(/.$/, value);
    } else {
        var equacao = dadosDeEntrada + value;
        return equacao;
    }
}

function verificarSeCharacterEOperador(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/' || value == '.') {
        return true;
    }
    return false;
}

export { addNumerouOuOperador };