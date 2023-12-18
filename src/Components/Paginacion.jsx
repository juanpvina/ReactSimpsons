import { useState, useEffect } from 'react'
import './Paginacion.css'

function Paginacion( {info, cambiopage} ) {

console.log(info);
const handleRetroceder=()=>{
    cambiopage(info.prevPage)
}
const handleAvanzar=()=>{
    cambiopage(info.nextPage)
}

  return (
<div className='paginacion'>
<div>{info.hasPrevPage? (<button onClick={handleRetroceder}> Pagina Previa</button>):
 (<button> Primer Pagina </button>)}</div>
<div id="pagina"> {info.page} </div>
 <div>{info.hasNextPage? (<button onClick={handleAvanzar}> Pagina Proxima</button>):
 (<button> Ultima Pagina</button>)}</div>

</div>
  );
}

export default Paginacion