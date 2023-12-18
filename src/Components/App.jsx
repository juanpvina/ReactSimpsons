import { useState, useEffect } from 'react'
import './App.css'
import Personajes from './Personajes';
import Paginacion from './Paginacion';

function App() {
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
  useEffect(() => {
    fetchChars(initURL);
  }, []);

  const cambiopage = (page)=>{
    fetchChars("https://apisimpsons.fly.dev/api/personajes?limit=20&page="+page)
  }
  return (
    <>
      <Paginacion info={info} cambiopage={cambiopage} />
      <Personajes personajes={chars} />
    </>
  )
}

export default App
