import { useState } from "react";
import palavras from "./palavras";
import App from "./App";



export default function Jogo(props){
    const [misteriosa, setMisteriosa] = useState(
        palavras[Math.floor(Math.random() * palavras.length)]
    );
    const [palpites, setPalpites] = useState([]);
    const [erro, SetErro] = useState(0);
    const [over, setOver] = useState(false);
    const [vitoria, setVitoria] = useState(false);
    function start(){
        let help = misteriosa.length;
        let under = "";
        let auxiliar = 0;
        while(auxiliar < help){
            under += "_ ";
            auxiliar ++;
        }
        setTestes(under);
    }
    const [testes, setTestes] = useState("");
    return(
    <div>
        <div class="container">
          <div class="forca">
            <img src="assets/img/forca0.png" alt=""></img>
          </div>
          <button onClick={start} class="start-game">Escolher Palavra</button>
        </div>
        <p class="underscore">{testes}</p>
    </div>
    
    );
}
