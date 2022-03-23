import {useContext} from 'react'
import { ContextStorage } from '../contexts/ContextGlobal'
import FormLogin from './FormLogin'

import './Login.scss'

export default function Login() {

    const dados = useContext(ContextStorage)
    console.log(dados)

  return (
    <section className='login'>
      <div className='login-black'>
        <FormLogin />
      </div>
    </section>
  )
}
