import './App.css';
import Login from './components/Home/Login';
import Tarefas from './components/User/Tarefas';
import { ContextGlobal } from './contexts/ContextGlobal'
function App() {

  const location = window.location.href
  console.log(location)
  return (
    <ContextGlobal>
      {location === "http://localhost:3000/" && 
        <main className="App">
        <div className='svglogo'>
          <Login />
        </div>
        <p>@designdrikks</p>
        </main>
      }
      {
        location === "http://localhost:3000/none" &&
        <Tarefas />
      }
    </ContextGlobal>
  );
}

export default App;
