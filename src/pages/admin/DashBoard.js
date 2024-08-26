// import { useState } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Box,
} from '@mui/material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
export const DashBoard = () => {
  const location = useLocation();
  return (
    <Container maxWidth='xl'>
      <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            background: '#CAC6C5',
            borderRadius: 3,
            ml: { xs: 0, md: 5 },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              '& .MuiListSubheader-root': {
                bgcolor: '#121212',
                color: '#5B4F47',
              },
              '& .MuiListItemText-primary': {
                color: '#5B4F47',
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
              },
              '& .MuiListItemText-secondary': {
                color: '#5B4F47',
                fontSize: { xs: '0.5rem', sm: '0.7rem', md: '0.8rem' },
              },
              '& .MuiListItemIcon-root > svg': {
                height: { xs: '1.4rem', md: '1.6rem' },
                width: { xs: '1.4rem', md: '1.6rem' },
              },
              // "& .MuiTouchRipple-ripple": {
              //     color: "#A98B73",
              // },
              '& .Mui-selected': {
                bgcolor: '#B8B3B3',
              },
            }}
          >
            <List
              disablePadding
              disableGutters
              dense
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
              }}
            >
              {[
                {
                  text: 'Product list',
                  sec: '產品列表',
                  to: '/admin/productList',
                  icon: <LocalMallRoundedIcon />,
                },
                {
                  text: 'Coupon List',
                  sec: '優惠卷列表',
                  to: '/admin/couponList',
                  icon: <DiscountRoundedIcon />,
                },
                {
                  text: 'Order List',
                  sec: '訂購列表',
                  to: '/admin/orderList',
                  icon: <BorderColorRoundedIcon />,
                },
              ].map((item, index) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  selected={location.pathname === item.to}
                >
                  <ListItemButton component={RouterLink} to={item.to}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} secondary={item.sec} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            background: '#CAC6C5',
            borderRadius: 3,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            ml: { xs: 0, md: 5 },
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
