import React, { Component } from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import { Container, Content, Card, CardItem, Button, Icon } from 'native-base'
import { withNavigation } from 'react-navigation';

// components
import Tabmenu from '../../components/TabMenu/Tabmenu'


// helpers
import Recursos from '../../helpers/Recursos'
import Nabar from "../../components/Navbar/navbar";

class Loja extends Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props);

        this.state = {
            bookList: Recursos,
            showDetails: false
        }
    }

    render () {

        let { width, height } = Dimensions.get('window')

        return (
            <Container>
                <Nabar routerName={"Loja"} />
                <Content>
                    <View style={{ alignSelf: "center", marginTop: 20, marginBottom: 20}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#f7ab21" }}>Popular</Text>
                    </View>

                    <FlatList
                        data={this.state.bookList}
                        renderItem={({item}) => (
                            <Card>
                                <CardItem cardBody style={{ backgroundColor: "#eee"}}>
                                    <View style={{ width: 150, height: 220, }}>
                                        <Image
                                            style={{ resizeMode: 'contain', paddingLeft: 20, height: 200, width: null, flex: 1}}
                                            source={item.imagem}
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 10, paddingRight: 10, }}>
                                        <Text style={{ fontWeight: 'bold', flexShrink: 1, width: width - 160 }}>{item.titulo}</Text>
                                        <Text style={{ width: width - 200 }}>{item.genero}</Text>
                                        <Text>{item.faixaEtaria}</Text>
                                        <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
                                            { item.classificacao.map(o => {
                                                return (
                                                    <Icon style={{ color: "#f7ab21", marginTop: 10, marginBottom: 10, }} type="AntDesign" name="star" />
                                                )
                                            })}
                                        </View>
                                        <Button
                                            transparent
                                            style={{ borderRadius: 20, borderColor: "#f7ab21", borderWidth: 1.5, padding: 10, alignItems: "center"}}
                                            onPress={() => this.props.navigation.navigate("Detalhes", {
                                                produto: item
                                            })}
                                        >
                                            <Icon type="AntDesign" name="download" style={{color: '#f7ab21', right: 5,}} />
                                            <Text style={{ fontSize: 11, color: "#f7ab21", right: 10,}}>DOWNLOAD PRÉVIA</Text>
                                        </Button>
                                    </View>
                                </CardItem>
                            </Card>
                        )}
                        keyExtractor={(item, index) => index}
                    />

                    <Icon type="AntDesign" name="reload1" style={{ color: "#f7ab21", alignSelf: "center", marginTop: 10, marginBottom: 10 }} />

                </Content>
                <Tabmenu />
            </Container>
        );
    }
}

export default withNavigation(Loja)