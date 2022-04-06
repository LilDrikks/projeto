import React, { useContext } from 'react'
import Trash from '../../images/trash.svg'
import { ContextStorage } from '../../contexts/ContextGlobal'
function BotaoDelete({index}) {
  const {tarefas, setTarefas } = useContext(ContextStorage)
  const deletaTarefas = tarefas
  console.log(deletaTarefas)
  const handleDelete = (event) => {
    console.log(event.target)
    console.log(index)
    deletaTarefas.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(deletaTarefas))
    setTarefas(deletaTarefas)
  }
  return (
    <button className='button40px' onClick={handleDelete}>
      <img src={Trash} alt='lixo-deletar' />
    </button>
  )
}

export default BotaoDelete