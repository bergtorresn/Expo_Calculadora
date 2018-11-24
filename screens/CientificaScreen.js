import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class CientificaScreen extends React.Component {

  static navigationOptions = {
    title: 'Calc Científica',
  };

  constructor(props) {
    super(props);

    this.state = { saida: "", entrada: "" };
    this._onPressNumero = this._onPressButton.bind(this);
  }

  _onPressButton(value) {
    switch (value) {
      case "AC":
        this._limparExibicao();
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
    if (dadosDeEntrada.length > 0) {
      var ultimoCharacter = dadosDeEntrada.slice(-1);
      if (this._isOperador(ultimoCharacter) && this._isOperador(value)) {
        dadosDeEntrada = dadosDeEntrada.replace(/.$/, value);
        this.setState({
          entrada: dadosDeEntrada
        });
      } else {
        var equacao = dadosDeEntrada + value;
        this.setState({
          entrada: equacao
        });
      }
    } else {
      if (this._isOperador(value)) {
        return;
      } else {
        var equacao = dadosDeEntrada + value;
        this.setState({
          entrada: equacao
        });
      }
    }
  }

  _operacaoFat() {
    var dadosDeEntrada = parseFloat(this.state.entrada);
    if (dadosDeEntrada < 0) {
      var resultado = -1;
      this.setState({
        saida: resultado
      });
    } else if (dadosDeEntrada == 0) {
      var resultado = 1;
      this.setState({
        saida: resultado
      });
    } else {
      var tmp = dadosDeEntrada;
      while (dadosDeEntrada-- > 2) {
        tmp *= dadosDeEntrada;
      }
      this.setState({
        saida: tmp
      });
    }
  }

  _operacaoCos() {
    var dadosDeEntrada = this.state.entrada;
    var cosseno = Math.cos(dadosDeEntrada);
    this.setState({
      saida: cosseno
    });
  }
  _operacaoSen() {
    var dadosDeEntrada = this.state.entrada;
    var seno = Math.sin(dadosDeEntrada);
    this.setState({
      saida: seno
    });
  }
  _operacaoTan() {
    var dadosDeEntrada = this.state.entrada;
    var tangente = Math.tan(dadosDeEntrada);
    this.setState({
      saida: tangente
    });
  }
  _operacaoSqrt() {
    var dadosDeEntrada = this.state.entrada;
    var raiz = Math.sqrt(dadosDeEntrada);
    this.setState({
      saida: raiz
    });
  }

  _resultado() {
    var dadosDeEntrada = this.state.entrada;
    if (dadosDeEntrada.length > 0) {
      var ultimoCharacter = dadosDeEntrada.slice(-1);

      if (this._isOperador(ultimoCharacter)) {
        //Caso o último character seja um operardo, o character será removido
        dadosDeEntrada = dadosDeEntrada.substring(0, dadosDeEntrada.length - 1);
      }
      var resultado = eval(dadosDeEntrada);
      this.setState({
        saida: resultado
      });
    }
  }

  _limparExibicao() {
    this.setState({
      entrada: "",
      saida: ""
    });
  }

  _isOperador(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/' || value == '.') {
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
            <Button title="sen" onPress={() => this._operacaoSen()} />
          </View>
          <View style={styles.containerRow}>
            <Button title="4" onPress={() => this._onPressButton(4)} />
            <Button title="5" onPress={() => this._onPressButton(5)} />
            <Button title="6" onPress={() => this._onPressButton(6)} />
            <Button title="*" onPress={() => this._onPressButton('*')} />
            <Button title="cos" onPress={() => this._operacaoCos()} />
          </View>
          <View style={styles.containerRow}>
            <Button title="1" onPress={() => this._onPressButton(1)} />
            <Button title="2" onPress={() => this._onPressButton(2)} />
            <Button title="3" onPress={() => this._onPressButton(3)} />
            <Button title="+" onPress={() => this._onPressButton('+')} />
            <Button title="tan" onPress={() => this._operacaoTan()} />
          </View>
          <View style={styles.containerRow}>
            <Button title="0" onPress={() => this._onPressButton(0)} />
            <Button title="." onPress={() => this._onPressButton('.')} />
            <Button title="-" onPress={() => this._onPressButton('-')} />
            <Button title="√" onPress={() => this._operacaoSqrt()} />

          </View>
          <View style={styles.containerRow}>
            <Button title="=" onPress={() => this._onPressButton('=')} />
            <Button title="X!" onPress={() => this._operacaoFat()} />
          </View>
        </View>
      </View>
    );
  }
}

export default CientificaScreen;

const styles = StyleSheet.create({
  txt: {
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 20
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