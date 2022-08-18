import { NavBar } from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App () {
  return (
    <div className='App'>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<h1>Carrito en construcción</h1>} />
              <Route path='*' element={<h1>Ups, no encontramos lo que buscabas :'(</h1>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
