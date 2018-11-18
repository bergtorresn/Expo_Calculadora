import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class CientificaScreen extends React.Component {
  static navigationOptions = {
    title: 'Calc Científica',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Calculadora Científica</Text>
      </View>
    );
  }
}

export default CientificaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
