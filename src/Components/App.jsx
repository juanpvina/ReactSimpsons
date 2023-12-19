import { useState, useEffect } from 'react'
import './App.css'
import Personajes from './Personajes';
import Personaje from './Personaje';
import Paginacion from './Paginacion';
import Buscador from './Buscador';
import Menu from './Menu';
import Footer from './Footer';


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

  const cambiopage = (page) => {
    fetchChars("https://apisimpsons.fly.dev/api/personajes?limit=10&page=" + page);
  }
  const busqueda = (busq) => {
    fetchBusq("https://apisimpsons.fly.dev/api/personajes/find/" + busq);
  }

  const personaje = (pj) => {
    modo = "personaje";
    setPj(pj);
    console.log(pj);
  }

  if (modo == "buscador") {
    componentes = [
      <Menu />,
      <Buscador info={info} busqueda={busqueda} />,
      <Personajes personajes={chars} personaje={personaje} />,
      <Footer />];

  } else if (modo == "paginado") {
    componentes = [
      <Menu />,
      <Personajes personajes={chars} personaje={personaje} />,
      <Paginacion info={info} cambiopage={cambiopage} />,
      <Footer />];
  } else if (modo == "todojunto") {
    componentes = [
      <Menu />,
      <Buscador info={info} busqueda={busqueda} />,
      <Personajes personajes={chars} personaje={personaje} />,
      <Paginacion info={info} cambiopage={cambiopage} />,
      <Footer />];
  } else if (modo == "personaje") {
    componentes = [
      <Menu />,
      <Personaje personaje={pjj} />,
      <Footer />
    ];

  }

  return (
    componentes
  );
}

export default App
