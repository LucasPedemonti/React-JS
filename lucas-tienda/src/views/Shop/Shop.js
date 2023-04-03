import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.css';



const Shop = () => {
  
  
  return (
    <div className='shop-container'>
      <h1 className='shop-title'>Productos</h1>
		  <div className='shop-productos'>
        <ProductCard />
      </div>
	</div>
  );
};

export default Shop;
