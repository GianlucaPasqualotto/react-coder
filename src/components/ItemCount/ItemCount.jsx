import React, { useState }  from 'react';

function ItemCount( {initial, stock} ){

    const [count, setCount] = useState(initial); 


    const handleIncrement = () => (count < stock) && setCount(count + 1);
    
    const handleDecrement = () => (count > initial) && setCount(count - 1);

    const onAdd = () => {
        console.log("Añadido al carrito")
        setCount(1)
    }

    return(

        <div className="container-fluid">
            <div className='d-flex'>
                <button className='btn' onClick={ handleIncrement }>+</button>
                <button className='btn' onClick={ handleDecrement }>-</button>
                <button className='btn' onClick={ ()=> setCount(1) }>Reiniciar</button>
                <button className='btn' onClick={ onAdd }>Comprar</button><br></br>
                <h4>Cantidad: {count}</h4>
            </div>
        </div>
)
}

export default ItemCount;