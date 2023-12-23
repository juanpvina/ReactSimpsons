import { useState, useEffect } from 'react'
import './App.css'
import Personajes from './Personajes';
import Personaje from './Personaje';
import Paginacion from './Paginacion';
import Buscador from './Buscador';
import Menu from './Menu';


function App({ modo }) {
  let componentes = [];
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
  const [pjj, setPj] = useState([]); 

  const initURL = "https://apisimpsons.fly.dev/api/personajes?limit=10";

  function fetchChars(url) {
    fetch(url)
      .then(rta => rta.json())
      .then(data => {
        setChars(data.docs);
        setInfo(data);
      })
  }
  function fetchBusq(url) {
    fetch(url)
      .then(rta => rta.json())
      .then(data => {
        setChars(data.result);
      })
  }
  useEffect(() => {
    fetchChars(initURL);

  }, []);

  const cambiopage = (page,limit) => {
    fetchChars("https://apisimpsons.fly.dev/api/personajes?limit="+limit+"&page=" + page);
  }
  const busqueda = (busq) => {
    fetchBusq("https://apisimpsons.fly.dev/api/personajes/find/" + busq);
  setInfo({
hasNextPage: false,
hasPrevPage: false,
page: 'Src',
  })
  }

  const personaje = (pj) => {
    setPj(pj);
    console.log(pj);
  }

  if (modo == "buscador") {
    componentes = [
      <Menu  cambiopage={cambiopage} menu={true}/>,
      <Buscador info={info} busqueda={busqueda} />,
      <Personajes personajes={chars} personaje={personaje} />
    ];

  } else if (modo == "paginado") {
    componentes = [
      <Menu  cambiopage={cambiopage} menu={true}/>,
      <Personajes personajes={chars} personaje={personaje} />,
      <Paginacion info={info} cambiopage={cambiopage} />
    ];
  } else if (modo == "todojunto") {
    componentes = [
      <Menu  cambiopage={cambiopage} menu={true}/>,
      <Buscador info={info} busqueda={busqueda} />,
      <Personajes personajes={chars} personaje={personaje} />,
      <Paginacion info={info} cambiopage={cambiopage} />
    ];
  } else if (modo == "personaje") {
    
    componentes = [
      <Menu  cambiopage={cambiopage} menu={true}/>,
      <Personaje personaje={pjj} />
    ];

  } else if (modo == "todoslospersonajes") {
    componentes = [
      /*
quise poner acá un

cambiopage(page,limit);

cambiopage(1,100); 

pero lo hace en loop sin parar, igual que en el menú, tuve que buscar alternativas para frenar el tema del loop,
pero me gustaría saber cómo podría llamar una funcion antes de entrar a un menú, por ejemplo..

      */
      <Menu  cambiopage={cambiopage} menu={true}/>,
      <Personajes personajes={chars} personaje={personaje} />
    ];

  }else if (modo == "menuinicial") {
    componentes = [
      <Menu  cambiopage={cambiopage} menu={false}/>,
    ];
  } 

  return (
    componentes
  );
}

export default App
