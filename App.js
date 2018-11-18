import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends React.Component {
  render() {
    return (
      <View style={styles.containerResultado}>
        <View style={styles.boxEntradaDeNumeros}></View>
        <View style={styles.boxResultado}></View>
        <View style={styles.containerOperadores}>
          <View style={styles.containerNumeros}>
            <View style={styles.boxNumeros}>
              <Button title="/" style={styles.btnOperador} />
              <Button title="*" style={styles.btnOperador} />
              <Button title="-" style={styles.btnOperador} />
              <Button title="+" style={styles.btnOperador} />
              <Button title="=" style={styles.btnOperador} />
            </View>
          </View>
          <View style={styles.boxOperadores}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // RESULTADO
  containerResultado: {
    backgroundColor: '#4286f4',
    flexDirection: 'column',
    flex: 1
  },
  boxResultado: {
    backgroundColor: '#c92249',
    height: 100
  },
  boxEntradaDeNumeros: {
    backgroundColor: '#64ce3d',
    height: 100
  },

  // NÚMEROS
  containerNumeros: {
    backgroundColor: '#4286f4',
    flexDirection: 'column',
    flex: 1
  },
  boxNumeros: {
    backgroundColor: '#a811af',
    flex: 1,
    flexDirection: 'row'
  },
  btnNumero: {
    backgroundColor: '#494bd1',
    flex: 1
  },

  // OPERADORES
  containerOperadores: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  boxOperadores: {
    backgroundColor: '#aaa817',
    flex: 0.3,
    flexDirection: 'column'
  },
  btnOperador: {
    backgroundColor: '#494bd1',
    flex: 1
  }
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);

