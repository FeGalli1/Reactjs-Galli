import './style/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componente/ItemListContainer';
import NavBar from './componente/NavBar/navBar';
import ItemDetailContainer from './componente/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoriaId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
