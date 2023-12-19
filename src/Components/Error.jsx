import React from 'react'
import { useRouteError } from 'react-router-dom';
import './Error.css';
import Menu from './Menu';

function Error() {
    const err= useRouteError();
    console.error(err);
  return (
    <>
    <Menu />
    <div className='error'><img src="./assets/img/404.png"></img>
    <br/>
    <p className='errortxt'>Error Page { err.statusText }, { err.message }</p></div>
    </>
  );
}

export default Error