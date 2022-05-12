import React, {useSate} from 'react';

import Final from "./Final";

const Quiz = (props) => {

    const alteraTela = props.alteraTela;

    const [etapa, alteraEtapa] = React.useState(0);

    const [pontos, alteraPontos] = React.useState(0);

    const perguntas = [
        {
            pergunta: "Onde você passaria suas férias?",
            respostas: [ "Praia","Ilha", "Biblioteca", "Studio de Dança", "Shopping"],
            correta: 0
        },
        {
            pergunta: "Se você pudesse ter um super poder qual seria?",
            respostas: [ "Voar","Invisibilidade", "Força", "Respirar embaixo d'água", "Falar com os animais"],
            correta: 3
        }
    ];

    const verificaResposta = (i) => {

        const resposta_correta = perguntas[etapa].correta;
        if (resposta_correta == 1){
            alteraPontos(pontos + 5);
        }
        
        if (etapa + 1 < perguntas.lenght){
            alteraEtapa(etapa + 1);

        }else{
            alteraTela (<Final alteraTela={alteraTela}/>);

        }
    }

    return ( 

        <div>

            <h1> { perguntas[etapa].pergunta } </h1>

            <ul>

                {

                    perguntas[etapa].respostas.map( (r) => {

                        return <li onClick={ () => verificaResposta() }> { r } </li>

                    } )

                }

            </ul>

        </div>   
    );   
}
export default Quiz;


