import { useState, useEffect } from 'react'
import './Personajes.css'

function Personajes( {personajes} ) {


  return (
 
      <div className="cards">
        {
          personajes.map((personaje, i) =>(
        <div key={i} id={personaje._id} className='card'>
          <h3>{personaje.Nombre}</h3>
          <img src={personaje.Imagen} ></img>
          <div className='separador'></div>
          <p>Es {personaje.Genero} y está {personaje.Estado} </p>
          <div className='separador'></div>
          <p> {personaje.Ocupacion}</p>
        </div>
      ))}
      </div>

  );
}

export default Personajes