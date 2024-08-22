import React, { useReducer, useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
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
import { FAQs } from './pages/FAQs';
// import axios from 'axios';

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
  // useEffect(()=>{
  //   // console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_PATH)
  //   (async()=>{
  //     const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products/all`)
  //     console.log(res)
  //   })();
    
  // }, [])
  const reducer = useReducer (cartReducer, cartInit);

 return(
  <ThemeProvider theme={theme}>
  <CartContext.Provider value={reducer}>
  <Container disableGutters maxWidth="xl" >
    <NavBar/>
    <Box mb='120px'style={{top: '80px', bottom: '200px', position: 'relative', display: 'flex', flexDirection: 'column' }} >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
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
      <Route path="/faqs" element={<FAQs/>}></Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </Box>
     <Box>
      <Footer />
    </Box>
  </Container>
  </CartContext.Provider>
  </ThemeProvider>
 )
}

export default App;