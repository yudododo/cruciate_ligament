import {
  Container,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import dog from '../../images/avatar_dog.jpg';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export const Account = () => {
  const location = useLocation();
  return (
    <Container maxWidth='xl'>
      <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Grid
          item
          xs={12}
          md={2.5}
          sx={{
            background: '#CAC6C5',
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            ml: { xs: 0, md: 5 },
            mb: { xs: 2, md: 0 },
            py: { xs: 0, md: 2 },
          }}
        >
          <Avatar
            src={dog}
            sx={{
              width: 100,
              height: 100,
              my: 2,
              display: { xs: 'none', md: 'block' },
              border: '3px solid #5B4F47',
            }}
          />
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
                  text: 'Setting',
                  sec: '設定',
                  to: '/account/setting',
                  icon: <SettingsRoundedIcon />,
                },
                {
                  text: 'Orders',
                  sec: '訂購紀錄',
                  to: '/account/orders',
                  icon: <BorderColorRoundedIcon />,
                },
                {
                  text: 'Profile',
                  sec: '個人資料',
                  to: '/account/profile',
                  icon: <PersonRoundedIcon />,
                },
              ].map((item, index) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  selected={location.pathname === item.to}
                >
                  <ListItemButton component={RouterLink} to={item.to}>
                    <ListItemIcon >{item.icon}</ListItemIcon>
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
