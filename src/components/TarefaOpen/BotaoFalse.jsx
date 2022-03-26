import React from 'react'
import svgFalse from '../../images/vetor-false-40px.svg'
function BotaoFalse() {
  return (
    <button className='button40px'>
        <img src={svgFalse} alt="tarefa-incompleta" />
    </button>
  )
}

export default BotaoFalse