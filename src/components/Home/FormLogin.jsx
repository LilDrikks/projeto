import React from 'react'
import Saudacoes from './Saudacoes'
import { Link } from 'react-router-dom'
function FormLogin() {
  return (
    <>
      <Saudacoes>Good Morning!</Saudacoes>
      <form className='form-login'>
        <label htmlFor="login"></label>
        <input type='text' name='login' id='login' />
        <label htmlFor="password"></label>
        <input type='password' name='password' id='password' />
        <Link to="/user-tasks">
          <input type="button" className='btnLog' value={'GO!'} />
        </Link>
      </form>
    </>
  )
}

export default FormLogin