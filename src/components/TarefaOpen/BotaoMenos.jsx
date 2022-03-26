import React from 'react'
import menos from '../../images/menos.svg'
function BotaoMenos() {
    const tamanhodatela = () => {
        const tamanho = window
        console.log(tamanho)
    }
  return (
    <button className='botao-menos' onClick={tamanhodatela}>
        <img src={menos} alt="menos-voltar" />
    </button>
  )
}

export default BotaoMenos