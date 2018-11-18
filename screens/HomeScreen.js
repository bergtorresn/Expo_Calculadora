import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Calculadora Simples" onPress={() => this.props.navigation.navigate('Simples')} />
        <Button title="Calculadora Ciêntifica" onPress={() => this.props.navigation.navigate('Simples')} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


