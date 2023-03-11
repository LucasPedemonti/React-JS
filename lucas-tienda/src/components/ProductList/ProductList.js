import React, { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";


import "./ProductList.css"


//firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";


const ProductList = () => {
  const [productData, setProductData]= useState([]);
 
  useEffect(() => {
    
    const getProducts = async () =>{
      const q = query(collection(db, "gaming"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
   
        //console.log(doc.id, " => ", doc.data());
        docs.push({...doc.data(), id: doc.id })
      });
      setProductData(docs);
    };
    getProducts();    
  }, []);
  
  return (    
      <div className="cards">
        {productData.map((producto) =>{
          return (
            <div key={producto.id}>
              <ProductCard  productData={producto}/>
            </div>          
          );  
        })}        
      </div>   
  );
};
export default ProductList;

