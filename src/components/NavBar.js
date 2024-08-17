import React from 'react'
import { useState } from 'react';

import { MyMenu } from '../components/MyMenu';
import { Cart } from '../components/Cart';
import { Link as RouterLink } from 'react-router-dom';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import logo_pic_only from '../images/logo_pic_only.png';


const settings = ['Orders 訂購紀錄', 'Profile 帳戶資料', 'Setting 設定', 'Logout 登出'];
const shopOptions = [
  { label: 'All Products | 全部商品', path: 'all' },
  { label: 'Phone Strap | 手機掛繩', path: 'phonestrap' },
  { label: 'Key Chain | 鑰匙圈', path: 'keychain' },
  { label: 'Drink Holder | 飲料袋', path: 'drinkholder' }
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleOpenShopMenu = (e) => {
    setAnchorElShop(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseShopMenu = () => {
    setAnchorElShop(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)' }}>
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src={logo_pic_only} alt="logo" width={35} height={35} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mx: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: '#B6846B',
              textDecoration: 'none',
            }}
          >
            拾字韌袋
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#B6846B' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Link component={RouterLink} underline="none" to="/" color="#5B4F47">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link component={RouterLink} underline="none" to="/about" color="#5B4F47">About</Link>
              </MenuItem>
              <MenuItem>
                <Link component={RouterLink} underline="none" to="/shop" color="#5B4F47">Shop</Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <img src={logo_pic_only} alt="logo" width={35} height={35} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mx: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#B6846B',
              textDecoration: 'none',
            }}
          >
            拾字韌袋
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, display: 'block' }}>
              <Link component={RouterLink} underline="none" to="/" color="#5B4F47">Home</Link>
            </Button>
            <Button sx={{ my: 2, color: '#B6846B', display: 'block' }}>
              <Link component={RouterLink} underline="none" to="/about" color="#5B4F47">About</Link>
            </Button>
            <Button
              sx={{ my: 2, color: '#5B4F47', display: 'block' }}
              onClick={handleOpenShopMenu}
            >
              Shop
            </Button>
            <Menu
              id="shop-menu"
              anchorEl={anchorElShop}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElShop)}
              onClose={handleCloseShopMenu}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              {shopOptions.map((option) => (
                <MenuItem key={option} onClick={handleCloseShopMenu}>
                  <Link component={RouterLink} underline="none"to={`/shop/${option.path}`} color="#5B4F47">
                  {option.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <MyMenu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              settings={settings}
            />
          </Box>
          <Cart />
        </Toolbar>
      </Container>
    </AppBar>
  );
};