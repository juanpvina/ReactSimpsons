import { useState, useEffect } from 'react'
import './Personajes.css'
import { Link } from 'react-router-dom'

function Personajes( {personajes , personaje} ) {

  const handlePersonaje = (pj) => {
    personaje(pj);
  }

  return (
 
      <div className="cards">
        {
          personajes.map((personaje, i) =>(
            <Link to='/personaje'>
             <div key={i} id={personaje._id} className='card' onClick={() => handlePersonaje(personaje)}>
          <h3>{personaje.Nombre}</h3>

          <img  src={personaje.Imagen} ></img>

          <div className='separador'></div>

          <p>Es {personaje.Genero} y está {personaje.Estado} </p>
          <div className='separador'></div>
          <p> {personaje.Ocupacion}</p>
        </div>
        </Link>
      ))}
      </div>

  );
}

export default Personajes