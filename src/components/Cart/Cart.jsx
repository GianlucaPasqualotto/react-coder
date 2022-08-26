import React from "react";
import Data from "../../data/Data";
import { useContext, useEffect } from "react";
import { cartContext } from "../../store/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import "../Cart/Cart.css";
import CartItem from "../CartItem/CartItem";

function Cart() {
    const { cart, removeItem, removeAll, totalPrice, totalAmount } = useContext(cartContext);
    function removeItemCart(id) {
        removeItem(id)
    }
useEffect(()=>{
    console.log("cambie")
}, [cart])

if (cart.length === 0) {
    return (
        <main>
            <div className="emptyCartContainer">
                <div className="titleEmptyContainer">
                    <h1>Carrito Vacío</h1>
                </div>
                <span><FontAwesomeIcon className="emptyCart" icon={faCartArrowDown} /></span>
                <Link to={"/"}><button className="cartResumeButtons">Ir a Comprar </button></Link>
            </div>
        </main>
    )
}
else {
    return (
        <main className="mainCart">
            <section className="sectionCartItem">
                {cart.map((item, index) => {
                    return (
                        <CartItem
                            key={item.id + item.name}
                            id={index}
                            img={item.img}
                            name={item.name}
                            price={item.price * item.amount}
                            amount={item.amount}
                            stock={item.stock - item.amount}
                            removeItemCart={removeItemCart}
                        />
                    )
                })}
                <button className="cartDeleteAll" onClick={removeAll}>Vaciar Carrito</button>
            </section>
            <section className="cartResume">
                <h1 className="titleResume">Resumen del Pedido</h1>
                <h3 className="resume">Cantidad de Productos: {totalAmount()} x ${Data[0].price}</h3>
                <h3 className="resume">Subtotal: ${totalPrice()}</h3>
                <h3 className="resume">IVA: ${totalPrice() * 0.21}</h3>
                <h2 className="totalResume">Total: $ {totalPrice() * 1.21}</h2>
                <h4 className="resume">Envio gratis a todo Argentina</h4>
                <div className="containerButtonsResume">
                    <Link to={"/"}><button className="cartResumeButtons">Seguir Comprando</button></Link>
                    <Link to={"/checkout"}><button className="cartResumeButtons">Finalizar Compra</button></Link>
                </div>
                <h1 className="titleResume">Medios de pago disponibles:</h1>
                    <img className="paymentResume" src="https://cdn.simplesite.com/i/4d/e6/284571206315009613/i284571214513706839._szw1280h1280_.jpg" alt="Medios de Pago"></img>
            </section>
        </main>
    )
}
}

export default Cart