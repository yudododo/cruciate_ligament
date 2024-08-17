import React from 'react';
import {Typography, Container, Box, Grid, Link} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo_w from '../images/logo_w.png';
import { Link as RouterLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#AC9E97', minHeight: 135}} >
      <Grid container spacing={2}>
        <Grid item xs={4.5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img 
          src={logo_w}
          alt="logo"
          width={100}
          height={100}
          />
          <Box ml={2} >
            <Typography variant="caption" color="white">
              © {new Date().getFullYear()} Cruciate_ligment. All rights reserved.
            <br/>
              Made with ❤️ by {' '}
            <Link color="inherit" href="https://github.com/yudododo" target="_blank">
              Annie
            </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant="subtitle2"><Link component={RouterLink} underline="none" color="#5B4F47" to="/shop/all" >Shop</Link ></Typography>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/all'>All Products | 全部商品</Link></Typography><br/>

          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/phonestrap'>Phone Strap | 手機掛繩</Link></Typography><br/>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/keychain'>Key Chain | 鑰匙圈</Link></Typography> <br/>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/drinkholder'>Drink Holder | 飲料袋</Link></Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant="subtitle2"><Link underline="none" color="#5B4F47" >Learn</Link ></Typography>
          <Typography variant="caption"><Link underline="none" color="#5B4F47">About Us</Link></Typography><br/>
          <Typography variant="caption"><Link underline="none" color="#5B4F47">FAQs</Link></Typography> <br/>
        </Grid>
        <Grid item xs={2.5}>
        <Typography variant="subtitle2"><Link underline="none" color="#5B4F47">Follow Us</Link ></Typography>
        <InstagramIcon sx={{color: "#5B4F47", width: 30, height: 30}}/>
        </Grid>
      </Grid>
    </Container>
  );
};

