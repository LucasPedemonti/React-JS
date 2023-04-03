import React from 'react';
import CartElement from './CartElements';
import CartTotal from './CartTotal';
import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";

const CartContent = () => {
    const { cart } = useContext(itemsContext);
    
  return (
    <> 
    <CartElement/>
    <CartTotal/>    
    </>
   
  )
}

export default CartContent;