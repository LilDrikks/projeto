import React, { useContext } from 'react'
import Saudacoes from './Saudacoes'
import { Link } from 'react-router-dom'
import { ContextStorage } from '../../contexts/ContextGlobal'

function FormLogin() {
  const dados = useContext(ContextStorage)
 

  const createAcount = () => dados.create ? dados.setCreate(false) : dados.setCreate(true)
  const createisTrue = () => dados.create ? dados.handleCreateAcount() :  dados.handleLogin()
       

      

  return (
    <>
      {dados.create ? <Saudacoes>Create your acount!</Saudacoes>: <Saudacoes>Welcome, let's login</Saudacoes>}
      <form className='form-login'>
        <label htmlFor="login"></label>
        {dados.create ? <input type='text' name='name' id='name' placeholder='name' onChange={dados.onChange} value={dados.name} />: ''}
        <input type='text' name='email' id='login' placeholder='email' onChange={dados.onChange} value={dados.values.email} />
        <label htmlFor="password"></label>
        <input type='password' name='password' placeholder='password' id='password' autoComplete="on" onChange={dados.onChange} value={dados.values.password} />
        {dados.create ?<input type='password' name='confirmPassword' placeholder='confirm your password' id='confirmPassword' autoComplete="on" onChange={dados.onChange} value={dados.values.confirmPassword} />:''}
        
        <Link to="/user-tasks">
          <input type="button" className='btnLog' value={'GO!'} onClick={createisTrue} />
        </Link>
        <input type="button" className='btnLog' value={'Create Acount'} onClick={createAcount} />
      </form>
    </>
  )
}

export default FormLogin