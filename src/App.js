import './App.css';
import Login from './components/Login';
import { ContextGlobal } from './contexts/ContextGlobal'
function App() {
  return (
    <ContextGlobal>
        <main className="App">
        <div className='svglogo'>
          <Login />
        </div>
        </main>
    </ContextGlobal>
  );
}

export default App;
