import logo from './logo.svg';
import './App.css';
import { EstadoComponente } from './components/EstadoComponente';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hook useState
        </p>
        <EstadoComponente />
      </header>
    </div>
  );
}

export default App;
