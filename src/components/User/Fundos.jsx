import React from 'react'

function Fundos({children}) {
  return (
    <div className='fundobranco'>
        <div className='fundopreto'>
            {children}
        </div>
    </div>
  )
}

export default Fundos