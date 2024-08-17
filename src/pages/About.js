import React from 'react'
import { Typography, Container, Grid, Box } from '@mui/material';
import cruciate_ligament_02 from '../images/cruciate_ligament_02.jpg';
import cruciate_ligament_03 from  '../images/cruciate_ligament_03.jpg';
export const About = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
          <img 
            src={cruciate_ligament_02} alt="bg"
            style={{ width: '100%', maxWidth: 1000, height: 'auto', borderRadius: '50px' }}
          />
        </Grid>
        
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: { xs: 2, sm: 5, md: 10 }, }}>
          <Typography variant="h6" align="center" sx={{ fontSize: { xs: '0.9rem', sm: '1.4rem', md: '1.6rem' }}}>
            每個人都在尋找自己的出路，而我在茫茫大海中遇見了編織✿
            <br/>
            喜歡每次的出攤，遇到的每一個人，
          </Typography>
          <br/>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.3rem' }}}>
            儘管只是一面之緣，每一次的交流和分享，都讓我感受到編織的溫暖與美好。
            <br/>
            編織，不僅僅是一種技藝，更蘊含著我對生活的熱愛與對夢想的追求。
            <br/>
            在這個快節奏的時代，編織給了我一個慢下來的理由，讓我在一針一線間找到內心的平靜和滿足。
            希望每一位朋友，都能找到屬於自己的溫暖與幸福。
            <br/>
            
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontSize: { xs: '0.9rem', sm: '1.4rem', md: '1.6rem' }}}>
            歡迎來到我的編織世界，讓我們一起分享這份溫暖與美好◍ꕀꕀ
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={cruciate_ligament_03} alt="bg"
            style={{ width: '100%', maxWidth: 400, height: 'auto', borderRadius: '50px' }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
