import logo from './logo.svg';
import './App.css';
// import Greeting from './componentes/pure/greeting';
// import GreetingF from './componentes/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componete propio Greeting.jsx */}
        {/* <Greeting name="HENRY"></Greeting> */}

        {/* Componente de ejemplo Funcional */}
        {/* <GreetingF name="HENRY"></GreetingF> */}

        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
