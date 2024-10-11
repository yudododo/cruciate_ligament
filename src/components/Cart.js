import { useContext, useState } from 'react';
import axios from 'axios';
// import { CartContext } from '../store/store';
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Typography,
  TextField,
  Badge,
  Link,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link as RouterLink } from 'react-router-dom';

export const Cart = ({ cartData, getCart }) => {
  // const [state, dispatch] = useContext(CartContext);
  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`
      );
      console.log('刪除的訊息', res);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };
  const updateCartItem = async (item, quantity) => {
    const data = {
      data: {
        product_id: item.product_id, //這裡是產品的id
        qty: quantity,
      },
    };
    setLoadingItems([...loadingItems, item.id]);
    try {
      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`,
        data //這裡是品項的id
      );
      console.log('更新的訊息', res);
      setLoadingItems(
        loadingItems.filter((loadingObject) => loadingObject !== item.id)
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };
  //用來防止一直點擊增加或減少數量
  const [loadingItems, setLoadingItems] = useState([]);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      role='presentation'
    >
      {/* {JSON.stringify(state.cartList)} */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>您的購物車 Shopping Cart </Typography>
          <CloseIcon onClick={toggleDrawer(false)} />
        </Box>
        <List>
          {/* {state.cartList.map((item) =>{ */}
          {/* 一開始渲染時 cartData 的內容為 useState 中預設的 {}，沒有cart 屬性，因此用"串聯運算子"解決 */}
          {cartData?.carts?.map((item) => {
            return (
              <ListItem key={item.id}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <img
                    // src={item.imageUrl}
                    src={item.product.imageUrl}
                    // alt={item.title}
                    alt={item.product.title}
                    style={{
                      width: 55,
                      height: 55,
                      marginRight: 16,
                      borderRadius: '5px',
                    }}
                  />
                  <ListItemText
                    // primary={item.title}
                    primary={item.product.title}
                    // secondary={`NT$${item.origin_price} x ${item.quantity}`}
                    // secondary={`NT$${item.product.origin_price} x ${item.qty}`}
                    secondary={`NT$${item.product.price} x ${item.qty}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      // value={item.quantity}
                      value={item.qty}
                      // onChange={(e) => {
                      //   e.preventDefault();
                      //   const quantity = parseInt(e.target.value);
                      //   dispatch({
                      //     type: 'CHANGE_CART_QUANTITY',
                      //     payload: {
                      //       ...item,
                      //       quantity,
                      //     },
                      //   });
                      // }}
                      onChange={(e) => updateCartItem(item, e.target.value * 1)}
                      disabled={loadingItems.includes(item.id)}
                      type='number'
                      // inputProps={{ min: 1 }}
                      sx={{ width: 58, height: 58, textAlign: 'center', mx: 1 }}
                    />
                    <IconButton
                      aria-label='delete'
                      color='#5B4F47'
                      // onClick={() => {
                      //   dispatch({
                      //     type: 'REMOVE_CART_ITEM',
                      //     payload: {
                      //       ...item,
                      //     },
                      //   });
                      // }}
                      onClick={() => removeCartItem(item.id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <Box sx={{ padding: 1 }}>
          <Typography variant='subtitle1'>
            {/* 合計 Total: NT$ {state.total} */}
            合計 Total: NT$ {cartData.final_total}
          </Typography>
        </Box>
        <Button
          variant='contained'
          fullWidth
          sx={{
            background: '#5B4F47',
            color: '#fff',
            borderRadius: '50px',
            '&:hover': {
              background: '#4B413A',
            },
          }}
          onClick={toggleDrawer(false)}
        >
          <Link
            component={RouterLink}
            underline='none'
            to='/login'
            color='white'
          >
            結帳 Checkout
          </Link>
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton aria-label='cart' onClick={toggleDrawer(true)}>
        {/* <Badge badgeContent={state.cartList.length} showZero */}
        {/* 上面是原本的，後來改成六角API的購物車 */}
        <Badge
          badgeContent={cartData?.carts?.length}
          showZero
          sx={{
            '& .MuiBadge-badge': {
              bgcolor: '#B6846B',
              color: '#fff',
            },
          }}
        >
          <ShoppingCartIcon sx={{ color: '#5B4F47', width: 28, height: 28 }} />
        </Badge>
      </IconButton>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
