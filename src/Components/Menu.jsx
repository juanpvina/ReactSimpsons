import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <form action="/">
                <button type="submit">Volver</button>
            </form>
            <form action="/buscador">
                <button type="submit">Ir al Buscador!</button>
            </form>
            <form action="/paginado">
                <button type="submit">Ir al Paginado!</button>
            </form>
            <form action="/todojunto">
                <button type="submit">Ir a todo junto!</button>
            </form>   </div>
    )
}

export default Menu