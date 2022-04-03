import React, { useContext } from 'react'
import Saudacoes from './Saudacoes'
import { Link } from 'react-router-dom'
import { ContextStorage } from '../../contexts/ContextGlobal'

function FormLogin() {
  const {
    create, onChange, name, email, password, confirmPassword,
    setCreate, handleCreateAcount, handleLogin
  } = useContext(ContextStorage)
 

  const createAcount = () => create ? setCreate(false) : setCreate(true)
  const createisTrue = () => create ? handleCreateAcount() :  handleLogin()
       

      

  return (
    <>
      {create ? <Saudacoes>Create your acount!</Saudacoes>: <Saudacoes>Welcome, let's login</Saudacoes>}
      <form className='form-login'>
        <label htmlFor="login"></label>
        {create ? <input type='text' name='name' id='name' placeholder='name' onChange={onChange} value={name} />: ''}
        <input type='text' name='email' id='login' placeholder='email' onChange={onChange} value={email} />
        <label htmlFor="password"></label>
        <input type='password' name='password' placeholder='password' id='password' autoComplete="on" onChange={onChange} value={password} />
        {create ?<input type='password' name='confirmPassword' placeholder='confirm your password' id='confirmPassword' autoComplete="on" onChange={onChange} value={confirmPassword} />:''}
        
        <Link to="/user-tasks">
          <input type="submit" className='btnLog' value={'GO!'} onClick={createisTrue} />
        </Link>
        <input type="button" className='btnLog' value={'Create Acount'} onClick={createAcount} />
      </form>
    </>
  )
}

export default FormLogin