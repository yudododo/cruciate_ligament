import React, { useState } from 'react';
import {Avatar, Button,TextField, Grid, Box, Typography, Container, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import SignupIcon from '@mui/icons-material/EditNoteRounded';
import emailRegister from '../firebase/auth/emailRegister';
export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setReapeatPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await auth.createUserWithEmailAndPassword(email, password);
  //     console.log(result);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') || '';
    const password = data.get('password') || '';
    const repeatPassword = data.get('repeatPassword') || '';
    
    if (password !== repeatPassword) {
      return alert('The password does not match.');
    }
  
    emailRegister(email, password);
  };

  // const navigate = useNavigate(); // 初始化 useNavigate

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // 模拟登录操作，然后导航到 /account
  //   console.log('click');
  //   navigate('/account'); // 使用 navigate 进行导航
  // }
  return (
    <Container component="main" sx={{mt: 2, mb:3, width:"390px"}}>
      {error && <p>{error}</p>}
      <Box
        display= 'flex'
        flexDirection='column'
        alignItems= 'center'
        p={2.5}
        borderRadius= '15px'
        sx={{
          bgcolor:'#B4ADAA',
          border: '2px solid',
          borderColor: '#5B4F47',
        }}
      >
        <Avatar sx={{ p:2, background:'#5B4F47', width: 50, height: 50 }} >
          <SignupIcon sx={{color:'white', width:30, height:30}} />
        </Avatar>
        <Typography component="h1" variant="h6" sx={{my:3}}> Sign Up 註冊 </Typography>
        <Box component="form" noValidate sx={{ width: "269px"}} onSubmit={handleSubmit}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={{
              mb:3,
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4B413A",
                  borderWidth: 2,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4B413A",
                },
              }
            }}
            required
            fullWidth
            id="email"
            label="Email Address 電子信箱"
            name="email"
            autoFocus
            InputProps={{
              sx: {
                height: 40, 
                fontSize: 13,
                '& .MuiInputBase-input': {
                  padding: '10px 14px',
                },
              }
            }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{
              mb:3,
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4B413A",
                  borderWidth: 2,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4B413A",
                },
              }
            }}
            required
            fullWidth
            name="password"
            label="Password 密碼"
            // type="password"
            id="password"
            autoComplete='off'
            InputProps={{
              sx: {
                height: 40, 
                fontSize: 13,
                '& .MuiInputBase-input': {
                  padding: '10px 14px',
                },
              },       
            }}
          />
          <TextField
            value={repeatPassword}
            onChange={(e) => setReapeatPassword(e.target.value)}
            variant="outlined"
            sx={{
              mb:3,
              background:'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.4) 100%)',
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5B4F47",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4B413A",
                  borderWidth: 2,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4B413A",
                },
              }
            }}
            required
            fullWidth
            name="repeatPassword"
            label="Repeat Password 重複密碼"
            autoComplete='off'
            type="repeatPassword"
            id="repeatPassword"
            InputProps={{
              sx: {
                height: 40, 
                fontSize: 13,
                '& .MuiInputBase-input': {
                  padding: '10px 14px',
                },
              },       
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb:3 , 
              background:'#5B4F47',
              color: '#fff',
              borderRadius: '50px', 
              textTransform: 'none', 
              '&:hover': {
                background: '#4B413A',
                },
              }}
            // onClick={handleSubmit}
          >
            Sign Up 註冊
          </Button>
        </Box>
      </Box> 
    </Container>
  )
}
