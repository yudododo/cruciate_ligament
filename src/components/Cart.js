import React, { useContext } from 'react'

import { CartContext } from '../store';
import {Box, Drawer,Button, List, ListItem, ListItemText, Divider, IconButton, Typography, TextField, Badge, Link} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link as RouterLink } from 'react-router-dom';

export const Cart = () => {
  const [ state, dispatch ] = useContext(CartContext);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350, display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation">
      {/* {JSON.stringify(state.cartList)} */}
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center' >
        <Typography variant="h6">您的購物車 Shopping Cart  </Typography>  
        <CloseIcon onClick={toggleDrawer(false)} />
      </Box>
      <List>
      {state.cartList.map((item) =>{
        return(
          <ListItem key={item.id}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: 55, height: 55, marginRight: 16, borderRadius: '5px' }} />
            <ListItemText primary={item.title} secondary={`NT$${item.price} x ${item.quantity}`} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                // value="1"
                value={item.quantity}
                onChange={(e) => {
                  e.preventDefault();
                  const quantity = parseInt(e.target.value);
                  dispatch({
                    type:'CHANGE_CART_QUANTITY',
                    payload:{
                      ...item,
                      quantity
                    }
                  })

                }}
                type="number"
                // inputProps={{ min: 1 }}
                sx={{ width: 58, height: 58, textAlign: 'center', mx: 1 }}
              />
              <IconButton aria-label="delete" color="#5B4F47" 
                onClick={
                  ()=>{
                    dispatch({
                    type:'REMOVE_CART_ITEM',
                    payload:{
                      ...item
                    }
                  })
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </Box>
          </Box>
        </ListItem>
        )
      })}
      </List>
      <Divider />
      <Box sx={{ padding: 1 }}>
        <Typography variant="subtitle1">合計 Total: NT$ {state.total}</Typography>
      </Box>
      <Button variant="contained" fullWidth
        sx={{
          background:'#5B4F47',
          color: '#fff',
          borderRadius: '50px', 
            '&:hover': {
              background: '#4B413A',
            },
          }}
        onClick={toggleDrawer(false)}
        >
        <Link component={RouterLink} underline="none" to="/login" color="white">結帳 Checkout</Link>
      </Button>
    </Box>
  </Box>
);

  return (
    <div>
      <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
      <Badge badgeContent={state.cartList.length} showZero
        sx={{ 
          "& .MuiBadge-badge": {
            bgcolor:'#B6846B',
            color: '#fff', 
          }
        }}
      >
        <ShoppingCartIcon sx={{color: "#5B4F47", width: 28, height: 28}} />
      </Badge>
    </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}