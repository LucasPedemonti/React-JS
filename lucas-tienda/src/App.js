import React from "react";
import "./App.css";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Nav from './components/Nav/Nav';
import CartState from "../src/context/CartContext";

//Views
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import Contact from "./views/Contact/Contact";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import GamingProducto from "./views/GamingProducto/GamingProducto";
import Cart from "./views/Cart/Cart";
import Error from "./views/Error/Error";







const App = () => {
  return (
    <>
    <div className="App">
      <CartState>
        <Router>           
          <Nav />              
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />            
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/cart" element={<Cart />}/>  
            <Route path="*" element={<Error />} />     
            <Route path="/shop/details/:id" element={<ProductDetail />} />
            <Route path="/gaming-producto/:producto" element={<GamingProducto />} />
          </Routes>    
         </Router>
      </CartState>
    </div>
    
    </>          
  );
};

export default App;
