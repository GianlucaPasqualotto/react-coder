import "./Card.css";


export const Card = (props) => {

    return (
        <div className="card">
            {/* <div className="card-img">
                <img src={props.data.imgurl} alt="imagen" />
            </div> */}
            <div className="card-detail">
                <h2>Hola</h2>
                <p>{props.data.description}</p>
                <h3>$ {props.data.price}</h3>
                <button>Ver Mas</button>    
            </div>
        </div>
    );
}
