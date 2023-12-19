import { useState, useEffect } from 'react'
import './App.css'
import Personajes from './Personajes';
import Paginacion from './Paginacion';
import Buscador from './Buscador';


function App({modo}) {
  console.log(modo);
  let componentes = [];
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
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

  const cambiopage = (page) => {
    fetchChars("https://apisimpsons.fly.dev/api/personajes?limit=10&page=" + page);
  }
  const busqueda = (busq) => {
    fetchBusq("https://apisimpsons.fly.dev/api/personajes/find/" + busq);
  }

  

  if (modo=="buscador") {
      componentes=[
  <Buscador info={info} busqueda={busqueda} />,
  <Personajes personajes={chars} />];
  busqueda('simpson');
      
    }else if (modo=="paginado"){
componentes=[
  <Personajes personajes={chars} />,
  <Paginacion info={info} cambiopage={cambiopage}/>];
}else if (modo=="todojunto"){
    componentes=[
    <Buscador info={info} busqueda={busqueda} />,
    <Personajes personajes={chars} />,
    <Paginacion info={info} cambiopage={cambiopage}/>];
  }

  return(
    componentes
  );
}

export default App
