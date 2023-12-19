import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='menu'>

            <Link to={"/"}> <button type="submit">Volver</button></Link>

            <Link to="/buscador">
                <button type="submit">Ir al Buscador!</button>
            </Link>
            <Link to="/paginado">
                <button type="submit">Ir al Paginado!</button>
            </Link>
            <Link to="/todojunto">
                <button type="submit">Ir a todo junto!</button>
            </Link>  
            
         </div>
    )
}

export default Menu