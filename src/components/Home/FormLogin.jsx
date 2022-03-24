import React from 'react'
import Saudacoes from './Saudacoes'
import {Link} from 'react-router-dom'
function FormLogin() {
  return (
    <>
      <Saudacoes>Good Morning!</Saudacoes>
      <form className='formLogin'>
        <label htmlFor="login"></label>
        <input type='text' name='user' id='login'/>
        <input type='password' name='password' id='password' />
       <Link to="/user-tasks">
        <input type="button" className='btnLog' value={'GO!'} />
       </Link> 
      </form>
    </>
  )
}

export default FormLogin