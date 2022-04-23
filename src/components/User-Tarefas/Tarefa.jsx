import React from 'react'

function Tarefa({children}) {

  return (
    <li className={"tarefa"}>
      {children}
    </li>
  )
}

export default Tarefa