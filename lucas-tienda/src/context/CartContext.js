import React, { createContext, useEffect,useState } from "react";
import { db } from "../firebase/firebase";
import { collection,query,getDocs } from "firebase/firestore";

export const itemsContext = createContext();

const ItemsProvider = ({ children }) =>{
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  
  
 
  useEffect(() => {
    
    const getProducts = async () =>{
      const q = query(collection(db, "gaming"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {   
       
        docs.push({...doc.data(), id: doc.id })
      });
      setProductData(docs);
    };
    getProducts(); 
  }, []);
  const buyProducts = (producto) => {
    console.log(producto);
    const productRepeat = cart.find((item) => item.id === producto.id);
    if (productRepeat){
      setCart(cart.map((item)=> (item.id === producto.id ? { ...producto, cantidad: productRepeat.cantidad + 1 } : item )));
    }else{
      setCart([...cart, producto])
    }    
  };
  
  return (    
   <itemsContext.Provider value={{ productData, cart, setCart, buyProducts }}>
    { children }
   </itemsContext.Provider>
  );
};
export default ItemsProvider;