import React, { useReducer, useMemo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estrelas from "../../../componentes/Estrelas";


const distanciaEmMetros = (distancia) => {
    console.log('distanciaEmMetros')
    return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas}) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado, // selecionado é o estado atual, e depois ele é invertido/negado
        false
    );

    //useMemo salva na memória um valor para não ser recarregado várias vezes sem necessidade
    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia),
     [distancia],//passando como pârametro a distância
    );
        
    return <TouchableOpacity
     style={estilos.cartao}
     onPress={inverterSelecionado}//para inverter essa seleção ao clicar de true para false e vice versa
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
            <Text style={estilos.distancia}>{ distanciaTexto }</Text>
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