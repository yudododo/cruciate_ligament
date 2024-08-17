import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
export const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="div" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" component="div" sx={{ mb: 4 }}>
        Page Not Found
      </Typography>
      <Button
        variant="contained"
        component={RouterLink}
        to="/"
        sx={{ mt: 2 }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}