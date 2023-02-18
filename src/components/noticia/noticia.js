import Imagem from "./imagem.js";
import Texto from "./texto.js";

function Noticia(props){

    return (
        
      <div className="row mt-4">
      
      <div className="col-3">
        <Imagem imagem={props.imagem}/>
        
      </div>
        <div className="col-9">
        <Texto titulo={props.titulo} texto={props.texto}/>
        </div>
      
    </div>
    )

}

export default Noticia;