import './App.css';
import Login from './components/Home/Login';
import TarefaOpen from './components/TarefaOpen/TarefaOpen';
import Tarefas from './components/User/Tarefas';
import { ContextGlobal } from './contexts/ContextGlobal'
function App() {
  const location = window.location.href
  
  return (
    <ContextGlobal>
      {location === "http://localhost:3000/" && 
        <main className="App">
        <div className='svglogo'>
          <Login />
        </div>
        <p className='logodrikks'>@designdrikks</p>
        </main>
      }
      {
        location === "http://localhost:3000/user-tasks" &&
        <Tarefas />
      }
      {
        location === "http://localhost:3000/task" &&
        <TarefaOpen />
      }
      
    </ContextGlobal>
  );
}

export default App;
