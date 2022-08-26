import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPray } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import {cartContext } from "../../store/cartContext";

function CartWidget() {
  const {cart, totalAmount } = useContext(cartContext)
  return (
    <div className="cardWidget">
      <Link to="/cart" className="d-flex"> <FontAwesomeIcon className="cart-widget" icon={faCartShopping} />
        {cart.length === 0 ?
          <span></span> :
          <span className='totalAmount'>{totalAmount()}</span>}
      </Link>
    </div>
  )
}

export default CartWidget