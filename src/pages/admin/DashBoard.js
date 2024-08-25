import { useState } from 'react';
import { Container, Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Grid } from '@mui/material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Link as RouterLink } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
export const DashBoard = () => {
  return (
    <Container maxWidth="xl" >
      <Grid container sx={{ flexDirection:  { xs: 'column', md: 'row' }}}>
        <Grid item xs={12} md={2} sx={{ background: '#CAC6C5', borderRadius: 3}}>
        <List>
      {[
        { text: 'Product list 產品列表', to: '/admin/productList', icon: <LocalMallRoundedIcon/> },
        { text: 'Coupon List 優惠卷列表', to: '/admin/couponList', icon: <DiscountRoundedIcon/> },
        { text: 'Order List 訂購列表', to: '/admin/orderList', icon: <BorderColorRoundedIcon /> },
      ].map((item, index) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton 
            component={RouterLink} 
            to={item.to}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontSize: 14,
              }} 
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </Grid>
    <Grid item xs={12} md={9.5}
      sx={{ background: '#CAC6C5', borderRadius: 3, alignItems: 'center', display: 'flex', flexDirection: 'column', 
        ml: { xs: 0, md: 5 }
      }}
    >
      <Outlet/>
    </Grid>

    </Grid>
    </Container>
  );
}

