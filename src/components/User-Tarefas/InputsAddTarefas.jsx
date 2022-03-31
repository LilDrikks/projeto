import React, {useContext, useEffect} from 'react'
import { ContextStorage } from '../../contexts/ContextGlobal'

function InputsAddTarefas() {

  const dados = useContext(ContextStorage)
  
  return (
        <>
          <div className='inputs'>
            <input type="text" className='inputTask'  name='tarefa' onChange={dados.onChange}/>
            <button className='add' onClick={dados.handleInsertTask}>ADD!</button>
          </div>
        </>
  )
}

export default InputsAddTarefas