import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Shop = () => {
  return (
    <Container>
      {/* <h1>Shop</h1> */}
      <Outlet />
    </Container>
  )
}
