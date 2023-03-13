import React, { useEffect, useState } from "react";

import  ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import Spinner from "../../components/Spinner/Spinner"

//firebase
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebase";


//REACT ROUTER DOM
import { useParams } from "react-router-dom";

import "./ProductDetail.css";

const ProductDetail = () => {  
  const [prodDetData, setProdDetData]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams();
 
  //console.log(id);
  console.log(prodDetData);
  useEffect(() => {
    
    const getProducts = async () =>{
      const q = query(collection(db, "gaming"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
   
        docs.push({...doc.data(), id: doc.id })
      });
      setProdDetData(docs);
    };
    getProducts();  
    setTimeout(() =>{
      setIsLoading(false);
    },1000)  
  }, [id]);


  return( 
    <>
     {isLoading ? (
      <div  className="Spinner">
        <Spinner />
      </div>
     ) : (
       
   
        prodDetData.map((producto) =>{
          return (      
            <div className="detailContainer" key={producto.id}>
              <h1 className="productDetailTitle">
                Detalle del Producto
              </h1>
              <ProductCardDetail  productData={producto} /> 
            </div>                  
                                           
          )  
        })  
         
    )}
    </>  
  );
};

export default ProductDetail;
