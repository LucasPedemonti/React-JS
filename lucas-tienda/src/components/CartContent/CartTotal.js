import React from 'react';
import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";

const CartTotal = () => {
    const { cart } = useContext(itemsContext);

    const total = cart.reduce((acc,el)=> acc + el.precio *  el.cantidad, 0);
  return (
    <div className='cartTotal'>
        <h3>Total a pagar: ${total}</h3>
    </div>
  )
}

export default CartTotal