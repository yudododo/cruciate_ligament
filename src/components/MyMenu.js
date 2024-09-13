import { Menu, MenuItem, ListItemIcon, Link } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Link as RouterLink} from  'react-router-dom';

const icons = {
  'Orders 訂購紀錄': BorderColorRoundedIcon,
  'Profile 帳戶資料': PersonRoundedIcon,
  'Setting 設定': SettingsRoundedIcon,
  'Login 登入': LoginRoundedIcon,
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
            <Link component={RouterLink} underline="none" to="/login" color="#5B4F47">{setting}</Link>
          </MenuItem>
        );
      })}
    </Menu>
  );
};