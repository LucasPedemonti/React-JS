import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCardDetail.css';
import ItemCount from '../ItemCount/ItemCount';
const ProductCardDetail = ({ productData }) => {

    
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
          <ItemCount />

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCardDetail;