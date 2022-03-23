import React from 'react'
import WelcomeGoodboy from './WelcomeGoodboy'

function FormLogin() {
  return (
    <>
      <WelcomeGoodboy>Good Morning!</WelcomeGoodboy>
      <form className='formLogin'>
        <label htmlFor="login"></label>
        <input type='text' name='user' id='login'/>
        <input type='password' name='password' id='password' />
        <input type="button" className='btnLog' value={'GO!'} />
      </form>
    </>
  )
}

export default FormLogin