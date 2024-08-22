import { Container, Button, Link, Grid, Avatar, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import dog from '../../images/avatar_dog.jpg';
import { Link as RouterLink } from 'react-router-dom';


export const Account = () => {
  return (
    <Container maxWidth="xl" >
      <Grid container sx={{ flexDirection:  { xs: 'column', md: 'row' }}}>
        <Grid item xs={12} md={3} py={2} sx={{ background: '#CAC6C5', borderRadius: 3, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: { xs: 'row', md: 'column' } , ml: { xs: 0, md: 5 }, mb: { xs: 2, md: 0 }}}>
          <Avatar sx={{ width: {xs: 0, md: 100} , height: {xs: 0, md: 100}, border: {xs: '0px solid #5B4F47', md: '3px solid #5B4F47'} , my:2.5  }} src={dog} />
          <Button sx={{ color: 'white', background: '#5B4F47', fontSize: { xs: '0.65rem', sm: '0.8rem', md: '1rem' } ,'&:hover': {
            background: '#4B413A', fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' }
          },}} startIcon={<SettingsRoundedIcon />} variant='contained'>
            <Link component={RouterLink} underline="none" to="/account/setting" color="white">Setting 設定</Link>
          </Button>
          <Divider sx={{ width: '100%', my: 2.5 , display: { xs: 'none', md: 'flex' } }}/>
          <Button sx={{ color: '#5B4F47', fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' }}} startIcon={<BorderColorRoundedIcon />}>
            <Link component={RouterLink} underline="none"  to="/account/orders" color="#5B4F47">Orders 訂購紀錄</Link>
          </Button>
          <Button sx={{color: '#5B4F47', fontSize: { xs: '0.75rem', sm: '0.8rem', md: '1rem' }}} startIcon={<PersonRoundedIcon />}>
            <Link component={RouterLink} underline="none" to="/account/profile" color="#5B4F47">Profile 個人資料 </Link>
          </Button>
        </Grid>
        <Grid item xs={12} md={8}
          sx={{ background: '#CAC6C5', borderRadius: 3, alignItems: 'center', display: 'flex', flexDirection: 'column', ml: { xs: 0, md: 5 }}}
        >
          <Outlet/>
        </Grid>
      </Grid>
    </Container>
  )
}
