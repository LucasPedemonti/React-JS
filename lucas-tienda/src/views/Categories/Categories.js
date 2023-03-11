// import React, { useState, useEffect } from "react";
// import Spinner from "../../components/Spinner/Spinner";
// import ProductCard from "../../components/ProductCard/ProductCard";

// // FIRBASE - FIRESTORE
// import { db } from "../../firebase/firebase";
// import { collection, query, getDocs, where } from "firebase/firestore";

// // REACT ROUTER DOM
// import { useParams } from "react-router-dom";

// // COMPONENTS

// const Categories = () => {
//   const [productCategorie, setProductCategorie] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const { producto } = useParams();

//   // console.log(genre);

//   // console.log(albumsDataByGenre);

//   useEffect(() => {
//     setIsLoading(true);
//     const getProducts = async () => {
//       const q = query(collection(db, "gaming"), where("producto", "==", producto));
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       // console.log('DATA:', querySnapshot);
//       querySnapshot.forEach((doc) => {
//         // console.log('DATA:', doc.data(), 'ID:', doc.id);
//         docs.push({ ...doc.producto(), id: doc.id });
//       });
//       // console.log(docs);
//       setProductCategorie(docs);
//     };
//     getProducts();
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, [producto]);

//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       {isLoading ? (
//         <div className="Spinner">
//           <Spinner />
//         </div>
//       ) : (
//         productCategorie.map((producto) => {
//           return <ProductCard productData={producto} key={producto.id} />;
//         })
//       )}
//     </div>
//   );
// };

// export default Categories;