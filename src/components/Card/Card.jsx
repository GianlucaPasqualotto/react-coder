import Button from "../Btn/Button";
import "./Card.css";

function Card ( props ) {
    
    return (
        <div className="main">
        <h1 className="ItemListContainer">Sección Aceites</h1>
            <div className="card">
                    <div className="card-img">
                    <img src={props.dataProduct.imgurl} alt="producto" />
                    <div class="card-body">
                    </div>
                    <div className="card-detail">
                    <h2>{props.dataProduct.name}</h2>
                    <p>{props.dataProduct.description}</p>
                    <h3>$ {props.dataProduct.price}</h3>
                    <Button text="Ver más"></Button>
                </div>
            </div>
        </div>
        </div>
    );
}  

export default Card;