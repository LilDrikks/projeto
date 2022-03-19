import {useContext} from 'react'
import { ContextStorage } from '../contexts/ContextGlobal'
import FormLogin from './FormLogin'

import './Login.scss'
import WelcomeGoodboy from './WelcomeGoodboy'

export default function Login() {

    const dados = useContext(ContextStorage)
    console.log(dados)

  return (
    <section className='login'>
    <WelcomeGoodboy>Welcome!</WelcomeGoodboy>
    <FormLogin />
    </section>
  )
}
