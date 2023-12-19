import { useState, useEffect } from "react";

import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores() {
    const [titulo, setTitulo] = useState('');//hook de useState, ao lado esquerdo do array estado e direito o método que altera esse estado
    const [lista, setLista] = useState([]);//use é um Hook


    useEffect(() => { //ele vai executar uma vez só quando o componente for carregado
        const retorno = carregaProdutores();
            retorno.lista.sort( //sort para ordenar a lista da forma desejava
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
            );
        setTitulo(retorno.titulo);
        // console.log(retorno);//para obter no console os dados dos Produtores
        setLista(retorno.lista);
    }, []);//O UseEffect é uma função que vem do React que, se o segundo parâmetro for uma lista vazia ([]),
    // faz uma ação (apenas uma vez) quando um componente é carregado.

    return [titulo, lista]
}