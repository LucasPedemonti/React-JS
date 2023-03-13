// import React, { useState, useContext } from 'react';
// const CartContext = React.createContext([]);

// export const useCartContext = () => useContext(CartContext);

// const CartProvider = () => {
//    const [cart, setCart] = useState([]);
//     const newCart = cart.filter(prod => prod.id !== producto.id);
//     newCart.push({ ...producto, quantity: newQuantity });
//     setCart(newCart);


//    const clearCart= () => setCart([]);

//    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;

//    const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id))









//   return (
//     <CartContext.Provider value={{
//       clearCart,
//       isInCart,
//       removeProduct,
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;