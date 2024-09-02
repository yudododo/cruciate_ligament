import { useState } from 'react';
import axios from 'axios';
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
  Checkbox
} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function AddProduct({
  openAdd,
  handleCloseAdd,
  getProducts
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
  const [tempData, setTempData] = useState({
    title: 'title',
    category: '',
    origin_price: 100,
    price: 300,
    unit: '條',
    description: '123',
    content: '',
    is_enabled: 1,
    imageUrl: '123',
  });
  const handleChange = (e) =>{
    console.log(e)
    const {value, name} = e.target;
    if (['price'].includes(name)) {
      setTempData({
        ...tempData, 
        [name]: Number(value), //再轉換成數字型別
      });
    } else if (name === 'is_enabled') {
      setTempData({
        ...tempData,
        [name]: +e.target.checked, // boolean
      });
    } else {
      setTempData({
        ...tempData,
        [name]: value,
      })
    }
  }
  //製作儲存按鈕
  const submit = async () => {
    try {
      const res = await axios.post(
        `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product`, {
          data: tempData
        }
      );
      console.log(res);
      handleCloseAdd();
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog
      open={openAdd}
      // onClose={handleCloseAdd}
      onClose={(e, reason) => {
        if (reason !== 'backdropClick') {
          handleCloseAdd(e);
        }
      }}
      maxWidth='sm'
      fullWidth
      PaperProps={{
        sx: {
          border: '3px solid #5B4F47',
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
        <pre>
          {JSON.stringify(tempData)}
        </pre>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1' sx={{ flexGrow: 1 }}>
            {' '}
            Category 種類{' '}
          </Typography>
          <TextField
            {...TextFieldProps}
            name='category'
            label=''
            value={tempData.category}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 1.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 1.5,
                },
              }, }}
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
            name='content'
            label=''
            value={tempData.content}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 1.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 1.5,
                },
              },
             }}
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
            type='number'
            label=''
            value={tempData.price}
            onChange={handleChange}
            sx={{ flexGrow: 2, maxWidth: '65%',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 1.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 1.5,
                },
              },
             }}
          />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1'> Status 啟用狀態 </Typography>
          <Checkbox name="is_enabled" defaultChecked sx={{ ml: 9 }} onChange={handleChange} value={tempData.is_enabled} />
        </Box>
      </DialogContent>
      <DialogActions sx={{ my: 0.5 }}>
        <Button
          fullWidth
          // onClick={onSave}
          onClick={submit}
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
          Add 新增
        </Button>
      </DialogActions>
    </Dialog>
  );
}
