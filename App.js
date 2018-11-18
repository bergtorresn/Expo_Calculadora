import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import CientificaScreen from './screens/CientificaScreen'
import SimplesScreen from './screens/SimplesScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Cientifica: CientificaScreen,
  Simples: SimplesScreen
})
