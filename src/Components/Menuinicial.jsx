import { useState, useEffect } from 'react'
import './Menuinicial.css'
import { Link } from 'react-router-dom'

function Menuinicial({ }) {

    return (
        <div className='menuinicial'>

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
    );
}

export default Menuinicial
