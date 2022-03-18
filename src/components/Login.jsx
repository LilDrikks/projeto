import {useContext} from 'react'
import { ContextStorage } from '../contexts/ContextGlobal'
export default function Login() {

    const dados = useContext(ContextStorage)
    console.log(dados)
  return (
    <div>
        <h1>hello</h1>
    </div>
  )
}
