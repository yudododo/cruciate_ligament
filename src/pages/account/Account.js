import React from 'react'

import { Container, Button, Link, Grid, Avatar, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

export const Account = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={3} py={2} sx={{ background: '#CAC6C5', borderRadius: 3, alignItems: 'center',  display: 'flex', flexDirection: 'column' }}>
          <Avatar sx={{ width: 100, height: 100, border: '3px solid #5B4F47', my:2.5  }} src="/avatar_dog.jpg" />
          <Button sx={{ color: 'white', background: '#5B4F47', '&:hover': {
            background: '#4B413A',
          },}} startIcon={<SettingsRoundedIcon />} variant='contained'>
            <Link underline="none" href="/account/setting" color="white">Setting 設定</Link>
          </Button>
          <Divider sx={{ width: '100%', my: 2.5 }}/>
          <Button  sx={{ color: '#5B4F47'}} startIcon={<BorderColorRoundedIcon />}>
            <Link underline="none"  href="/account/orders" color="#5B4F47">Orders 訂購紀錄</Link>
          </Button>
          <Button sx={{color: '#5B4F47'}} startIcon={<PersonRoundedIcon />}>
            <Link underline="none" href="/account/profile" color="#5B4F47">Profile 個人資料 </Link>
          </Button>
        </Grid>
        <Grid item xs={8} 
          sx={{ background: '#CAC6C5', borderRadius: 3, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 4 }}
        >
          <Outlet/>
        </Grid>
      </Grid>
    </Container>
  )
}
