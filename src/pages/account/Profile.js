import React, {useState} from 'react';

import { Box, Grid, FormControl, FormGroup, TextField, Button, Typography, Select, MenuItem, InputLabel } from '@mui/material';

export const Profile = () => {
  const [userName, setUserName] = useState('Annie');
  const [email, setEmail] = useState('ae24856@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('0916008400');
  const [address, setAddress] = useState('桃園市平鎮區德育路34號');
  const [storeName, setStoreName] = useState('宏宇門市');
  const [convenstore,setConvenstore] = useState('711');
  return (
    <Box py={{ xs: 3, md: 6 }} px={{ xs: 4, md: 12 }} sx={{ width:'100%'}} >
      <FormControl fullWidth>
        <Typography variant="h6" sx={{color: '#5B4F47', fontWeight: '700', mb: 1}} >Profile 個人資料</Typography>
        <FormGroup>
        {/* <FormLabel>User Name</FormLabel> */}
          <TextField value={userName} label="User Name 名稱" variant="outlined" fullWidth required
          onChange={(e) => setUserName(e.target.value)}
            sx={{
              my:2,
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
          <TextField value={email}  label="Email 電子信箱" variant="outlined" fullWidth required type='email'
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
        <FormGroup sx={{mb:2.5}}>
          {/* <FormLabel>Email</FormLabel> */}
          <TextField value={phoneNumber} label="Phone Number手機號碼" variant="outlined" required fullWidth type='tel'
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <Typography variant="h6" sx={{color: '#5B4F47', fontWeight: '700', mb: 1}} >Address 寄貨地址</Typography>
        <FormControl fullWidth>
          <InputLabel id="convenstore" >Convenstore 便利商店</InputLabel>
          <Select
            labelId="convenstore"
            id="demo-simple-select"
            value={convenstore}
            label="Convenstore 便利商店"
            onChange={(e) => setConvenstore(e.target.value)}
            sx={{
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              height: 40,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5B4F47",
                borderWidth: 2,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#A98B73",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#A98B73",
              },
            }}
          >
            <MenuItem value={'全家'}>全家</MenuItem>
            <MenuItem value={'711'}>711</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <TextField value={storeName} label="Store Name 店名" variant="outlined" fullWidth required
          onChange={(e) => setStoreName(e.target.value)}
            sx={{
              my:2,
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
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
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
          <TextField value={address} label="Address 門市地址" variant="outlined" fullWidth required
          onChange={(e) => setAddress(e.target.value)}
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
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A98B73",
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
        <FormGroup>
          <Typography variant="subtitle1" sx={{color: '#5B4F47', fontWeight: '700', mb:2.5}} >Social Connections 社群連結</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" justifyContent="space-between" sx={{mb:2.5}}>
                <Typography variant="subtitle2" sx={{color: '#5B4F47'}}> Line </Typography>
                <Button variant="contained"
                  sx={{
                    width:'120px',
                    background: '#A98B73',
                    borderRadius: '50px',
                    '&:hover': {
                      background: '#9A7F69',
                    },
                  }}>Connect 連結</Button>
              </Box>
            </Grid>
          </Grid>
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
          > Save 儲存
          </Button>
        </FormGroup>
      </FormControl>
    </Box>
  )
}
