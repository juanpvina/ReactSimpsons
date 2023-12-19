import React from 'react'
import { useRouteError } from 'react-router-dom';
import './Error.css';

function Error() {
    const err= useRouteError();
    console.error(err);
  return (
    <div className='error'><img src="./src/assets/img/404.png"></img>
    <br/>
    <p className='errortxt'>Error Page { err.statusText }, { err.message }</p></div>
  );
}

export default Error