import React from 'react'
import Container from './Container'
import './Container.css'
function FormLogin() {
  return (
        <form className='formLogin'>
            <label htmlFor="login"></label>
            <input type='text' name='user' id='login'/>
            <input type='password' name='password' id='password' />
            <input type="button" className='btnLog' value={'Log in!'} />
        </form>
  )
}

export default FormLogin