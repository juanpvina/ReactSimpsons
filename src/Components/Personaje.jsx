import React from 'react'
import './Personaje.css'

function Personaje(personaje) {
    console.log(personaje);
    return (
        <div className='personaje'>
           
        {
          
             <div id={personaje.personaje._id} className='cardp'>
          <h3>{personaje.personaje.Nombre}</h3>
          <img  src={personaje.personaje.Imagen} ></img>
          <div className='separador'></div>
          <p>Es {personaje.personaje.Genero} y está {personaje.personaje.Estado} </p>
          <div className='separador'></div>
          <p> {personaje.personaje.Ocupacion}</p>
          <div className='separador'></div>
          <p> {personaje.personaje.Historia}</p>
        </div>

      }
    

        </div>
    )
}

export default Personaje