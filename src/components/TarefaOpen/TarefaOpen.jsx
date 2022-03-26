import React from 'react'
import DescricaoTarefaH2 from '../User-Tarefas/DescricaoTarefaH2'
import DescricaoTarefaP from '../User-Tarefas/DescricaoTarefaP'
import Fundos from '../User-Tarefas/Fundos'
import BotaoEditar from './BotaoEditar'
import BotaoMenos from './BotaoMenos'
import BotaoDelete from '../User-Tarefas/BotaoDelete'
import './TarefaOpen.scss'
import BotaoTrue from './BotaoTrue'
import BotaoFalse from './BotaoFalse'

function TarefaOpen() {

  return (
    <main className='tarefa_open'>
      <Fundos>
        <header>
          <DescricaoTarefaH2>learn programming in javascript</DescricaoTarefaH2>
          <BotaoMenos />
        </header>
        <section className='secao-editar'>
          <article>
            <DescricaoTarefaP>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesett...

            </DescricaoTarefaP>
          </article>
          <BotaoEditar />
        </section>
        <footer className='footer'>
          <div className='botoes-true-false'>
            <BotaoTrue />
            <BotaoFalse />
          </div>
          <BotaoDelete />
        </footer>
      </Fundos>
    </main>
  )
}

export default TarefaOpen