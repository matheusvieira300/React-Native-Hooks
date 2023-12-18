import produtores from "../mocks/produtores";
import topo from "../mocks/topo";

export const carregaProdutores = () => { //deixando como método.
    return produtores;
}

export const carregaTopo = () => {// para importar os métodos como se fosse uma requisição.
    return topo;
}