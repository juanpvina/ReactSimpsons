import { useState, useEffect } from 'react'
import './Menuinicial.css'
import { Link } from 'react-router-dom'
import Footer from './Footer';

function Menuinicial({ cambiopage }) {

    
 //DEPRECATED 
 
    return (
        <div className='menuinicial'>

            <Link to="/buscador">
                <button type="submit">Ir al Buscador!</button>
            </Link>
            <Link to="/paginado">
                <button type="submit">Ir al Paginado!</button>
            </Link>
            <Link to="/todojunto">
                <button type="submit">Buscador + Paginado!</button>
            </Link>
            <Link to="/todosloschar">
                <button type="submit">Mostrar todos los personajes!</button>
            </Link>

    
        </div>

    );
}

export default Menuinicial
