import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCardDetail.css';
import { useContext } from "react";
import { itemsContext } from "../../context/CartContext";

const ProductCardDetail = ({ productData }) => {
  const { buyProducts } = useContext (itemsContext);
    
  return (
    <Card className='containerCard'>
      <CardActionArea>
        <CardMedia
          component="img"
          image={productData.img}
          alt="green iguana"
        />
        <CardContent className='cardcontent'>
          <Typography className='titleCard'gutterBottom variant="h5" component="div">
            {productData.producto}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {productData.marca}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {productData.modelo}
          </Typography><Typography gutterBottom variant="h7" component="div">
            {productData.detalle}
          </Typography>
          <Typography variant="body2" fontWeight={800} color="text.secondary">
            ${productData.precio}
          </Typography>
          <button onClick={()=> buyProducts(productData)} className='btnAddCart'>Agregar al carrito</button> 

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCardDetail;