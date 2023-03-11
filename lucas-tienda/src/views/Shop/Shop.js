import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './Shop.css';


const Shop = () => {
  return (
    <div className='shopContainer '>
    <h1 className='shopTitle'>Productos</h1>
		<ProductList />
	</div>
  );
};

export default Shop;