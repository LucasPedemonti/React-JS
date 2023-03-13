import React, { useEffect, useState } from "react";
import "./GamingProducto.css"
import  ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner"

//firebase
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
//REACT ROUTER DOM
import { useParams } from "react-router-dom";



const GamingProducto = () => {

    const [productDataByProducto, setproductDataByProducto]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    const { producto } = useParams();
    //console.log(producto);
    //console.log(productDataByProducto);

    useEffect(() => {
    
        const getProducts = async () =>{
          const q = query(collection(db, "gaming"), where("producto", "==", producto));
          const querySnapshot = await getDocs(q);
          const docs = [];
          querySnapshot.forEach((doc) => {
       
            docs.push({...doc.data(), id: doc.id })
          });
          setproductDataByProducto(docs);
        };
        getProducts();  
        setTimeout(() =>{
          setIsLoading(false);
        },1000)  
      }, [producto]);

  return (
    <>
    {isLoading ? (
     <div className="Spinner">
       <Spinner />
     </div>
    ) : (
      
        productDataByProducto.map((producto) =>{
         return (      
            <div className="productos">
                 <div className="gamingProductoContainer">
                    <h1 className="gamingProductolTitle">
                        Detalle del Producto
                    </h1>
                </div> 
                <div  key={producto.id}>
                    <ProductCard className="categories" productData={producto} /> 
                </div>                
           </div>                                    
         )  
       })         
   )}
   </>  
 );
};

export default GamingProducto;