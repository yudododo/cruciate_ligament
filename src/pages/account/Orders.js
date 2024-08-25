import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

export const Orders = () => {
  const createData = (orderId,items, shipping, payments, total, status) => {
    return { orderId, items, shipping, payments, total, status };
  }
  const rows = [
    createData('#123', '花花長掛繩', 'Pick up from store', 'Online by card', '490', 'Processing'),
  ];
  return (
    <Box py={{ xs: 3, md: 6 }} px={{ xs: 3, md: 12 }} sx={{ width:'100%'}}>
    <Typography align="left" variant="h6" sx={{color: '#5B4F47', fontWeight: '700', mb: 1}}>
      Order History 訂購紀錄
    </Typography>
    <TableContainer component={Paper} sx={{ maxWidth: 650, maxHeight: 450 }}>
      <Table stickyHeader  aria-label="simple table">
        <TableHead>
          {/* <TableRow>
            <TableCell colSpan={6}>Order History 訂購紀錄 </TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell>OrderId</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Shipping</TableCell>
            <TableCell>Payments</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.orderId}</TableCell>
              <TableCell>{row.items}</TableCell>
              <TableCell>{row.shipping}</TableCell>
              <TableCell>{row.payments}</TableCell>
              <TableCell>NT${row.total}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}/>
            <TableCell>Total Orders:</TableCell>
            <TableCell>{rows.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

