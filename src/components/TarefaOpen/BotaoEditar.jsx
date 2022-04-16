import React, { useContext } from 'react'
import editarSvg from '../../images/editar.svg'
import { ContextStorage } from '../../contexts/ContextGlobal'
function BotaoEditar() {
  const {editar, setEditar} = useContext(ContextStorage)
  const inputEditar = ()=> {
    editar ? setEditar(false) : setEditar(true)
  }
  return (
    <button className='botao-editar' onClick={inputEditar}>
        <img src={editarSvg} alt="editar-tarefa" />
    </button>
  )
}

export default BotaoEditar