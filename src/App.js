import { NavBar } from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './store/cartContext';
import Cart from "./components/Cart/Cart";

import firestoreDB from "./services/firebase";

import './App.css';

function App () {
  return (
    <div className='App'>
        <BrowserRouter>
          <CartProvider>  
            <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<h1>Ups, no encontramos lo que buscabas :'(</h1>} />
              </Routes>
            </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
