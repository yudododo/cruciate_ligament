import React, {useState} from 'react';

import { Box, FormControl, FormGroup, TextField, Button, Typography } from '@mui/material';

export const Setting = () => {
  const [email, setEmail] = useState('ae24856@gmail.com');
  const [password, setPassword] = useState('123456');
  return (
    <Box py={6} px={12} sx={{ width:'100%'}} >
      <FormControl fullWidth>
        <Typography variant="h6" sx={{color: '#5B4F47', fontWeight: '700', mb: 2.5}} >Setting 設定</Typography>
        <Typography variant="subtitle2" sx={{color: '#5B4F47', fontWeight: '700', mb:2.5}} >Email 電子信箱</Typography>
        <FormGroup sx={{mb:2.5}}>
        {/* <FormLabel>User Name</FormLabel> */}
          <TextField value={email} label="Current Email 目前的電子信箱" variant="outlined" fullWidth
            sx={{
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 2,
                },
              },
            }} 
            InputProps={{
              readOnly: true,
              sx: {
                height: 40, 
              },       
            }}
          />
        </FormGroup>
        <FormGroup sx={{mb:2.5}}>
          {/* <FormLabel>Email</FormLabel> */}
          <TextField value={email}  label="New Email 新的電子信箱" variant="outlined" fullWidth required type='email'
          onChange={(e) => setEmail(e.target.value)}
            sx={{
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 2,
                },
              },
            }} 
            InputProps={{
              sx: {
                height: 40, 
              },       
            }}
            />
        </FormGroup>
        <FormGroup sx={{mb: 2.5}}>
          <Button variant="contained"
              sx={{ 
                background:'#5B4F47',
                color: '#fff',
                borderRadius: '50px', 
                  '&:hover': {
                    background: '#4B413A',
                  },
                }}
          > Update Email 更新電子信箱
          </Button>
        </FormGroup>
        <Typography variant="subtitle2" sx={{color: '#5B4F47', fontWeight: '700', mb:2}} >Password 密碼</Typography>

        <FormGroup sx={{mb:2.5}}>
          {/* <FormLabel>Email</FormLabel> */}
          <TextField value={password} label="Current Password 目前的密碼" variant="outlined" required fullWidth type='password'
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 2,
                },
              },
            }} 
            InputProps={{
              sx: {
                height: 40, 
              },       
            }}
            />
        </FormGroup>
        <FormGroup sx={{mb:2.5}}>
          {/* <FormLabel>Email</FormLabel> */}
          <TextField value={password} label="New Password 新的密碼" variant="outlined" required fullWidth type='tel'
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 2,
                },
              },
            }} 
            InputProps={{
              sx: {
                height: 40, 
              },       
            }}
            />
        </FormGroup>
        <FormGroup sx={{mb:2.5}}>
          {/* <FormLabel>Email</FormLabel> */}
          <TextField value={password} label="Confirm Password 確認密碼" variant="outlined" required fullWidth type='tel'
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
                  borderWidth: 2,
                },
              },
            }} 
            InputProps={{
              sx: {
                height: 40, 
              },       
            }}
            />
        </FormGroup>
        <FormGroup sx={{mb:2.5}}>
          <Button variant="contained"
              sx={{ 
                background:'#5B4F47',
                color: '#fff',
                borderRadius: '50px', 
                  '&:hover': {
                    background: '#4B413A',
                  },
                }}
          > Update Password 更新密碼
          </Button>
        </FormGroup>
      </FormControl>
    </Box>
  )
}
