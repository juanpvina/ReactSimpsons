import { useState, useEffect } from 'react'
import './Paginacion.css'

function Buscador({ info, busqueda }) {

  const handleInput = () => {
    busqueda(cajabusqueda.value)
  }

  return (
      <div className='buscador'>
       Buscar:<input type="text" onChange={handleInput} name="nombredelacaja" defaultValue="buscador" id="cajabusqueda"/>
      </div>
  );
}

export default Buscador