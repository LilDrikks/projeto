import './App.css';
import Login from './components/Login';
import { ContextGlobal } from './contexts/ContextGlobal'

function App() {
  return (
    <ContextGlobal>
      <div className="App">
        <Login />
      </div>
    </ContextGlobal>
  );
}

export default App;
