import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import cart from "../../img/cart.svg";


const CartWidget = () => {
    const [total, setTotal] = useState(0);
    const { getNumberOfItems, openCart } = useCartContext();
    const handleOpen = () => {
        openCart();
    };
    useEffect(() => {
        const numberOfItems = getNumberOfItems();
        setTotal(numberOfItems);
      }, [getNumberOfItems]);
    

    return(
            <div onClick={handleOpen}>
                <Link to="/cart">
                   <img 
                    src={cart} 
                    alt="cart">
                </img> 
                </Link>                   
                <span>{total}</span>        
    
            </div>                
    );
};

export default CartWidget;