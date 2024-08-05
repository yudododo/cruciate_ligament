import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material';

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/cruciate_ligament_01.jpg" alt="bg"
            style={{ width: '100%', maxWidth: 400, height: 'auto', borderRadius: '120px' }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: { xs: 2, sm: 5, md: 10 }, }}>
          <Typography variant="h5" align="center" sx={{ fontSize: { xs: '0.9rem', sm: '1.4rem', md: '1.6rem' }}}>
            Macrame 是一種的編織法，單用雙手重複打各種「結」就可以完成✓
          </Typography>
          <br/>
          <Typography variant="h6"sx={{ fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.3rem' }}}>
            打排球造成前十字韌帶斷裂，開刀後多了很多時間在家休養，看著Youtube學編織，發現編織很好玩✿
            <br/>The anterior cruciate ligament was ruptured due to playing volleyball, and I had surgery in November in 2022. Resting at home has given me more time to learn how to knit.◍ꕀꕀ
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
