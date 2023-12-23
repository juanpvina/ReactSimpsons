import { useState, useEffect } from 'react'
import './Paginacion.css'

function Paginacion({ info, cambiopage }) {
  const handleRetroceder = () => {
    cambiopage(info.prevPage,10)
  }
  const handleAvanzar = () => {
    cambiopage(info.nextPage,10)
  }
  const handleInput = () => {
    cambiopage(numeropag.value,10)
  }

  return (
    <div className='prepaginacion'>
      <div className='paginacion'>
        <div>{info.hasPrevPage ? (<button onClick={handleRetroceder}> Pagina Previa</button>) :
          (<button> Primer Pagina </button>)}</div>

        <div className="pagina"> <input type="text" onChange={handleInput} value={info.page} id="numeropag"/> </div>

        <div>{info.hasNextPage ? (<button onClick={handleAvanzar}> Pagina Proxima</button>) :
          (<button> Ultima Pagina</button>)}</div><br/>

      </div>
      <p>(podes ingresar el numero de pagina!!)</p>
    </div>
  );
}

export default Paginacion