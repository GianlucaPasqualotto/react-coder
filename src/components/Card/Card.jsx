import Button from "../Btn/Button";
import "./Card.css";

function Card ( props ) {
    
    return (
        <div className="container-fluid">
            <div className='d-block'></div>
                <div className="main">
                    <div className="card">
                    <div className="card-img">
                    <div className="card-body">
                    <div className="card-detail">
                    <img src={props.dataProduct.imgurl} alt="producto" />
                    <h2>{props.dataProduct.name}</h2>
                    <p>{props.dataProduct.description}</p>
                    <h3>$ {props.dataProduct.price}</h3>
                    <Button text="Ver más"></Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}  

export default Card;