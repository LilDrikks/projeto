import React, {useContext} from 'react'
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
    const dados = useContext(ContextStorage)
    console.log(dados.tarefas)
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
                    <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>learn programming in javascript</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                React, Node and MongoDB... React, Node and MongoDB...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>read a book about programming</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesett...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>learn programming in javascript</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                React, Node and MongoDB... React, Node and MongoDB...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>read a book about programming</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesett...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>learn programming in javascript</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                React, Node and MongoDB... React, Node and MongoDB...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>read a book about programming</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesett...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaTrue"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>learn programming in javascript</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                React, Node and MongoDB... React, Node and MongoDB...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>
                    <Tarefa tarefaTrueFalse={"tarefaFalse"}>
                        <DescricaoTarefa>
                            <DescricaoTarefaH2>read a book about programming</DescricaoTarefaH2>
                            <DescricaoTarefaP>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesett...
                            </DescricaoTarefaP>
                        </DescricaoTarefa>
                        <div className='divbuttons'>
                            <BotaoMais />
                            <BotaoDelete />
                        </div>
                    </Tarefa>

                </ul>
            </Fundos>
        </main>
    )
}

export default Tarefas  