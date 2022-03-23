import React from 'react'
import './Tarefas.scss'
function Tarefas() {
  return (
    <main className='tarefas'>
        <div className='fundobranco'>
            <div className='fundopreto'>
                <h1>Add your tasks</h1>
                <input type="text" />
                <div className='button'>
                    <button className='add'>ADD</button>
                </div>
                <div className='containertarefas'>
                    <div className='tarefa1'>
                        <div className='desctarefa'> 
                        <h2>read a book...</h2>
                        <p>books for read: clean code...</p>
                        </div>
                        <div className='divbuttons'>
                        <button>+</button>
                        <button>trash</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Tarefas  