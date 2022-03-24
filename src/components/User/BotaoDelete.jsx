import React from 'react'
import Trash from '../../images/trash.svg'

function BotaoDelete() {
  return (
  <button className='button40px'>
      <img src={Trash} alt='Trash'/>
  </button>)
}

export default BotaoDelete