import React, { useState }  from 'react';
import Button from "../Btn/Button";

function ItemCount( { initial, stock, addToCart } ){
    const [count, setCount] = useState(initial); 

    const handleIncrement = () => (count < stock) && setCount(count + 1);
    
    const handleDecrement = () => (count > initial) && setCount(count - 1);

    // const onAdd = () => {
    //     setCount(1);
    // }

    return(

        <div className="container-fluid">
                <h4>Cantidad: {count}</h4>
                <button className='btn' onClick={ handleIncrement }>+</button>
                <button className='btn' onClick={ handleDecrement }>-</button>
                <button className='btn' onClick={ ()=> setCount(1) }>🔄</button>
                <button className='btn' onClick={() => addToCart(count) }>🛒</button><br></br>
            </div>
)
}

export default ItemCount;