import React from 'react'

function Tarefa({children, status}) {

  return (
    <li className={"tarefa"}  style={status ? {borderTop: '2px solid green'} : {borderTop: '2px solid red'}}>
      {children}
    </li>
  )
}

export default Tarefa