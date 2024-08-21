import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha = {
    altura: '1.64cm',
    estado: 'soltero',
    alergias: 'ninguna'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/** Cargar mi primer componente */}
        <div className='componentes'>
          <MiComponente />
          <SegundoComponente />
          <TercerComponente 
            nombre="Adiel"
            ficha_medica={ficha}
            />
          <EventosComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
