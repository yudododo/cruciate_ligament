import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function AddProduct({
  openAdd,
  handleCloseAdd,
  handleChange,
  onSave,
  newProduct,
}) {
  const TextFieldProps = {
    required: true,
    autoFocus: true,
    fullWidth: true,
    variant: 'outlined',
    InputProps: {
      sx: {
        height: 35,
        fontSize: 13,
        '& .MuiInputBase-input': {
          padding: '10px 14px',
        },
      },
    },
  };
  return (
    <Dialog
      open={openAdd}
      onClose={handleCloseAdd}
      maxWidth='sm'
      fullWidth
      PaperProps={{
        sx: {
          border: '2px solid #2F66B6',
          borderRadius: 5,
        },
      }}
    >
      <DialogTitle>Add Product 新增產品</DialogTitle>
      <IconButton
        aria-label='close'
        onClick={handleCloseAdd}
        sx={{
          position: 'absolute',
          right: 15,
          top: 15,
        }}
      >
        {' '}
        <CancelRoundedIcon />{' '}
      </IconButton>
      <DialogContent dividers>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1' sx={{ flexGrow: 1 }}>
            {' '}
            Classification 分類{' '}
          </Typography>
          <TextField
            {...TextFieldProps}
            name='classification'
            label=''
            value={newProduct.classification}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%' }}
          />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1'> Product Name 產品名稱 </Typography>
          <TextField
            {...TextFieldProps}
            name='product'
            label=''
            value={newProduct.product}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%' }}
          />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1'> Selling Price 售價 </Typography>
          <TextField
            {...TextFieldProps}
            name='price'
            label=''
            value={newProduct.price}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%' }}
          />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1'> Status 啟用狀態 </Typography>
          <TextField
            {...TextFieldProps}
            name='status'
            label=''
            minRows={4}
            value={newProduct.status}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%' }}
          />
        </Box>
        <Box display='flex' alignItems='center' sx={{ mb: 2 }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            sx={{ flexGrow: 1 }}
          >
            <Typography variant='subtitle1'> Edit 編輯 </Typography>
            <TextField
              {...TextFieldProps}
              name='edit'
              label=''
              value={newProduct.edit}
              onChange={handleChange}
              sx={{ maxWidth: '65%' }}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ my: 0.5 }}>
        <Button
          fullWidth
          onClick={onSave}
          sx={{
            background: '#5B4F47',
            color: '#fff',
            borderRadius: '20px',
            textTransform: 'none',
            '&:hover': {
              background: '#4B413A',
            },
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
