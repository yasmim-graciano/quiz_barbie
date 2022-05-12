import Apresentacao from "./Apresentacao";

const Final = (props) => {

    const alteraTela = props.alteraTela;

    return ( 
        <div> 
            <h1> Parabéns </h1>
            <p> Ebaaa :) Você participaria do filme... </p>
            <button onClick={()=> alteraTela(<Apresentacao alteraTela={alteraTela}/>)}> Recomeçar </button>
        </div>
     );
}
 
export default Final;