import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class SimplesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CalculadoraSimples</Text>
      </View>
    );
  }
}

export default SimplesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
