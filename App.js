/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Footer, Content } from 'native-base'


// Libs
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Components
import Nabar from "./src/components/Navbar/navbar"
import Tabmenu from  "./src/components/TabMenu/Tabmenu"

// Screens
import Detalhes from "./src/screens/Loja/Detalhes"
import Loja from "./src/screens/Loja/Loja"
import Info from './src/screens/Info/Info'

class App extends Component {
    static navigationOptions = {
        header: null
    }

  render() {
    return (
      <Container>
          <Loja />
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Main: { screen: App },
  Detalhes: {screen: Detalhes},
    Loja: { screen: Loja },
    Info: { screen: Info},
});

export default createAppContainer(AppNavigator);