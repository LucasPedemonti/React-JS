import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCard.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";

const ProductCard = () => {
  const { productData, buyProducts } = useContext (itemsContext);

  return (
    <div className="productos">
      {productData.map((producto) => {
        return (
          <Card className='container-card'>
            <CardActionArea>
              <CardMedia
                component="img"
                image={producto.img}
                alt={producto.producto}
              />
              <CardContent className='card-content'>
                <Typography className='title-card'gutterBottom variant="h5" component="div">
                  {producto.producto}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {producto.marca}
                </Typography><Typography gutterBottom variant="h7" component="div">
                  {producto.modelo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${producto.precio}
                </Typography>
                <Link
                to={`details/${producto.id}`}
                style= {{ textDecoration: 'none'}}
                key={producto.id}
                >
                  <button className='btn-detalle'> Ver detalle</button>
                </Link>
                <button onClick={()=> buyProducts(producto)} className='btnAddCart'>Agregar al carrito</button>        
              </CardContent>       
            </CardActionArea>
          </Card>
        );
      })}    
    </div>
  );
}

export default ProductCard;