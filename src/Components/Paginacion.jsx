import { useState, useEffect } from 'react'
import './Paginacion.css'

function Paginacion({ info, cambiopage }) {

  console.log(info);
  const handleRetroceder = () => {
    cambiopage(info.prevPage)
  }
  const handleAvanzar = () => {
    cambiopage(info.nextPage)
  }
  const handleInput = () => {
    cambiopage(numeropag.value)
  }

  return (
    <div>
      <div className='paginacion'>
        <div>{info.hasPrevPage ? (<button onClick={handleRetroceder}> Pagina Previa</button>) :
          (<button> Primer Pagina </button>)}</div>
        <div className="pagina"> <input type="text" onChange={handleInput} value={info.page} id="numeropag"/> </div>
        <div>{info.hasNextPage ? (<button onClick={handleAvanzar}> Pagina Proxima</button>) :
          (<button> Ultima Pagina</button>)}</div>

      </div>
    </div>
  );
}

export default Paginacion