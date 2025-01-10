/* eslint-disable react/prop-types */
import { Button, Card, CardActions, Typography } from "@mui/material";
import { Link } from "react-router";
import '../styles/CardProduct.css';

const maxLyrics = (lyrics) => {
  
  if (lyrics.length > 100) {
    return lyrics.slice(0, 100) + '..';
  }
  return lyrics;
}

function CardProduct({ product }) {
  return (
      <Card className='cardProduct'>
        <Typography gutterBottom variant="h5" component="h5">
          {product.openfda?.brand_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.active_ingredient ? maxLyrics(product.active_ingredient[0]) : "Sin aportaciones"}
        </Typography>
         <CardActions>
          <Button variant='outlined' size="small"><Link to={`/product/${product.id}`}>Ver más</Link></Button>
        </CardActions>
      </Card>
  );
}

export default CardProduct;