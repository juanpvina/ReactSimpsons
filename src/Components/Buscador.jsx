import { useState, useEffect } from 'react'
import './Buscador.css'

function Buscador({ info, busqueda }) {

  const handleInput = () => {
    busqueda(cajabusqueda.value)
  }

  return (
    <div className='espacioInicial'>
      <div className='buscador'>
       <p>Buscar:</p><input type="text" onChange={handleInput} name="nombredelacaja" defaultValue="simpson" id="cajabusqueda"/>
      </div></div>
  );
}

export default Buscador