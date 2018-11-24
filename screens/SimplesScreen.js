import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

class SimplesScreen extends React.Component {

  static navigationOptions = {
    title: 'Calc Simples',
  };

  constructor(props) {
    super(props);

    this.state = { saida: "", entrada: "" };
    this._onPressNumero = this._onPressButton.bind(this);
  }

  _onPressButton(value) {
    switch (value) {
      case "AC":
     
        break;
      case "=":
        this._resultado();
        break;
      default:
        this._operacao(value);
    }
  }

  _operacao(value) {
    var dadosDeEntrada = this.state.entrada;
    //Caso o último character seja um operardo, não será possível adicionar outro operador
    if (this._isCharacter(dadosDeEntrada.slice(-1)) && this._isCharacter(value)) {
      return;
    } else {
      var equacao = dadosDeEntrada + value;
      this.setState({
        entrada: equacao
      });
    }
  }

  _resultado() {
    var dadosDeEntrada = this.state.entrada;
    if (this._isCharacter(dadosDeEntrada.slice(-1))) {
      //Caso o último character seja um operardo, o character será removido
      dadosDeEntrada = dadosDeEntrada.substring(0, dadosDeEntrada.length - 1);
    }
    var resultado = eval(dadosDeEntrada);
    this.setState({
      saida: resultado
    });
  }

  _limparExibicao(){
    this.setState({
      entrada: "",
      saida: ""
    });
  }

  _isCharacter(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/' || value == '.') {
      return true;
    }
    return false;
  }

  _isOperador(value) {
    if (value == '+' || value == '*' || value == '/' || value == '.') {
      return true;
    }
    return false;
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerEntradaDeOperacoes}>
          <Text style={styles.txt}>{this.state.entrada}</Text>
        </View>
        <View style={styles.containerResultado}>
          <Text style={styles.txt}>{this.state.saida}</Text>
        </View>
        <View style={styles.containerOperadoresEBotoes}>
          <View style={styles.containerRow}>
            <Button title="AC" onPress={() => this._onPressButton('AC')} />
          </View>
          <View style={styles.containerRow}>
            <Button title="7" onPress={() => this._onPressButton(7)} />
            <Button title="8" onPress={() => this._onPressButton(8)} />
            <Button title="9" onPress={() => this._onPressButton(9)} />
            <Button title="/" onPress={() => this._onPressButton('/')} />
          </View>
          <View style={styles.containerRow}>
            <Button title="4" onPress={() => this._onPressButton(4)} />
            <Button title="5" onPress={() => this._onPressButton(5)} />
            <Button title="6" onPress={() => this._onPressButton(6)} />
            <Button title="*" onPress={() => this._onPressButton('*')} />
          </View>
          <View style={styles.containerRow}>
            <Button title="1" onPress={() => this._onPressButton(1)} />
            <Button title="2" onPress={() => this._onPressButton(2)} />
            <Button title="3" onPress={() => this._onPressButton(3)} />
            <Button title="+" onPress={() => this._onPressButton('+')} />
          </View>
          <View style={styles.btn} style={styles.containerRow}>
            <Button title="0" onPress={() => this._onPressButton(0)} />
            <Button title="." onPress={() => this._onPressButton('.')} />
            <Button title="-" onPress={() => this._onPressButton('-')} />
          </View>
          <View style={styles.containerRow}>
            <Button title="=" onPress={() => this._onPressButton('=')} />
          </View>
        </View>
      </View>
    );
  }
}

export default SimplesScreen;

const styles = StyleSheet.create({

  txt: {
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  btn: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerEntradaDeOperacoes: {
    height: 80,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#4286f4" // azul
  },
  containerResultado: {
    height: 80,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#b51818" // vermelho
  },
  containerOperadoresEBotoes: {
    flex: 1,
    flexDirection: 'column'
  },
  containerRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#ffa154" // laranja
  }
});
