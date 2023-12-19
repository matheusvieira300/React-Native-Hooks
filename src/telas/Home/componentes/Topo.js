import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import { carregaTopo } from "../../../servicos/carregaDados";
import logo from '../../../assets/logo.png';

 class Topo extends React.Component { //classes em react
    state = {
        topo: {
            boasVindas: '',//deixando vazio
            legenda: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno})//topo recebendo o que está dentro de retorno
        // console.log(retorno);
    }

    componentDidMount () {//executado quando o componente termina de renderizar
        // console.log("Componente Montado");// quando o componente for mando vai ser exibido no console a mensage
        this.atualizaTopo();//estou chamando desta classe com o this. a função da classe 
    }

    render() { //para renderizar
        return <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem}/>
        <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas }</Text>
        <Text style={estilos.legenda}>{ this.state.topo.legenda }</Text>
    </View>
    }
}

//estilos dos textos e imagems
const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6", //cor de fundo
        padding: 16, //margem interna
    },
    imagem: {
        width: 70, //largura
        height: 28, //altura
    },
    boasVindas: {
        marginTop: 24, //espaço do topo
        fontSize: 26, //aumentar o tamanho da fonte
        lineHeight: 42, //tamanho da linha
        fontWeight: 'bold', //para setar a fonte como negrito
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
});

export default Topo;