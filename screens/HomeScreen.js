import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Calculadoras',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Calculadora Simples" onPress={() => this.props.navigation.navigate('Simples')} />
        <Button title="Calculadora Científica" onPress={() => this.props.navigation.navigate('Cientifica')} />
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


