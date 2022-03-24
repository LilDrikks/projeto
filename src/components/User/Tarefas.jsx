import React from 'react'
import Saudacoes from '../Home/Saudacoes'
import Fundos from './Fundos'
import InputsAddTarefas from './InputsAddTarefas'
import BotaoDelete from './BotaoDelete'
import BotaoMais from './BotaoMais'
import DescricaoTarefa from './DescricaoTarefa'
import DescricaoTarefaH2 from './DescricaoTarefaH2'
import DescricaoTarefaP from './DescricaoTarefaP'
import Tarefa from './Tarefa'

import './Tarefas.scss'
function Tarefas() {

  return (
    <main className='tarefas'>
        <Fundos>
           <header className='header' >
           <Saudacoes>Hello let's add your tasks</Saudacoes>
            <InputsAddTarefas />
           </header>
            <ul className='containertarefas'>
                <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                <DescricaoTarefa>
                <DescricaoTarefaH2>read a book...</DescricaoTarefaH2>
                <DescricaoTarefaP>books for read: clean code...</DescricaoTarefaP>
                </DescricaoTarefa>
                <div className='divbuttons'>
                    <BotaoMais />
                    <BotaoDelete />
                </div>
                </Tarefa>
                <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                <DescricaoTarefa>
                <DescricaoTarefaH2>learning prog...</DescricaoTarefaH2>
                <DescricaoTarefaP>React, Node and MongoDB...</DescricaoTarefaP>
                </DescricaoTarefa>
                <div className='divbuttons'>
                    <BotaoMais />
                    <BotaoDelete />
                </div>
                </Tarefa>
                <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                <DescricaoTarefa>
                <DescricaoTarefaH2>read a book...</DescricaoTarefaH2>
                <DescricaoTarefaP>books for read: clean code...</DescricaoTarefaP>
                </DescricaoTarefa>
                <div className='divbuttons'>
                    <BotaoMais />
                    <BotaoDelete />
                </div>
                </Tarefa>
                <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                <DescricaoTarefa>
                <DescricaoTarefaH2>learning prog...</DescricaoTarefaH2>
                <DescricaoTarefaP>React, Node and MongoDB...</DescricaoTarefaP>
                </DescricaoTarefa>
                <div className='divbuttons'>
                    <BotaoMais />
                    <BotaoDelete />
                </div>
                </Tarefa>
                <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                <DescricaoTarefa>
                <DescricaoTarefaH2>read a book...</DescricaoTarefaH2>
                <DescricaoTarefaP>books for read: clean code...</DescricaoTarefaP>
                </DescricaoTarefa>
                <div className='divbuttons'>
                    <BotaoMais />
                    <BotaoDelete />
                </div>
                </Tarefa>
                <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                <DescricaoTarefa>
                <DescricaoTarefaH2>learning prog...</DescricaoTarefaH2>
                <DescricaoTarefaP>React, Node and MongoDB...</DescricaoTarefaP>
                </DescricaoTarefa>
                <div className='divbuttons'>
                    <BotaoMais />
                    <BotaoDelete />
                </div>
                </Tarefa>
                
               
            </ul>
        </Fundos>
        <p className='logodrikks'>@Designdrikks</p>
    </main>
  )
}

export default Tarefas  