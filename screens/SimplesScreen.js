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
        this.setState({
          entrada: ""
        });
        break;
      case "=":
        var resultado = eval(this.state.entrada);
        this.setState({
          saida: resultado
        }, function () {
          console.log(this.state.saida);
        });
        break;
      default:
        var equacao = this.state.entrada + value;
        this.setState({
          entrada: equacao
        }, function () {
          console.log(this.state.entrada);
        });
    }
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
          <View style={styles.containerRow5}>
            <Button title="AC" onPress={() => this._onPressButton('AC')} />
          </View>
          <View style={styles.containerRow4}>
            <Button title="7" onPress={() => this._onPressButton(7)} />
            <Button title="8" onPress={() => this._onPressButton(8)} />
            <Button title="9" onPress={() => this._onPressButton(9)} />
            <Button title="/" onPress={() => this._onPressButton('/')} />
          </View>
          <View style={styles.containerRow3}>
            <Button title="4" onPress={() => this._onPressButton(4)} />
            <Button title="5" onPress={() => this._onPressButton(5)} />
            <Button title="6" onPress={() => this._onPressButton(6)} />
            <Button title="*" onPress={() => this._onPressButton('*')} />
          </View>
          <View style={styles.containerRow2}>
            <Button title="1" onPress={() => this._onPressButton(1)} />
            <Button title="2" onPress={() => this._onPressButton(2)} />
            <Button title="3" onPress={() => this._onPressButton(3)} />
            <Button title="+" onPress={() => this._onPressButton('+')} />
          </View>
          <View style={styles.containerRow1}>
            <Button title="0" onPress={() => this._onPressButton(0)} />
            <Button title="-" onPress={() => this._onPressButton('-')} />
            <Button title="." onPress={() => this._onPressButton('.')} />
          </View>
          <View style={styles.containerRow0}>
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
  containerRow5: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#ffa154" // laranja
  },
  containerRow4: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#852ecc" // roxo
  },
  containerRow3: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#2dcc75" // verde
  },
  containerRow2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#aa19b5" // rosa
  },
  containerRow1: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#d8d83a" // amarelo
  },
  containerRow0: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#565656" // cinza
  }
});
