import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
    quantidade: quantidadeAntiga, //recebendo a quantidade e será tratada como quantidade antiga
    editavel = false, //para quando as estrelas estiverem pequenas não serem clicáveis
    grande = false, //originalmente ela não será grande mais virá a ser
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);//para tornar alterável a quantidade
    const estilos = estilosFuncao(grande);

    const getImage = (index) => {
        if(index < quantidade) { //se o i for menor que a quantidade a estrela será retornada 
        return estrela;
    }
    return estrelaCinza;
}

    const RenderEstrelas = () => {//função
        const listaEstrelas = [];
        for (let i = 0; i< 5; i++){
            listaEstrelas.push( //push adicionar no fim da lista algum item
            <TouchableOpacity
                key={i}
                onPress={() => setQuantidade(i + 1)} //0 + 1
                disabled={!editavel} //negação
                >
                <Image source={getImage(i)} style={estilos.estrela} />
                </TouchableOpacity>
            );
        }
        return listaEstrelas;
    }
    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

// = () => significa que é uma função.
const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
    estrela: {
        width: grande ? 36 : 12,//se for grande true 36 senão 12
        height: grande ? 36: 12,
        marginRight: 2,
    }
})