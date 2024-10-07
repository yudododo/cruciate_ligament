import { Products } from '../../pages/Products';
import { Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Keychain = () => {
  return (
    <div>
      <Typography variant='h6' component='h1' gutterBottom>
        Key Chain 鑰匙圈
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" component={RouterLink} color="inherit" to="/shop/all">
          All
        </Link>
        <Link
          underline="hover"
          color="inherit"
          component={RouterLink}
          to="/shop/keychain"
        >
          Key Chain
        </Link>
      </Breadcrumbs>
      <Products category='keychain' />
    </div>
  );
};
