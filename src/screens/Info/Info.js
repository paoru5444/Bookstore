import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Icon } from 'native-base'

// components
import Navbar from '../../components/Navbar/navbar'
import Tabmenu from '../../components/TabMenu/Tabmenu'

class Info extends Component {
    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Container>
                <Navbar routerName={this.props.navigation.getParam("name")} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Icon type="AntDesign" name="meh" style={{ fontSize: 50, marginBottom: 10,}}/>
                    <Text>
                        Página { this.props.navigation.getParam("name") } em construção!
                    </Text>
                </View>
                <Tabmenu />
            </Container>

        )
    }
}
export default Info