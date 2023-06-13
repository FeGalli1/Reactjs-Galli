import './style/index.css'
import Contacto from './page/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**Dentro de la page contacto tendremos los componentes que pide la entrega*/}
        <Contacto/>
      </header>
    </div>
  );
}

export default App;
