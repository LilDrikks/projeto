import React, {useContext} from 'react'
import { ContextStorage } from '../../contexts/ContextGlobal'

function InputsAddTarefas() {

  const {handleInsertTask, onChange} = useContext(ContextStorage)
  
  return (
        <>
          <div className='inputs'>
            <input type="text" className='inputTask'  name='tarefa' onChange={onChange}/>
            <button className='add' onClick={handleInsertTask}>ADD!</button>
          </div>
        </>
  )
}

export default InputsAddTarefas