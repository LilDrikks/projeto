import './App.css';
import Login from './components/Home/Login';
import TarefaOpen from './components/TarefaOpen/TarefaOpen';
import Tarefas from './components/User/Tarefas';
import { ContextGlobal } from './contexts/ContextGlobal'
function App() {
  const location = window.location.href
  
  return (
    <ContextGlobal>
      {location === "https://projeto-portiflio.netlify.app/" && 
        <main className="App">
        <div className='svglogo'>
          <Login />
        </div>
        <p className='logodrikks'>@designdrikks</p>
        </main>
      }
      {
        location === "https://projeto-portiflio.netlify.app/user-tasks" &&
        <Tarefas />
      }
      {
        location === "https://projeto-portiflio.netlify.app/task" &&
        <TarefaOpen />
      }
      
    </ContextGlobal>
  );
}

export default App;
