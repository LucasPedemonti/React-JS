import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";
import React from "react";
import CartItemCounter from "./CartItemCounter";
import "./CarWidget.css";


const CartElements = () => {
    const { cart, setCart } = useContext(itemsContext);
    const deleteProduct =(id) =>{
      const foundId = cart.find((element) => element.id === id);

      const newCart = cart.filter((element) => {
        return element !== foundId;
      });
      setCart(newCart);
    };

    
  return  cart.map((product) => {
    return (
        <div className="cartContent" key={product.id}>
            
            <h3 className="name">{product.producto}</h3>
            
            <h4 className="modelo">{product.modelo}</h4>
            <CartItemCounter  product={product} className="cantidad"/>
            <h4 className="precio">${product.precio * product.cantidad}</h4>
            <h3 class="cartDltBtn" onClick={()=> deleteProduct(product.id)}>❌</h3>
        </div>
    )
  }
  )
}

export default CartElements;