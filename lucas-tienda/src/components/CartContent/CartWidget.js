
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { itemsContext } from '../../context/CartContext';
import carrito from "../../img/carrito.svg";


const CartWidget = () => {
    const { cart } = useContext(itemsContext); 
    const itemsCantidad = cart.reduce((acc, el) => acc + el.cantidad, 0)  

    return(
            <div >
                <Link to="/cart">
                   <img 
                    src={carrito} 
                    alt="cart">
                </img> 
                </Link>   
                {itemsCantidad > 0 ? itemsCantidad : null}                
                 
            </div>                
    );
};

export default CartWidget;