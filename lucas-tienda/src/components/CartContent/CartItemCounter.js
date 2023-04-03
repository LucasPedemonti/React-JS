import React from 'react';
import "./CarWidget.css";
import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";



const CartItemCounter = ({  product }) => {
    const { cart, setCart, buyProducts } = useContext(itemsContext);

    const decrese = () => {
        const productRepeat = cart.find((item) => item.id === product.id);

        productRepeat.cantidad !== 1 &&
        setCart(cart.map((item) => (item.id === product.id ? { ...product, cantidad: productRepeat.cantidad - 1 } : item)));
    };



  return (
    <>
        <p className='counterBtn' onClick={decrese}>-</p>
        <p className='numero'>{product.cantidad}</p>
        <p className='counterBtn' onClick={()=> buyProducts(product)}>+</p>    
    </>
    
  )
}

export default CartItemCounter;