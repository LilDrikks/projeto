import React, { useContext } from 'react'
import Trash from '../../images/trash.svg'
import { ContextStorage } from '../../contexts/ContextGlobal'
function BotaoDelete({index}) {
  const {tarefas, handleDeleteTask } = useContext(ContextStorage)
  const deletaTarefas = tarefas

  const handleDelete = (event) => {
    console.log(index)
    deletaTarefas.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(deletaTarefas))
    handleDeleteTask(deletaTarefas)
  }
  return (
    <button className='button40px' onClick={handleDelete}>
      <img src={Trash} alt='lixo-deletar' />
    </button>
  )
}

export default BotaoDelete