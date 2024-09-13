import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Link,
} from '@mui/material';
// import productsData from '../assets/productsData.js';
import { CartContext } from '../store.js';
import { Link as RouterLink } from 'react-router-dom';

export const Products = ({ type }) => {
  const [state, dispatch] = useContext(CartContext);

  // const filteredProducts = productsData.filter(product => product.type === type); //全部不會出現
  // const filteredProducts = type ? productsData.filter(product => product.type === type) : productsData;


  const [ products, setProducts ] = useState([]);
    
  const getProducts = async () => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/products`,
    );
    console.log(productRes);
    setProducts(productRes.data.products);
  };

  useEffect(() =>{
    getProducts()
  },[])

  return (
    <Grid container spacing={2} p={2}>
      {/* {filteredProducts.map((product) => ( */}
      {products.map((product) => (
        <Grid item key={product.id} xs={6} md={3}>
          <Card sx={{ maxWidth: 280 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='auto'
                image={product.imageUrl}
                alt={product.title}
              />
              <CardContent>
                {/* <Link component={RouterLink} to='/cart'> */}
                <Link component={RouterLink} to={`/product/${product.id}`}>
                <Typography gutterBottom variant='subtitle1' component='div'>
                  {product.title}
                </Typography></Link>
                <Typography variant='body2' color='text.secondary'>
                  NT${product.origin_price}
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

