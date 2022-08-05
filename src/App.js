import {NavBar} from './components/Navbar/NavBar';
import Card from "./components/Card/Card";
// import Button from './components/Btn/Button';
// import CardWigget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';


import './App.css';
import CardWidget from './components/CardWidget/CardWidget';

function App () {


  const Items = [
    { 
    item: "Sección Aceites",
  }
  ]

  const dataProducts = [
  {
  name: "Aceite Mobil",
  price: 5400,
  imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_995600-MLA49805367577_042022-F.webp",
  description: "10W-40",
},
{
  name: "Aceite Castrol",
  price: 6400,
  imgurl: "https://http2.mlstatic.com/D_NQ_NP_2X_933821-MLA45711915954_042021-F.webp",
  description: "10W-40",
},
]

  return (
    <div className='App'>
      <NavBar>
        <CardWidget />
      </NavBar>
      <ItemListContainer ItemListContainer={Items[0]}/>
      <Card dataProduct={dataProducts[0]}/>
      <ItemCount initial={1} stock={5} />
    </div>
  );
}

export default App;
