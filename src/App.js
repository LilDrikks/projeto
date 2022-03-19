import './App.css';
import Container from './components/Container';
import Login from './components/Login';
import { ContextGlobal } from './contexts/ContextGlobal'
import './components/Container.css'
function App() {
  return (
    <ContextGlobal>
      <main className="App">
        <Container>
          <Login />
        </Container>
      </main>
    </ContextGlobal>
  );
}

export default App;
