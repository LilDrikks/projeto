import React, { useContext } from 'react'
import { ContextStorage } from '../../contexts/ContextGlobal'
import svgTrue from '../../images/Vector-true-40px.svg'

function BotaoTrue({indice}) {
  const ind = indice ? indice : 0
  const {setEditar, values} = useContext(ContextStorage)

  const auterarContentTarefa = () => {
    setEditar(false)
    let tarefa_content = values.tarefa ? values.tarefa : document.querySelector('.inputEdit').value
    console.log(tarefa_content)
    const tarefass = JSON.parse(localStorage.getItem('tasks'))
    const tarefa = tarefass[ind]
    const {task} = tarefa
    task.content = tarefa_content
    console.log(task)
    tarefass[ind] = tarefa
    localStorage.setItem('tasks', JSON.stringify(tarefass))
    window.location.reload()
  }
  return (
    <button className='button40px'>
        <img src={svgTrue} alt="tarefa-completa" onClick={auterarContentTarefa} />
    </button>
  )
}

export default BotaoTrue