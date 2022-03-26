import React from 'react'


function Tarefa({children, tarefaTrueFalse}) {
  return (
    <li className={"tarefa " +tarefaTrueFalse}>
      {children}
    </li>
  )
}

export default Tarefa