import React from 'react';
import { 
  createStackNavigator, 
  createAppContainer 
} from "react-navigation";

import HomeScreen from './screens/HomeScreen'
import CientificaScreen from './screens/CientificaScreen'
import SimplesScreen from './screens/SimplesScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Cientifica: CientificaScreen,
    Simples: SimplesScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


