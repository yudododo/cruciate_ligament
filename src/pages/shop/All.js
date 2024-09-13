import { Products } from '../../pages/Products';
import { Typography } from '@mui/material';

export const All = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        All 全部商品
      </Typography>
      <Products />
    </div>
  );
};