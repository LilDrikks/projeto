import React from 'react'
import editar from '../../images/editar.svg'
function BotaoEditar() {
  return (
    <button className='botao-editar'>
        <img src={editar} alt="editar-tarefa" />
    </button>
  )
}

export default BotaoEditar