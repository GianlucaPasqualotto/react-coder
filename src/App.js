import {NavBar} from './components/Navbar/NavBar';
import Card from "./components/Card/Card";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import './App.css';

function App () {
  return (
    <div className='App'>
      <NavBar />
      {/* <ItemListContainer />
      <ItemCount initial={1} stock={5} /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
