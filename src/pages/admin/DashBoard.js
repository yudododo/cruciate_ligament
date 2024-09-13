import { useState, useEffect, useReducer } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Message } from '../../components/Message';
import { MessageContext, messageReducer, initMessage } from '../../store/MessageStore';
import logo_pic_only from '../../images/logo_pic_only.png';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import { Outlet } from 'react-router-dom';
export const DashBoard = () => {
  const reducer = useReducer(messageReducer, initMessage);
  const logout = () => {
    document.cookie = 'cruToken=;'
    navigate('/login');
  };
  const location = useLocation();
  const navigate = useNavigate();

  //取出 token
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('cruToken='))
    ?.split('=')[1];
  console.log(token);
  axios.defaults.headers.common['Authorization'] = token;

  //用戶沒有 token 的情況下，會跳轉到登入頁
  useEffect(() => {
    //加上立即函式，當你有 token 的情況下，會驗證 token 是否有效
    if (!token) {
      return navigate('/login');  // 加上 return 後面程式碼不會在運行了
    }(async () => {
      try {
        await axios.post('/v2/api/user/check');
      } catch (error) {
        console.log('user check error:', error);
        //加入判斷如果 token 是錯誤的，會跳轉到登入頁
        if(error.response.data.success === false){
          navigate('/login');
        }
      }
    })();
  }, [navigate, token]);

  return (
    <MessageContext.Provider value={reducer}>
    <Container maxWidth='xl'>
      <Message />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          sx={{
            background:
              'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
          }}
        >
          <Toolbar>
            <img src={logo_pic_only} alt='logo' width={35} height={35} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              sx={{
                mx: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: '#B6846B',
                textDecoration: 'none',
                flexGrow: 1, // This makes the Typography element take up available space
              }}
            >
              拾字韌袋
            </Typography>
            <Button
              sx={{
                my: 1.6,
                p: 0.8,
                bgcolor: '#5B4F47',
                color: '#FFF',
                display: 'block',
                borderRadius: '50px',
                '&:hover': {
                  background: '#9A7F69',
                },
              }}
              onClick={logout}
            >
              登出 Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
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
                  to: '/admin/products',
                  icon: <LocalMallRoundedIcon />,
                },
                {
                  text: 'Coupon List',
                  sec: '優惠卷列表',
                  to: '/admin/coupons',
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
          md={9}
          sx={{
            background: '#CAC6C5',
            borderRadius: 3,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            ml: { xs: 0, md: 5 },
            px: { xs: 5, md: 6 },
            pt: { xs: 5, md: 5 },
            pb: { xs: 5, md: 10 },
          }}
        >
          {/* 加上判斷可以防止刷新時出現錯誤 */}
          {token && <Outlet /> } 
        </Grid>
      </Grid>
    </Container>
    </MessageContext.Provider>
  );
};
