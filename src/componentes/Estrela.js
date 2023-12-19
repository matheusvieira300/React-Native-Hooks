import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if(preenchida) { //se preenchida
        return estrela;
    }
    return estrelaCinza;
}

    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
    >
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}

// = () => significa que é uma função.
const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,//se for grande true 36 senão 12
        height: grande ? 36: 12,
        marginRight: 2,
    }
});