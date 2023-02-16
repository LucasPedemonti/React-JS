import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgUser from "./asusrog1.jpg";

const ProductContainer = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgUser}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Mother Asus Rog Strix X570-e Wifi Ii
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Placa base de gaming ATX AMD X570 con PCIe® 4.0, 12+4 etapas de potencia, WiFi 6E (802.11ax), Ethernet de 2,5 Gb de Realtek, cancelación de ruido bidireccional con IA, dos M.2 con disipadores, SATA 6 GB/s, USB 3.2 Gen. 2 de tipo C e iluminación Aura Sync RGB
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">$148.699</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductContainer;