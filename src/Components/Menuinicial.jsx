import { useState, useEffect } from 'react'
import './Menuinicial.css'

function Menuinicial({ }) {

  return (
    <div className='menuinicial'>
<form action="/buscador">
         <button type="submit">Ir al Buscador!</button>
      </form> 
      <form action="/paginado">
         <button type="submit">Ir al Paginado!</button>
      </form>
      <form action="/todojunto">
         <button type="submit">Ir a todo junto!</button>
      </form>   </div>
  );
}

export default Menuinicial
