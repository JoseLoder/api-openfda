/* eslint-disable react/prop-types */
import { Button, Card, CardActions, Typography } from '@mui/material';
import { Link } from 'react-router';

function ListProducts({ results }) {
  return (
    <section>
    {results.map(
      result => (
        <Card key={result.id} sx={{ maxWidth: 345, margin: 2, padding: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          {result.openfda?.brand_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {result.active_ingredient ? result.active_ingredient : "Sin aportaciones"}
        </Typography>
         <CardActions>
          <Button variant='outlined' size="small"><Link to={`/product/${result.id}`}>Ver más</Link></Button>
        </CardActions>
        </Card>
        )
      )}
  </section>
  );
  
}

export default ListProducts;