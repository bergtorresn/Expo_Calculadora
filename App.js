import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerResultado}>
        <View style={styles.boxEntradaDeNumeros}></View>
        <View style={styles.boxResultado}></View>
        <View style={styles.containerOperadores}>
          <View style={styles.containerNumeros}>
            <View style={styles.boxNumeros}></View>
          </View>
          <View style={styles.boxOperadores}></View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerResultado: {
    backgroundColor: '#4286f4',
    flexDirection: 'column',
    flex: 1
  },
  containerOperadores: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  containerNumeros: {
    backgroundColor: '#4286f4',
    flexDirection: 'column',
    flex: 1
  },
  boxEntradaDeNumeros: {
    backgroundColor: '#64ce3d',
    height: 100
  },
  boxResultado: {
    backgroundColor: '#c92249',
    height: 100
  },
  boxNumeros: {
    backgroundColor: '#a811af',
    flex: 1
  },
  boxOperadores: {
    backgroundColor: '#aaa817',
    flex: 0.3
  }
});
