import React from 'react';
import { styles } from '../styles/MeusStyles';
import { addNumeroOuOperador } from '../helpers/EntradaDeDados';
import { resultado } from '../helpers/Resultado';
import {
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
          entrada: "",
          saida: ""
        });
        break;
      case "=":
        var valorDeSaida = resultado(this.state.entrada);
        this.setState({
          saida: valorDeSaida
        });
        break;
      default:
        var valorDeEntrada = addNumeroOuOperador(this.state.entrada, value);
        this.setState({
          entrada: valorDeEntrada
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
          <View style={styles.containerRow}>
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