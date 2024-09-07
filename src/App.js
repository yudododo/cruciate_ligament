import React, { useReducer, useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { About } from './pages/learn/About';
import { FAQs } from './pages/learn/FAQs';
import { Shop } from './pages/Shop';
import { All } from './pages/shop/All';
import { Phonestrap } from './pages/shop/Phonestrap';
import { Keychain } from './pages/shop/Keychain';
import { Drinkholder } from './pages/shop/Drinkholder';
import { Account } from './pages/account/Account';
import { Profile } from './pages/account/Profile';
import { Setting } from './pages/account/Setting';
import { Orders } from './pages/account/Orders';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { CartContext, cartReducer, cartInit } from './store';
import { NotFound } from './pages/NotFound';
import { DashBoard } from './pages/admin/DashBoard';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminCoupons } from './pages/admin/AdminCoupons';
import { OrderList } from './pages/admin/OrderList';
import axios from 'axios';

import './index.css'; 

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'serif',
      textTransform: 'none',
    },
  },
});

function App() {
  useEffect(()=>{
    // console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_PATH)
    (async()=>{
      const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products/all`)
      // console.log(res)
    })();
    
  }, [])
  const reducer = useReducer (cartReducer, cartInit);
  const location = useLocation();
  const isDashboardPath = location.pathname.startsWith('/admin');

 return(
  <ThemeProvider theme={theme}>
  <CartContext.Provider value={reducer}>
  <Container disableGutters maxWidth="xl" >
    {!isDashboardPath && <NavBar />}
    <Box 
      // mb='120px'
      // style={{top: '80px', bottom: '200px', position: 'relative', display: 'flex', flexDirection: 'column' }}
       sx={{
        flex: 1,
        mb: '120px', 
        top: '80px',
        bottom: isDashboardPath ? '0' : '200px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} >
        <Route path="about" element={<About />} ></Route>      
        <Route path="faqs" element={<FAQs />}></Route>      
      </Route>
      <Route path="/shop" element={<Shop />} >
        <Route path="all" element={<All />} />
        <Route path="phonestrap" element={<Phonestrap />}></Route>
        <Route path="keychain" element={<Keychain />}></Route>
        <Route path="drinkholder" element={<Drinkholder />}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/login" element={!user ? <Login /> : <Navigate to="/account" />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />}>
      {/* <Route path="/account" element={user ? <Account /> : <Navigate to="/login" />} > */}
        <Route path="profile" element={<Profile />}></Route>
        <Route path="setting" element={<Setting />}></Route>
        <Route path="orders" element={<Orders />}></Route>
      </Route>
      <Route path="*" element={<NotFound/>} />
      <Route path="/admin" element={<DashBoard />}>
      <Route path="products" element={<AdminProducts />}></Route>
        <Route path="coupons" element={<AdminCoupons />}></Route>
        <Route path="orderList" element={<OrderList />}></Route>
      </Route>
    </Routes>
    </Box>
     <Box>
     {!isDashboardPath && <Footer />}

    </Box>
  </Container>
  </CartContext.Provider>
  </ThemeProvider>
 )
}

export default App;