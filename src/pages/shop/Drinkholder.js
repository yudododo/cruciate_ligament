import React from 'react';
import { Products } from '../../components/Products';

import { Typography } from '@mui/material';

export const Drinkholder = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        Drink Holder 飲料提袋
      </Typography>
      <Products type='drinkholder' />
    </div>
  );
};
