import { useState } from 'react';
import { Snackbar, Button } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';


export const Message = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const [message, setMessage] = useState({});
  const bgColor = message.type === 'success'
    ? 'linear-gradient(180deg, #0BCDAF 0%, #15ADBF 100%)' // 成功時的背景顏色
    : 'linear-gradient(180deg, #F37A7A 0%, #E49F81 100%)'; // 錯誤時的背景顏色

  return (
    <>
    <Button type='button' onClick={() => {
      setMessage({
        type:'succ', //success, danger
        text: '這是一個成功的訊息'  
      })
      setOpenSnackbar(true); 
    }}>click me</Button>
    {message.text  && (
      <Snackbar
        open={openSnackbar}
        // autoHideDuration={6000}
        message={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            { message.type === 'success' ? <CheckCircleIcon fontSize="small" style={{ marginRight: '8px' }} /> : <CancelRoundedIcon fontSize="small" style={{ marginRight: '8px' }} /> 
            }
              {message.text}
          </span>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setOpenSnackbar(false)}
        key={`top,right`}
        sx={{ "& .MuiPaper-root":{
          background: bgColor,
          color: 'white',
        }
        }}
      />
    )}
    </>
  )
}
