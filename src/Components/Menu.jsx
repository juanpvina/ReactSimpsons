import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu({cambiopage,menu}) {

    const handleAll = () => {
        cambiopage(1,650);
        console.log("click");
      }
      const handleN = () => {
        cambiopage(1,10);
        console.log("click");
      }

      /* 
      tengo un problema al llamar una funcion con variables por ejemplo si hiciera

    const handlePag = (a,b) => {
        cambiopage(a,b);
        console.log("click");
      }

la funcion se llama permanentemente en loop hasta dar errores, la unica forma que no haga loops fue así.

      */

    return (
        <div className={menu ? "menu" : "inicial"}>
            

             {menu? <Link to={"/"}> <button type="submit">Volver</button></Link> : ""}

            <Link to="/buscador">
                <button onClick={handleN}>Ir al Buscador!</button>
            </Link>
            <Link to="/paginado">
                <button onClick={handleN}>Ir al Paginado!</button>
            </Link> 
            <Link to="/todoslospersonajes">
                <button onClick={handleAll}>Ir a todos los personajes!</button>
            </Link>  
            
         </div>
    )
}

export default Menu