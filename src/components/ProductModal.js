import { useState, useEffect } from 'react';
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
  Checkbox,
  MenuItem,
  Select,
} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function ProductModal({
  openAdd,
  closeProductModal,
  getProducts,
  type,
  tempProduct,
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
    title: '',
    category: '',
    origin_price: 100,
    price: 300,
    unit: '條',
    description: '123',
    content: 'content',
    is_enabled: 1,
    imageUrl: '',
  });

  useEffect(()=>{
    if (type ==='create'){
      //初始化
      setTempData({
        title: '',
        category: '',
        origin_price: 100,
        price: 300,
        unit: '條',
        description: '123',
        content: 'content',
        is_enabled: 1,
        imageUrl: '',
      })
    }else if( type ==='edit' ){
      // setTempData(tempProduct) //用外部傳進來的
      setTempData({
        ...tempProduct,
        unit: tempProduct.unit || '條',  // 确保 unit 有默认值
        price: tempProduct.price || 300, // 确保 price 有默认值 超怪不知道為啥要加上這兩項
      });
    }
    console.log(type,tempProduct)
  },[type, tempProduct])

  const handleChange = (e) =>{
    console.log(e)
    const {value, name} = e.target;
    if (['price','origin_price'].includes(name)) {
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
    console.log(tempData);
    try {
      let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product`;
      let method = 'post';
      if (type === 'edit') {
        api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${tempProduct.id}`;
        method = 'put';
      }
      const res = await axios[method](
        api, 
        {
          data: tempData
        }
      );
      console.log(res);
      closeProductModal();
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  const [imageUrl, setImageUrl] = useState('');
  const uploadFile = async(file) => {
    console.log(file);
    if (!file) {
    return
    }
    // JS 中的建構函式，用來建立一個用於提交表單資料的對象
  const formData = new FormData();
  formData.append('file-to-upload', file);
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('cruToken='))
    ?.split('=')[1];
  try {
    const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/upload`, formData, {
      headers: {
        authorization: token,
      }
    }
    )
    const { imageUrl } = res.data;
      setImageUrl(imageUrl);
      setTempData(prevData => ({ ...prevData, imageUrl }));
    console.log('success', res.data)
  } catch (error) {
    console.log('Upload error:', error);
  }
  }

  return (
    <Dialog
      open={openAdd}
      // onClose={closeProductModal}
      onClose={(e, reason) => {
        if (reason !== 'backdropClick') {
          closeProductModal(e);
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
      <DialogTitle>{type === 'create' ? 'Add Product 新增產品' : `Edit 編輯${tempData.title}`}</DialogTitle>
      <IconButton
        aria-label='close'
        onClick={closeProductModal}
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
          // justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1' sx={{ flexGrow: 1 }}>
            {' '}
            Category 種類{' '}
          </Typography>
          <Select
            name="category"
            id="category"
            labelId='category'
            value={tempData.category}
              // label="Category"
            required
            onChange={handleChange}
            sx={{
              height: 35, width: '65%',
              fontSize: 13,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5B4F47",
                borderWidth: 1.5,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#A98B73",
              },
              "& > svg": {
	              fill: "#5B4F47"//改變箭頭顏色
              }
            }}
          >
            <MenuItem value="phonestrap">Phone Strap 手機掛繩</MenuItem>
            <MenuItem value="keychain">Key Chain 鑰匙圈</MenuItem>
            <MenuItem value="drinkholder">Drink Holder 飲料袋</MenuItem>
          </Select>
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
            name='title'
            label=''
            value={tempData.title}
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
            name='origin_price'
            type='number'
            label=''
            value={tempData.origin_price}
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
          <Typography variant='subtitle1'> 上傳圖片 </Typography>
          <TextField
            {...TextFieldProps}
            name='file_to_upload'
            type='file'
            label=''
            onChange={(e)=> uploadFile(e.target.files[0])}
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
        <img src={imageUrl} alt='' style={{ width: 150, height: 150, marginLeft: 190, borderRadius: '5px' }} />
        <Box
          display='flex'
          alignItems='center'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1'> Status 啟用狀態 </Typography>
          <Checkbox name="is_enabled" checked={!!tempData.is_enabled} sx={{ ml: 9 }} onChange={handleChange} value={tempData.is_enabled} />
        </Box>
      </DialogContent>
      <DialogActions sx={{ my: 0.5 }}>
        <Button
          fullWidth
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
          {type === 'create' ? 'Add 新增' : 'Save 儲存'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
