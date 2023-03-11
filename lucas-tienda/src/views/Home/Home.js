import React from 'react';
import flyer from "../../img/flyer.jpg"
import marcas from "../../img/marcas.jpg"
import './Home.css';

const Home = () => {
	return (
		<div className='homeContainer'>
			<h1 className='homeTitle'>Bienvenidos a mi tienda</h1>
			<h3 className='homeParrafo'>Trabajamos con las mejores marcas</h3>
			<img className='homeMarcas' src={marcas} alt="marcas" title="marcas"></img>		
          	<img className='homeFlyer' src={flyer} alt="Flyer" title="Flyer"></img>
        
		</div>
	);
};

export default Home;