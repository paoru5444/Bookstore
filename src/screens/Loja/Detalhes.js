import React, { Component } from 'react'
import { View, Text, StyleSheet ,Image, ScrollView, Dimensions, Linking } from 'react-native'
import { Container, Content, Button, Icon, Right, Left } from 'native-base'

// Components
import Nabar from "../../components/Navbar/navbar"
import Tabmenu from "../../components/TabMenu/Tabmenu"

class Detalhes extends  Component {
    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super (props)
    }

    render () {

        let produto = this.props.navigation.getParam('produto')
        let { width, height } = Dimensions.get('window')

        return  (
           <Container>
               <Nabar routerName="Loja" />

               <Content>
                   <ScrollView style={{ marginBottom: 20}}>
                       <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20, paddingLeft: 50, paddingRight: 50 }}>
                           <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#f7ab21', textAlign: 'center'}}>{ produto.titulo }</Text>
                       </View>

                       <View style={{ flexDirection: "row", top: 20, paddingRight: 20, marginBottom: 20 }}>
                           <View style={{ width: 180, height: 230, }}>
                               <Image source={produto.imagem} style={{ resizeMode: 'contain', height: 230, width: 180}} />
                           </View>

                           <View>
                               <Text style={styles.titles}>Título original</Text>
                               <Text style={{ fontSize: 14, fontWeight: 'bold', width: 180, }}>{ produto.original }</Text>

                               <Text style={styles.titles}>Gênero</Text>
                               <Text style={{  fontSize: 12, marginTop: 5, width: 180, }}>{ produto.genero }</Text>

                               <Text style={styles.titles}>Autor</Text>
                               <Text style={styles.texto}>{ produto.autor }</Text>

                               <Text style={styles.titles}>Origem</Text>
                               <Text style={styles.texto}>{ produto.origem }</Text>

                               <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
                                   { produto.classificacao.map(o => {
                                       return (
                                           <Icon style={{ color: "#f7ab21", marginTop: 10, marginBottom: 10, }} type="AntDesign" name="star" />
                                       )
                                   })}
                               </View>
                           </View>
                       </View>


                       <View style={ styles.wrapper }>
                           <Text style={styles.titles}>Descrição</Text>
                           <Text style={styles.texto}>{ produto.descricao }</Text>
                       </View>

                       <View style={ styles.wrapper }>
                           <Text style={styles.titles}>Prévia</Text>
                           <Text style={styles.texto}>{ produto.previa }</Text>

                           <Button
                               transparent
                               style={ styles.button }
                               onPress={() => Linking.openURL(produto.comprar)}
                           >
                               <Icon type="AntDesign" name="download" style={{color: '#f7ab21', right: 5,}} />
                               <Text style={{color: '#f7ab21', right: 10,}}>Download Débito</Text>
                           </Button>
                       </View>

                       <View style={ styles.wrapper }>
                           <Text style={styles.titles}>E-book Kindle</Text>

                           <View style={{ alignSelf: "center", alignItems: "center", backgroundColor: "#eee", width: width - 20, padding: 10,}}>
                               <View style={{ flexDirection: "row", }}>
                                   <Text style={{ fontSize: 10, top: 15, right: 5 }}>R$</Text>
                                   <Text style={{ fontSize: 26, fontWeight: "bold"}}>{ produto.preco }</Text>
                               </View>
                               <Text style={{ fontWeight: "bold" }}>Compra no Crédito</Text>
                               <Button
                                   transparent
                                   style={ styles.buttonCompra }
                                   onPress={() => Linking.openURL(produto.comprar)}
                               >
                                   <Icon type="AntDesign" name="shoppingcart" style={{color: '#333', right: 5,}} />
                                   <Text style={{color: '#333', right: 10}}>Comprar Agora</Text>
                               </Button>
                           </View>

                           <View style={ styles.fab }>
                               <Icon
                                   style={{ color: "#f7ab21"}}
                                   type="AntDesign"
                                   name="like2"
                               />
                           </View>
                       </View>
                   </ScrollView>
               </Content>

               <Tabmenu />
           </Container>
        )
    }
}

const styles = StyleSheet.create({
    titles: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1, flexWrap: 'wrap'
    },

    texto: {
        fontSize: 12,
        marginTop: 5,
        flex: 1, flexWrap: 'wrap'
    },

    wrapper: {
        paddingLeft: 10, paddingRight: 10, marginTop: 20,
    },

    button: {
        borderRadius: 20,
        borderColor: "#f7ab21", borderWidth: 1.5,
        padding: 10,
        alignItems: "center", alignSelf: "center",
        top: 10,
        marginTop: 5, marginBottom: 5,
    },

    buttonCompra: {
        borderRadius: 20,
        backgroundColor: "#f7ab21",
        padding: 10,
        alignItems: "center", alignSelf: "center",
        top: 10,
        marginBottom: 10,
    },

    fab: {
        width: 60, height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "#000",
        alignSelf: "flex-end", justifyContent: "center", alignItems: "center",
        marginTop: 5,
    }
})

export default Detalhes