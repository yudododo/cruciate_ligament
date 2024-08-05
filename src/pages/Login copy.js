// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';


import {Avatar, Button,TextField, Grid, Box, Typography, Container, Link } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import emailLogin from '../firebase/auth/emailLogin';

// import { useSelector } from 'react-redux';
// import useSignin from '@/hooks/api/useSignin';
// import { useEffect, useState, createContext, useContext  } from "react"; 
// import { useTheme } from '@mui/material/styles';
import Cookies from 'js-cookie';

export const Login = () => {
  // const { signMessage, googleLogin, emailLogin } = useSignin();


// const token = useSelector(state => state.user.token);
// const userId = useSelector(state => state.user.userId);

// const router = useRouter();
  // 示例使用 useNavigate 钩子
const navigate = useNavigate();
// navigate('/path');

  // console.log(userId, token);
  // const theme = useTheme();
  // firebase 雖然有註冊成功，但是同時登入成功
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') || '';
    const password = data.get('password') || '';
    emailLogin(email, password);
    navigate('/account')
  };

  // if (token && userId) {
  //   console.log(userId, token); // 在这里打印 userId 和 token 的值
  //   Cookies.set('userId', userId);
  //   Cookies.set('token', token);
  //   return navigate.push('/account');
  // }

  //那時候要跳轉頁面的
  // const navigate = useNavigate(); // 初始化 useNavigate

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // 模拟登录操作，然后导航到 /account
  //   console.log('click');
  //   navigate('/account'); // 使用 navigate 进行导航
  // }


  return (
    <Container component="main" sx={{mt: 2, mb:3, width:"390px"}}>
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
          <LoginIcon sx={{color:'white', width:30, height:30}} />
        </Avatar>
        <Typography component="h1" variant="h6" sx={{my:3}}> Login </Typography>
        <Box component="form" noValidate sx={{ width: "269px"}} onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
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
            autoComplete="email"
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
            variant='outlined'
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
            type="password"
            id="password"
            autoComplete="current-password"
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
          >
            Log in 登入
          </Button>
        <Grid container justifyContent="space-between" alignItems="center" sx={{mb:3}}>
          <Grid item sx={{'a:hover ': {borderBottom: '1px solid #5B4F47'}}}>
            <Link href="/resetPassword" sx={{ fontSize: 12, textDecoration:'none', color:'#FFFFFF' }}>
              Forgot password? 忘記密碼
            </Link>
          </Grid>
          <Grid item sx={{'a:hover ': {borderBottom: '1px solid #5B4F47'}}}>
            <Link href="/signup" sx={{ fontSize: 12,textDecoration:'none', color:'#FFFFFF'}}>
              Sign Up 註冊
            </Link>
          </Grid>
        </Grid>
          <Grid container>
            <Grid item xs sx={{ mb:2 }}>
              <Button
                  // onClick={}
                variant="contained"
                sx={{
                  width: '100%',
                  background: '#5B4F47',
                  borderRadius: '50px',
                  textTransform: 'none',
                  '&:hover': {
                    background: '#4B413A',
                  },
                }}
              >
                <img  src="/line.png" alt="line_logo"
                  style={{ width: 25, height: 25, marginRight: 10 }}
                />
                Log in with Line
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box> 
    </Container>
  );
}
