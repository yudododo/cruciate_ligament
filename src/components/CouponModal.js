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
} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function CouponModal({
  openAdd,
  closeModal,
  getCoupons,
  type,
  tempCoupon,
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
    is_enabled: 1,
    percent: 80,
    due_date: 1555459200,
    code: 'testCode',
  });

  const [date, setDate] = useState(new Date());
  console.log(date)

  useEffect(() => {
    if (type === 'create') {
      //初始化
      setTempData({
        title: '',
        is_enabled: 1,
        percent: 80,
        due_date: 1555459200,
        code: 'testCode',
      });
      setDate(new Date())
    } else if (type === 'edit') {
      // setTempData(tempProduct) //用外部傳進來的
      setTempData(tempCoupon);
      setDate(new Date(tempCoupon.due_date))
    }
    console.log(type, tempCoupon);
  }, [type, tempCoupon]);

  const handleChange = (e) => {
    console.log(e);
    const { value, name } = e.target;
    if (['percent'].includes(name)) {
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
      });
    }
  };
  //製作儲存按鈕
  const submit = async () => {
    console.log(tempData);
    try {
      let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon`;
      let method = 'post';
      if (type === 'edit') {
        api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
        method = 'put';
      }
      const res = await axios[method](api, {
        data: {
          ...tempData,
          due_date: date.getTime(), // 轉換成 unix timestamp
        },
      });
      console.log(res);
      closeModal();
      getCoupons();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog
      open={openAdd}
      // onClose={closeProductModal}
      onClose={(e, reason) => {
        if (reason !== 'backdropClick') {
          closeModal(e);
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
      <DialogTitle>
        {type === 'create'
          ? 'Add Coupon 新增優惠券'
          : `Edit 編輯${tempData.title}`}
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={closeModal}
        sx={{
          position: 'absolute',
          right: 15,
          top: 15,
        }}
      >
        <CancelRoundedIcon />
      </IconButton>
      <DialogContent dividers>
        <pre>{JSON.stringify(tempData)}</pre>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ mb: 2 }}
        >
          <Typography variant='subtitle1' sx={{ flexGrow: 1 }}>
            Coupon Title 標題
          </Typography>
          <TextField
            {...TextFieldProps}
            name='title'
            label=''
            value={tempData.title}
            onChange={handleChange}
            sx={{
              flexGrow: 2,
              maxWidth: '65%',
              '& .MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#5B4F47',
                  borderWidth: 1.5,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#A98B73',
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
          <Typography variant='subtitle1'> Discount 折扣 </Typography>
          <TextField
            {...TextFieldProps}
            name='percent'
            type='number'
            label=''
            value={tempData.percent}
            onChange={handleChange}
            sx={{
              flexGrow: 2,
              maxWidth: '65%',
              '& .MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#5B4F47',
                  borderWidth: 1.5,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#A98B73',
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
          <Typography variant='subtitle1'> Expired Date 到期日期 </Typography>
          <TextField
            {...TextFieldProps}
            name='due_date'
            type='date'
            label=''
            // value={tempData.due_date}
            value={`${date.getFullYear().toString()}-${(
              date.getMonth() + 1
            )
              .toString()
              .padStart(2, 0)}-${date
              .getDate()
              .toString()
              .padStart(2, 0)}`}
            onChange={(e) =>{
              console.log(e.target.value)
              setDate(new Date(e.target.value))
            }}
            sx={{
              flexGrow: 2,
              maxWidth: '65%',
              '& .MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#5B4F47',
                  borderWidth: 1.5,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#A98B73',
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
          <Typography variant='subtitle1'> Coupon 優惠碼 </Typography>
          <TextField
            {...TextFieldProps}
            name='code'
            label=''
            value={tempData.code}
            onChange={handleChange}
            sx={{
              flexGrow: 2,
              maxWidth: '65%',
              '& .MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#5B4F47',
                  borderWidth: 1.5,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#A98B73',
                  borderWidth: 1.5,
                },
              },
            }}
          />
        </Box>
        <Box display='flex' alignItems='center' sx={{ mb: 2 }}>
          <Typography variant='subtitle1'> Status 啟用狀態 </Typography>
          <Checkbox
            name='is_enabled'
            checked={!!tempData.is_enabled}
            sx={{ ml: 9 }}
            onChange={handleChange}
            value={tempData.is_enabled}
          />
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
