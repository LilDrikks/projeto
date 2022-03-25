import './App.css';

import TarefaOpen from './components/TarefaOpen/TarefaOpen';
import Tarefas from './components/User/Tarefas';
import { ContextGlobal } from './contexts/ContextGlobal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
function App() {

  return (
    <ContextGlobal>
      <BrowserRouter>
       <Routes>
    <Route path='/'element={ <Home />}/>
  <Route path='/user-tasks' element={ <Tarefas />} />
  <Route path='/task' element={<TarefaOpen />} />
        </Routes>
      </BrowserRouter>
    </ContextGlobal>
  );
}

export default App;
