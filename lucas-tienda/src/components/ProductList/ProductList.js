import React, { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

import "./ProductList.css"


//firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";



const ProductList = () => {
  const [productData, setProductData]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
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
    setTimeout(() =>{
      setIsLoading(false);
    },1000)  
  }, []);
  
  return (    
    <>
     {isLoading ? (
      <div  className="Spinner">
        <Spinner />
      </div>
     ) : (
        <div className="cards">
          {productData.map((producto) =>{
            return (
              <Link
                to={`details/${producto.id}`}
                style= {{ textDecoration: 'none'}}
                key={producto.id}
                >
                  <ProductCard  productData={producto}/>
              </Link>                    
            );  
          })}        
        </div>   
      )}
    </>  
  );
};
export default ProductList;

