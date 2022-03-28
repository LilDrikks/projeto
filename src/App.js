import { ContextGlobal } from './contexts/ContextGlobal'
import { BrowserRouter } from 'react-router-dom'
import Routess from './routes/Routes';
import history from './services/history'




function App() {
 
return (
  <ContextGlobal>
    <BrowserRouter history={history}>
      <Routess />
    </BrowserRouter>
  </ContextGlobal>
);
}

export default App;
