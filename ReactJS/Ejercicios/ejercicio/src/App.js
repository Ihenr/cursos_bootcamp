import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App() {

  const contacto1 = {
    nombre: 'Henry',
    apellido: 'Morocho',
    email: 'morocho.hn@gmail.com',
    conectado: false
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ComponenteA contacto={contacto1}></ComponenteA>
      </header>
    </div>
  );
}

export default App;
