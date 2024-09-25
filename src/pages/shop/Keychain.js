import { Products } from '../../pages/Products';
import { Typography } from '@mui/material';

export const Keychain = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        Key Chain 鑰匙圈
      </Typography>
      <Products category='keychain' />
    </div>
  );
};
