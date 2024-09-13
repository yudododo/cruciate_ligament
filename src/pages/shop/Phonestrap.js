import { Products } from '../../pages/Products';
import { Typography } from '@mui/material';

export const Phonestrap = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        Phone Straps 手機掛繩
      </Typography>
      <Products type='phonestrap' />
    </div>
  );
};

