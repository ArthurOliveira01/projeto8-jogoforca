import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App(){
    const sapo = {nome: 'sapo', numero: 11};

    return(
    <div>
        <Jogo props />
        <Letras />
    </div>
    );
}