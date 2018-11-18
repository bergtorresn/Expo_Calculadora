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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerEntradaDeOperacoes}>
          <Text>Entrada de operacoes</Text>
        </View>
        <View style={styles.containerResultado}>
          <Text>Resultado das operacoes</Text>
        </View>
        <View style={styles.containerOperadoresEBotoes}>
          <View style={styles.containerRow5}>
            <Button title="AC" />
          </View>
          <View style={styles.containerRow4}>
            <Button title="7" />
            <Button title="8" />
            <Button title="9" />
            <Button title="/" />
          </View>
          <View style={styles.containerRow3}>
            <Button title="4" />
            <Button title="5" />
            <Button title="6" />
            <Button title="*" />
          </View>
          <View style={styles.containerRow2}>
            <Button title="1" />
            <Button title="2" />
            <Button title="3" />
            <Button title="+" />
          </View>
          <View style={styles.containerRow1}>
            <Button title="0" />
            <Button title="." />
            <Button title="-" />
          </View>
          <View style={styles.containerRow0}>
            <Button title="=" />
          </View>
        </View>
      </View>
    );
  }
}

export default SimplesScreen;

const styles = StyleSheet.create({
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
    backgroundColor: "#565656" // amarelo
  }
});
