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
            <Saudacoes>Hello let's add your tasks</Saudacoes>
            <InputsAddTarefas />
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
                
                <p className='logodrikks'>@Designdrikks</p>
        <div className='svgBotton'>
            <svg width="514" height="567" viewBox="0 0 514 567" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 68C156.753 150.144 415.111 74.5114 425 154.902V497H90V281.623V68Z" stroke="#921D86"/>
            <path d="M2 262.38C101.647 268.094 236.238 12.3429 294.524 61.3568L512.773 302.894L275.691 565.273L138.286 413.208L2 262.38Z" stroke="#5D5F27"/>
            </svg>
        </div>
            </ul>
        </Fundos>
    
    </main>
  )
}

export default Tarefas  