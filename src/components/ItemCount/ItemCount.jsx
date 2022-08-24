import React, { useState }  from 'react';

function ItemCount( { initial, stock, onAdd } ){
    const [amount, setAmount] = useState(initial); 

    const handleIncrement = () => (amount < stock) && setAmount(amount + 1);
    
    const handleDecrement = () => (amount > initial) && setAmount(amount - 1);

    return(

        <div className="container-fluid">
                <h4>Cantidad: {amount}</h4>
                <button className='btn' onClick={ handleIncrement }>+</button>
                <button className='btn' onClick={ handleDecrement }>-</button>
                <button className='btn' onClick={ ()=> setAmount(1) }>🔄</button>
                <button className='btn' onClick={() => onAdd(amount) }>Agregar al 🛒</button><br></br>
            </div>
)
}

export default ItemCount;