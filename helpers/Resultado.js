function resultado(dadosDeEntrada) {
  var ultimoCharacter = dadosDeEntrada.slice(-1);

  if (verificarSeCharacterEOperador(ultimoCharacter)) {
    dadosDeEntrada = dadosDeEntrada.substring(0, dadosDeEntrada.length - 1);
  }
  var resultado = eval(dadosDeEntrada);
  return resultado;
}

function verificarSeCharacterEOperador(value) {
  if (value == '+' || value == '-' || value == '*' || value == '/' || value == '.') {
    return true;
  }
  return false;
}

export { resultado };
