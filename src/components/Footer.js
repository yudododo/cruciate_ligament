import {Typography, Container, Box, Grid, Link} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo_w from '../images/logo_w.png';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#AC9E97', minHeight: 135}} >
      <Grid container spacing={2}>
        <Grid item xs={7} sm={4.5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box
          component="img"
          src={logo_w}
          alt="logo"
          sx={{
            width: { xs: 50, md: 100 },
            height: { xs: 50, md: 100 },
          }}
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
        <Grid item xs={2.5} sx={{ display: { xs: 'none', sm: 'block'} }}>
          <Typography variant="subtitle2"><Link component={RouterLink} underline="none" color="#5B4F47" to="/shop/all" >Shop</Link ></Typography>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/all'>All Products | 全部商品</Link></Typography><br/>

          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/phonestrap'>Phone Strap | 手機掛繩</Link></Typography><br/>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/keychain'>Key Chain | 鑰匙圈</Link></Typography> <br/>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to='/shop/drinkholder'>Drink Holder | 飲料袋</Link></Typography>
        </Grid>
        <Grid item xs={2.5} >
          <Typography variant="subtitle2"><Link underline="none" color="#5B4F47" >Learn</Link ></Typography>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to="/learn/about">About Us 關於我</Link></Typography><br/>
          <Typography variant="caption"><Link component={RouterLink} underline="none" color="#5B4F47" to="/learn/faqs">FAQs 常見問題</Link></Typography> <br/>
        </Grid>
        <Grid item xs={2.5}>
        <Typography variant="subtitle2"><Link underline="none" color="#5B4F47">Follow Us</Link ></Typography>
        <Link underline="none" color="#5B4F47" target="_blank" href="https://www.instagram.com/cruciate_ligament/">
        <InstagramIcon sx={{color: "#5B4F47", width: 30, height: 30}}/></Link>
        </Grid>
      </Grid>
    </Container>
  );
};

