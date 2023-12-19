import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Produtor from "./Produtor";
import { carregaProdutores } from "../../../servicos/carregaDados";


export default function Produtores({ topo: Topo}) { //isso tudo é um Hooks
    const [titulo, setTitulo] = useState('');//hook de useState, ao lado esquerdo do array estado e direito o método que altera esse estado
    const [lista, setLista] = useState([]);

    useEffect(() => { //ele vai executar uma vez só quando o componente for carregado
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        // console.log(retorno);//para obter no console os dados dos Produtores
        setLista(retorno.lista);
    }, []);//O UseEffect é uma função que vem do React que, se o segundo parâmetro for uma lista vazia ([]),
    // faz uma ação (apenas uma vez) quando um componente é carregado.

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