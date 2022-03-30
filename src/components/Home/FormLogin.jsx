import React, { useContext } from 'react'
import Saudacoes from './Saudacoes'
import { Link } from 'react-router-dom'
import { ContextStorage } from '../../contexts/ContextGlobal'

function FormLogin() {
  const dados = useContext(ContextStorage)
  return (
    <>
      <Saudacoes>Good Morning!</Saudacoes>
      <form className='form-login'>
        <label htmlFor="login"></label>
        <input type='text' name='email' id='login' placeholder='email' onChange={dados.onChange} value={dados.values.email} />
        <label htmlFor="password"></label>
        <input type='password' name='password' placeholder='password' id='password' autoComplete="on" onChange={dados.onChange} value={dados.values.password} />
        <Link to="/user-tasks">
          <input type="button" className='btnLog' value={'GO!'} onClick={dados.handleLogin} />
        </Link>
      </form>
    </>
  )
}

export default FormLogin