import React from 'react'
import Saudacoes from './Saudacoes'

function FormLogin() {
  const userTask = () => {
    return (
      window.location.href = "http://localhost:3000/user-tasks"
  )}
  return (
    <>
      <Saudacoes>Good Morning!</Saudacoes>
      <form className='formLogin'>
        <label htmlFor="login"></label>
        <input type='text' name='user' id='login'/>
        <input type='password' name='password' id='password' />
        <input type="button" className='btnLog' value={'GO!'} onClick={userTask}/>
      </form>
    </>
  )
}

export default FormLogin