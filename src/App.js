//import logo from './rapidLubeService-logoAzul.png';
import './App.css';
import img from "./imagenes/rapidLubeService-banerAzul.png"
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  let userColor = "blue";
  const styles = {marginTop: "10px", color: userColor, fontSize: "30px"};

  return (
    <div>
      <NavBar/>
        <img src={ img } />
        <h1>Mi primer E-Commerce con React</h1>
        <br/>
        <p style={styles}>Carrito de Compras</p>
        <button onClick={ () => alert("Hola Usuario") }>Clic Me</button>
    </div>
  );
}

export default App;
