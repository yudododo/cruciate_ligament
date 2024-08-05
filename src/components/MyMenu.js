import React from 'react'

import { Menu, MenuItem, ListItemIcon, Link } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const icons = {
  'Orders 訂購紀錄': BorderColorRoundedIcon,
  'Profile 帳戶資料': PersonRoundedIcon,
  'Setting 設定': SettingsRoundedIcon,
  'Logout 登出': LogoutRoundedIcon,
};
export const MyMenu = ({ anchorEl, open, onClose, settings }) => {
  return (
    <Menu
      sx={{ mt: '45px', width: '200px' }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={onClose}
    >
      {settings.map((setting) => {
        const IconComponent = icons[setting];
        return (
          <MenuItem key={setting} onClick={onClose} sx={{fontSize: 14, color: '#5B4F47'}}> 
            <ListItemIcon>
              {IconComponent && <IconComponent style={{ color: '#B6846B' }} />}
            </ListItemIcon>
            {/* <Typography textAlign="center" color="#B6846B">{setting}</Typography> */}
            <Link underline="none" href="/login" color="#5B4F47">{setting}</Link>
          </MenuItem>
        );
      })}
    </Menu>
  );
};