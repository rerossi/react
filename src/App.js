import React from "react";
import Noticia from "./components/noticia/noticia";


function App() {

  const [noticias, setNoticias] = React.useState([]);


  function carregar() {

    setNoticias([{

      imagem: 'https://picsum.photos/300/200?grayscale',
      titulo: 'Titulo 1',
      texto: '1 Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.'
    },

    {
      imagem: 'https://picsum.photos/300/200',
      titulo: 'Titulo 2',
      texto: '2 Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.'
    }]);

  }

  return (
    noticias.length >= 2 ?
      <div className="container">

        <Noticia imagem={noticias[0].imagem} titulo={noticias[0].titulo} texto={noticias[0].texto} />
        <Noticia imagem={noticias[1].imagem} titulo={noticias[1].titulo} texto={noticias[1].texto} />

      </div>

      :
      <div className="container">

        <button onClick={carregar}>Carregar Noticias</button>
        <div>Sem Noticias</div>

      </div>



  );
}



export default App;
