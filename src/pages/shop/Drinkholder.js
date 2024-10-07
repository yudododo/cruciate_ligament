import { Products } from '../../pages/Products';
import { Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Drinkholder = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        Drink Holder 飲料提袋
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" component={RouterLink} color="inherit" to="/shop/all">
          All
        </Link>
        <Link
          underline="hover"
          color="inherit"
          component={RouterLink}
          to="/shop/drinkholder"
        >
          Drink Holder
        </Link>
      </Breadcrumbs>
      <Products category='drinkholder' />
    </div>
  );
};
