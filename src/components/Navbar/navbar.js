import React, { Component } from 'react'
import { Content, Header, Body, Right, Button, Title, Icon, Left } from 'native-base';
import { withNavigation } from 'react-navigation';

// Components

class Navbar extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        return (
            <Header style={{ backgroundColor: '#212121' }} androidStatusBarColor={'#000'}>
                <Left>
                    <Button onPress={() => this.props.navigation.goBack()} transparent>
                        <Icon type="AntDesign" name="arrowleft"
                              style={{
                                  color: '#fff'
                              }}
                        />
                    </Button>
                </Left>

                <Body style={{ alignItems: "flex-end" }}>
                    <Title style={{ alignSelf: "center", fontWeight: 'bold' }}>{this.props.routerName}</Title>
                </Body>

                <Left />
            </Header>
        );
    }
}

export default withNavigation(Navbar);