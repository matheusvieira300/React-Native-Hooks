import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";


export default function Produtores({ topo: Topo}) { //isso tudo é um Hooks
    const [titulo, lista] = useProdutores();//use produtores que retorna o titulo e a lista

    //função
    const TopoLista = () =>{
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }

    // utilizando flatlist que seria uma lista mais otimizada e realizando desconstrução no item
    return <FlatList
     data={lista}
     renderItem={({ item }) => <Produtor {...item} />}
     keyExtractor={({nome}) => nome}//chave única
     ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16, //margin na esquerda e direita
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})