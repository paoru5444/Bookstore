import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon, Footer, FooterTab, Button } from 'native-base';
import { withNavigation } from 'react-navigation';

import Loja from '../../screens/Loja/Loja'
import Info from '../../screens/Info/Info'

class Tabmenu extends Component {
    constructor (props) {
        super (props)

        this.state = {
            activePage: 0,
            selected: 3
        }
    }

    render() {

        let selected = this.props.navigation.getParam("selected") || 3

        return (
            <Footer>
                <FooterTab style={{ backgroundColor: "#212121" }}>
                    <Button onPress={() => {
                        this.props.navigation.navigate('Info', {
                            name: "Inicio",
                            selected: 1
                        })
                    }}>
                        <Icon type="AntDesign" name="home" style={{ color: selected === 1 ? "#f7ab21" : "#fff" }} />
                        <Text style={{ color: selected === 1 ? "#f7ab21" : "#fff" }}>Inicio</Text>
                    </Button>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Info', {
                                name: "Favoritos",
                                selected: 2
                            })
                        }}
                    >
                        <Icon type="AntDesign" name="like2" style={{ color: selected === 2 ? "#f7ab21" : "#fff" }} />
                        <Text style={{ color: selected === 2 ? "#f7ab21" : "#fff" }}>Favoritos</Text>
                    </Button>

                    <Button
                        style={{ backgroundColor:'#212121' }}
                        active
                        onPress={() => {
                            this.props.navigation.navigate('Loja', {
                                selected: 3
                            })
                        }}>
                        <Icon type="AntDesign" name="isv" style={{ color: selected === 3 ? "#f7ab21" : "#fff" }} />
                        <Text style={{ color: selected === 3 ? "#f7ab21" : "#fff" }}>Loja</Text>
                    </Button>

                    <Button onPress={() => {
                        this.props.navigation.navigate('Info', {
                            name: "Download",
                            selected: 4
                        })
                    }}>
                        <Icon type="AntDesign" name="download" style={{ color: selected === 4 ? "#f7ab21" : "#fff" }} />
                        <Text style={{ color:  selected === 4 ? "#f7ab21" : "#fff" }}>Download</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default withNavigation(Tabmenu)