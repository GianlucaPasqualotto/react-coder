import React, { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const cartContext = createContext();
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];
    // funcion de agregar al carrito
    function addToCart(data, amount) {
        // si el producto extiste solo aumentar la cantidad
        if (isInCart(data.id)) {
            const itemIndex = findItem(data.id)
            if (data.stock > 0){
                itemIndex.amount += amount;
                data.stock -= amount
                setCart(copyCart)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Agregaste ${amount} ${data.name} al carrito`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
            else{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: `No hay más productos en stock.`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
        else {
            copyCart.push({ ...data, amount });
            data.stock-= amount
            setCart(copyCart)
            // console.log(copyCart)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Agregaste ${amount} ${data.name} al carrito`,
                    showConfirmButton: false,
                    timer: 2000
                })
        }
    }
    // funcion para remover un item por su id
    function removeItem(data) {
        const itemRemove = findItem(data.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
    
    }
    // funcion vaciar al carrito
    function removeAll() {
        copyCart = []
        setCart(copyCart)
        console.log(copyCart)
    }
    // funcion para sacar el total de productos agregados al carrito aunque esten repetidos
    function totalAmount() {
        let amountCart = 0;
        copyCart.map(index => amountCart += index.amount);
        return amountCart;
    }
    // funcion que calcula el precio total
    function totalPrice(){
        let total = 0;
        copyCart.map ((index) => total += index.price * index.amount);
        return total;
    }

    // funcion para revisar si existe el item
    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === id ))
    }
    // funcion para buscar un item en base a su id
    function findItem(id) {
        return (copyCart.find(item => item.id === id))
    }
    function clearCart() {
        copyCart = []
        setCart(copyCart)
    }
    return (
        <cartContext.Provider value={{ cart, addToCart, removeItem, removeAll, totalAmount, totalPrice, clearCart }}>
            {children}
        </cartContext.Provider>
);
}
