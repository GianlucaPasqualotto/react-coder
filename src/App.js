import {NavBar} from './components/Navbar/NavBar';
import Card from "./components/Card/Card";
import Button from './components/Btn/Button';


import './App.css';

function App () {

  const styles = {marginTop: "10px", color:"blue", fontSize: "30px"};

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
      <NavBar />
        <h1 className='title'>Mi primer E-Commerce con React</h1>
        <p style={styles}>Carrito de Compras</p>
        <Button text="Comprar"/>
      <Card dataProduct={dataProducts[0]} />
    </div>
  );
}

export default App;
