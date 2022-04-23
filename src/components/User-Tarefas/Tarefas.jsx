import React, { useContext } from 'react'
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
import { ContextStorage } from '../../contexts/ContextGlobal'
function Tarefas() {
    const { tarefas } = useContext(ContextStorage)
    return (

        <main className='tarefas'>
            <Fundos>
                <div className='svglogo'>
                    <div className='headerwhite' >
                        <header className='header' >
                            <Saudacoes>Hello let's add your tasks</Saudacoes>
                            <InputsAddTarefas />
                        </header>
                    </div>
                </div>
                <ul className='containertarefas'>
                    {tarefas && tarefas.map((item, index) => {
                        const { task } = item
                        return (
                            <Tarefa key={index} tarefaTrueFalse={task.status ? "tarefaTrue" : "tarefaFalse"}>
                                <DescricaoTarefa>
                                    <DescricaoTarefaH2>{task.title}</DescricaoTarefaH2>
                                    <DescricaoTarefaP>
                                        {task.content}
                                    </DescricaoTarefaP>
                                </DescricaoTarefa>
                                <div className='divbuttons'>
                                    <BotaoMais index={index} />
                                    <BotaoDelete index={index} />
                                </div>
                            </Tarefa>
                        )
                    })}
                </ul>
            </Fundos>
        </main>
    )
}

export default Tarefas  