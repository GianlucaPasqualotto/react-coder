import "./ItemListContainer.css";
import "./ItemListContainer.css";


function ItemListContainer ( props ) {
    
    return (
        <div className="container-fluid">
            <div className="d-block">
                <div className="item">
                <h1>{props.ItemListContainer.item}</h1>
                </div>
            </div>
        </div>
    );
}  

export default ItemListContainer;