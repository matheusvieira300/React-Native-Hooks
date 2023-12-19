import green from '../assets/produtores/green.png'; //importando todas as imagens
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
    //Math.random gera número aleatório entre 0 e 1;
    return Math.floor(Math.random() * (max - min + 1) + min); //arredondando para não virar um valor decimal com o Math.floor
}

const produtores = {
    titulo: "Produtores",
    lista: [//array de Produtores
        {
            nome: "Green",
            imagem: green,
            distancia: gerarNumeroAleatorio(1, 500), //chamando o gerador de distância aleatória
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default produtores; //exportando lista de produtores