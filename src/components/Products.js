import { useContext } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import productsData from '../assets/productsData.js';
import { CartContext } from '../store.js';

export const Products = ({ type }) => {
  const [state, dispatch] = useContext(CartContext);

  // const filteredProducts = productsData.filter(product => product.type === type); //全部不會出現
  const filteredProducts = type ? productsData.filter(product => product.type === type) : productsData;

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid item key={product.id} xs={6} md={3}>
          <Card sx={{ maxWidth: 280 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='auto'
                image={product.img}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant='subtitle1' component='div'>
                  {product.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  NT${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button size='small' variant='outlined' fullWidth
                sx={{
                  background:'#5B4F47',
                  color: '#fff',
                  borderRadius: '5px', 
                  '&:hover': {
                    background: '#4B413A',
                  },
                }}
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: { ...product, quantity: 1 },
                  });
                }} >
                Add to cart 加入購物車
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

