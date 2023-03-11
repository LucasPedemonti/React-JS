import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCard.css';
const ProductCard = ({ productData }) => {
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
          </Typography><Typography gutterBottom variant="h7" component="div">
            {productData.modelo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${productData.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;