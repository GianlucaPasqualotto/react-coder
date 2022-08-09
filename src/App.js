import {NavBar} from './components/Navbar/NavBar';
import Card from "./components/Card/Card";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


import './App.css';
import CardWidget from './components/CardWidget/CardWidget';

function App () {


  return (
    <div className='App'>
      <NavBar>
        <CardWidget />
      </NavBar>
      <ItemListContainer />
      <ItemCount initial={1} stock={5} />
    </div>
  );
}

export default App;
