import React from 'react'
import {Link} from 'react-router-dom'
import Mais from '../../images/mais.svg'
function BotaoMais() {
  return (
    <Link to='/task' className='linkMais'>
      <button className='button40px'>
        <img src={Mais} alt='Mais'/>
      </button>
    </Link>
  )
}

export default BotaoMais