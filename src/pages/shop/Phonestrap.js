import { Products } from '../../pages/Products';
import { Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Phonestrap = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        Phone Strap 手機掛繩
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" component={RouterLink} color="inherit" to="/shop/all">
          All
        </Link>
        <Link
          underline="hover"
          color="inherit"
          component={RouterLink}
          to="/shop/phonestrap"
        >
          Phone Straps
        </Link>
      </Breadcrumbs>
      <Products category='phonestrap' />
    </div>
  );
};

