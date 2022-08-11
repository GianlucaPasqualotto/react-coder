import {NavBar} from './components/Navbar/NavBar';
import Card from "./components/Card/Card";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import './App.css';

function App () {
  return (
    <div className='App'>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/listado' element={<ItemListContainer />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>Ups, no encontramos lo que buscabas :'(</h1>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
