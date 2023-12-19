import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

export default function Produtor({ nome, imagem, distancia, estrelas}) {
    const [ selecionado, setSelecionado ] = useState(false); //se o cartão está sendo selecionado ou não
    return <TouchableOpacity
     style={estilos.cartao}
     onPress={() => setSelecionado(!selecionado)}//para inverter essa seleção ao clicar de true para false e vice versa
     >
        {/* acessibilityLabel serve para pessoas com deficiência visual possam ler o texto*/}
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
            <Text style={estilos.nome}>{ nome }</Text>
            <Estrelas 
                quantidade={estrelas}
                editavel={selecionado}
                grande={selecionado}
            />
            </View>
            <Text style={estilos.distancia}>{ distancia }</Text>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8, //margin entre um cartão e outro
        marginHorizontal: 16,
        borderRadius: 6, //para arredondar a borda
        flexDirection: 'row', //para que tudo fique ao lado um do outro

        //Android
        elevation: 4, //para adicionar sombra no cartão

        //IOS
        shadowColor: '#000', //cor da sombra preta
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16, 
    },
    informacoes: {
        flex: 1, //para que cresça até o final do cartão
        flexDirection: 'row',
        justifyContent: 'space-between',// a forma como o elemento vai estar alinhado entre um componente e outro
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
})