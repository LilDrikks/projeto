import React, { useContext } from 'react'
import DescricaoTarefaH2 from '../User-Tarefas/DescricaoTarefaH2'
import DescricaoTarefaP from '../User-Tarefas/DescricaoTarefaP'
import Fundos from '../User-Tarefas/Fundos'
import BotaoEditar from './BotaoEditar'
import BotaoMenos from './BotaoMenos'
import BotaoDelete from '../User-Tarefas/BotaoDelete'
import './TarefaOpen.scss'
import BotaoTrue from './BotaoTrue'
import BotaoFalse from './BotaoFalse'
import Tarefa from '../User-Tarefas/Tarefa'
import { ContextStorage } from '../../contexts/ContextGlobal'

function TarefaOpen() {

  let indice = window.location.href
  indice = indice.substring(indice.length - 1, indice.length)
  
  const { editar, tarefas, onChange } = useContext(ContextStorage)

  const task = tarefas[indice].task

  return (
    <main className='tarefa_open'>
      <Fundos>
        <header>
          <DescricaoTarefaH2>{task.title}</DescricaoTarefaH2>
          <BotaoMenos />
        </header>
        <Tarefa indice={indice}>
          <article>
            {editar
              ? <input className='inputEdit'
                type="text" placeholder={task.content} onChange={onChange}
                name="tarefa"
                defaultValue={task.content}
              />
              : <DescricaoTarefaP>
                {task.content}
              </DescricaoTarefaP>}
          </article>
          {editar ? <BotaoTrue /> : <BotaoEditar />}
        </Tarefa>
        <footer className='footer'>
          <div className='botoes-true-false'>
            <BotaoTrue indice={indice}/>
            <BotaoFalse />
          </div>
          <BotaoDelete />
        </footer>
      </Fundos>
    </main>
  )
}

export default TarefaOpen