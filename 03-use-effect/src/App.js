import logo from './logo.svg';
import './App.css';
import { PruebasComponente } from './components/PruebasComponente';
import { AjaxComponente } from './components/AjaxComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PruebasComponente />
        <AjaxComponente />

      </header>
    </div>
  );
}

export default App;
