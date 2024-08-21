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
        sx={{ 
          mb:3 , 
          background:'#5B4F47',
          color: '#fff',
          borderRadius: '50px', 
          textTransform: 'none', 
          '&:hover': {
            background: '#4B413A',
            },
          }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}