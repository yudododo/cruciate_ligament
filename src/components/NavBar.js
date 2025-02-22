import { useState } from 'react';
import { MyMenu } from '../components/MyMenu';
import { Cart } from '../components/Cart';
import { Link as RouterLink } from 'react-router-dom';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuRounded';
import logo_pic_only from '../images/logo_pic_only.png';

const settings = ['Orders 訂購紀錄', 'Profile 帳戶資料', 'Setting 設定', 'Login 登入'];
const shopOptions = [
  { label: 'All Products | 全部商品', path: 'all' },
  { label: 'Phone Strap | 手機掛繩', path: 'phonestrap' },
  { label: 'Key Chain | 鑰匙圈', path: 'keychain' },
  { label: 'Drink Holder | 飲料袋', path: 'drinkholder' }
];

export const NavBar = ({ cartData, getCart }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [anchorElLearn, setAnchorElLearn] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleOpenShopMenu = (e) => {
    setAnchorElShop(e.currentTarget);
  };
  const handleOpenLearnMenu = (e) => {
    setAnchorElLearn(e.currentTarget);
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

  const handleCloseLearnMenu = () => {
    setAnchorElLearn(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)' }}>
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Toolbar disableGutters>
          {/* 電腦版 */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link component={RouterLink} underline="none" to="/" color="#5B4F47" display= 'flex' flexDirection='row'>
            <img src={logo_pic_only} alt="logo" width={35} height={35} />
            <Typography
              variant="h6"
              noWrap
              // component="a" 沒註解掉會重複嵌套
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
          </Link>
          </Box>
          {/* 手機板 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
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
                <Typography color="#5B4F47" onClick={handleOpenLearnMenu}> Learn </Typography>
              </MenuItem>
              <Menu
                id="learn-menu"
                anchorEl={anchorElLearn}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElLearn)}
                onClose={handleCloseLearnMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuItem onClick={handleCloseLearnMenu}>
                  <Link component={RouterLink} underline="none" to="/learn/about" color="#5B4F47">
                    About 關於我
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseLearnMenu}>
                  <Link component={RouterLink} underline="none" to="/learn/faqs" color="#5B4F47">
                    FAQs 常見問題
                  </Link>
                </MenuItem>
              </Menu>
              <MenuItem>
                <Typography color="#5B4F47" onClick={handleOpenShopMenu} >Shop</Typography>
              </MenuItem>
                <Menu
                id="shop-menu"
                anchorEl={anchorElShop}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElShop)}
                onClose={handleCloseShopMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {shopOptions.map((option) => (
                  <MenuItem key={option.path} onClick={handleCloseShopMenu}>
                    <Link component={RouterLink} underline="none" to={`/shop/${option.path}`} color="#5B4F47">
                    {/* <Link component={RouterLink} underline="none" to={`/products/${option.path}`} color="#5B4F47"> */}
                      {option.label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>
          {/* 手機板 */}
          <Box width='100%' justifyContent='center' sx={{display: { xs: 'flex', md: 'none' } }}>
            <Link component={RouterLink} underline="none" to="/" color="#5B4F47" display= 'flex' flexDirection='row'  >
            <img src={logo_pic_only} alt="logo" width={35} height={35} />
              <Typography
                variant="h6"
                noWrap
                // component="a"
                sx={{
                  mx: 2,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#B6846B',
                  textDecoration: 'none',
                }}
              >
                拾字韌袋
              </Typography>
            </Link>
          </Box>
          {/* 電腦版 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, display: 'block' }}>
              <Link component={RouterLink} underline="none" to="/" color="#5B4F47">Home</Link>
            </Button>
            <Button sx={{ my: 2, color: '#5B4F47', display: 'block' }}
            onClick={handleOpenLearnMenu}>
              Learn
            </Button>
              <Menu
                id="learn-menu"
                anchorEl={anchorElLearn}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElLearn)}
                onClose={handleCloseLearnMenu}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <MenuItem onClick={handleCloseLearnMenu}>
                  <Link component={RouterLink} underline="none" to="/learn/about" color="#5B4F47">
                    About 關於我
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseLearnMenu}>
                  <Link component={RouterLink} underline="none" to="/learn/faqs" color="#5B4F47">
                    FAQs 常見問題
                  </Link>
                </MenuItem>
              </Menu>
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
                <MenuItem key={option.path} onClick={handleCloseShopMenu}>
                  <Link component={RouterLink} underline="none"to={`/shop/${option.path}`} color="#5B4F47">
                  {/* <Link component={RouterLink} underline="none" to={`/products/${option.path}`} color="#5B4F47"> */}
                  {option.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* UserMenu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Annie Chen" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <MyMenu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              settings={settings}
            />
          </Box>
          {/* 把cartData 傳進去cart 裡面 */}
          <Cart cartData={cartData} getCart={getCart}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};