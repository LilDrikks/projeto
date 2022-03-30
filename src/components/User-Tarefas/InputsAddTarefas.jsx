import React, {useContext} from 'react'
import { ContextStorage } from '../../contexts/ContextGlobal'

function InputsAddTarefas() {

  const dados = useContext(ContextStorage)
  return (
        <>
          <div className='inputs'>
            <input type="text" className='inputTask'  name='tarefa' onChange={dados.onChange}/>
            <button className='add' onClick={dados.handleDadosUser}>ADD!</button>
          </div>
        </>
  )
}

export default InputsAddTarefas