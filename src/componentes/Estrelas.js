import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga, //recebendo a quantidade e será tratada como quantidade antiga
    editavel = false, //para quando as estrelas estiverem pequenas não serem clicáveis
    grande = false, //originalmente ela não será grande mais virá a ser
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);//para tornar alterável a quantidade

    const RenderEstrelas = () => {//função
        const listaEstrelas = [];
        for (let i = 0; i< 5; i++){
            listaEstrelas.push( //push adicionar no fim da lista algum item
                <Estrela 
                key={i}
                onPress={() => setQuantidade(i + 1)}
                desabilitada={!editavel}
                preenchida={i < quantidade}
                grande={grande} />
            );
        }
        return listaEstrelas;
    }
    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

// = () => significa que é uma função.
const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
})