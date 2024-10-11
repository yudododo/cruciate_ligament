import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Select,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormGroup,
  Breadcrumbs,
  Link,
  IconButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CartContext } from '../store/store.js';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
export const ProductDetail = ({getCart}) => {
  const [color, setColor] = useState('');
  const [ownColor, setOwnColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  //取回來會是物件格式，只有取得單一筆資料
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  const getProduct = async (id) => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`
    );
    console.log(productRes);
    setProduct(productRes.data.product);
  };
  useEffect(() => {
    getProduct(id);
  }, [id]);

  const formatCategory = (product) => {
    switch (product.category) {
      case 'phonestrap':
        return 'Phone Strap';
      case 'drinkholder':
        return 'Drink Holder';
      case 'keychain':
        return 'Key Chain';
      default:
        return ''; // 如果不是这三种情况，返回空字符串
    }
  };
  const [state, dispatch] = useContext(CartContext);

  const addToCart = async () =>{
    const data = {
      "data": {
        "product_id": product.id,
        "qty": quantity
      }
    }
    setIsLoading(true)
    try {
      const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`, data)
      console.log("post購物車內容",res)
      setIsLoading(false)
      setCartData(res.data.data);
      getCart();
    } catch (error) {
      console.log(error)
    }
  }
//避免客人在沒跑完商品ajax，重複按按鈕新增數量
  const [ isLoading, setIsLoading ] = useState(false);

  const [ cartData, setCartData ] = useState({});

  return (
    <Container maxWidth='lg'>
      <Breadcrumbs aria-label='breadcrumb' mb={1.5}>
        <Link
          underline='hover'
          component={RouterLink}
          color='inherit'
          to='/shop/all'
        >
          All
        </Link>
        <Link
          underline='hover'
          color='inherit'
          component={RouterLink}
          to={`/shop/${product.category}`}
        >
          {formatCategory(product)}
        </Link>
        <Typography>{product.title}</Typography>
      </Breadcrumbs>
      <Grid container direction={{ xs: 'column', sm: 'row' }}>
        <Grid
          item
          xs={7}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={product.imageUrl}
            alt='Product'
            style={{ width: '75%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <Typography
              // variant='h4'
              sx={{
                color: '#5B4F47',
                fontWeight: '700',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.6rem' },
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: '#5B4F47',
                fontWeight: '700',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
              }}
            >
              {/* NT${product.origin_price} */}
              NT${product.price}
            </Typography>
            <Typography variant='subtitle2' sx={{ color: '#5B4F47', mb: 2 }}>
              客製商品10-20個工作天，可等候再下單
              <br />
              單筆滿2000元免運（限台灣）
            </Typography>
            <FormControl fullWidth>
              <InputLabel id='convenstore'>顏色 color</InputLabel>
              <Select
                labelId='Color 顏色'
                id='demo-simple-select'
                value={color}
                label='Color 顏色'
                onChange={(e) => setColor(e.target.value)}
                sx={{
                  height: 40,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#5B4F47',
                    borderWidth: 1.5,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#A98B73',
                    borderWidth: 1.5,
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#A98B73',
                    borderWidth: 1.5,
                  },
                }}
              >
                <MenuItem value={'白黃綠'}>白黃綠</MenuItem>
                <MenuItem value={'粉白咖'}>粉白咖</MenuItem>
              </Select>
            </FormControl>
            <FormGroup>
              <TextField
                value={ownColor}
                label='客製化配色 Customize your own color'
                variant='outlined'
                fullWidth
                helperText='花花款可以選擇三種顏色，花瓣、花芯、花梗，愛心或是素面款可以選擇兩種顏色。'
                onChange={(e) => setOwnColor(e.target.value)}
                sx={{
                  my: 2,
                  '& .MuiOutlinedInput-root': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#5B4F47',
                      borderWidth: 1.5,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#A98B73',
                      borderWidth: 1.5,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#A98B73',
                      borderWidth: 1.5,
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    height: 40,
                  },
                }}
              />
            </FormGroup>
            <FormGroup sx={{ mb: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  aria-label='delete'
                  color='#5B4F47'
                  onClick={() => {
                    setQuantity((pre) => (pre === 1 ? pre : pre - 1));
                  }}
                >
                  <RemoveRoundedIcon />
                </IconButton>
                <TextField
                  value={quantity}
                  label='Quantity 數量'
                  variant='outlined'
                  type='number'
                  fullWidth
                  disabled
                  required
                  onChange={(e) => setQuantity(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#5B4F47',
                        borderWidth: 1.5,
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#A98B73',
                        borderWidth: 1.5,
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#A98B73',
                        borderWidth: 1.5,
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: 40,
                    },
                  }}
                />
                <IconButton
                  aria-label='delete'
                  color='#5B4F47'
                  onClick={() => {
                    setQuantity((pre) => pre + 1);
                  }}
                >
                  <AddRoundedIcon />
                </IconButton>
              </Box>
            </FormGroup>
            <FormGroup>
              <Button
                variant='contained'
                sx={{
                  background: '#5B4F47',
                  color: '#fff',
                  borderRadius: '50px',
                  '&:hover': {
                    background: '#4B413A',
                  },
                }}
                // onClick={() => {
                //   dispatch({
                //     type: 'ADD_TO_CART',
                //     payload: { ...product, quantity },
                //   });
                // }}
                onClick={()=>addToCart()}
                disabled={isLoading}
              >
                Add to Cart 加入購物車
              </Button>
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
