import { Box, Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const TrendCard = ({trendcnt,trndimg}) => {
  return (
   <>
   
    
    <Card sx={{ width:'25%' }} className='trend-card'>
    <CardContent>
      <Box>
        <img src={trndimg} alt="" width={"100%"} className='trend-img'/>
      </Box>
        <Typography gutterBottom variant="h5" component="div" className='trend-cnt'>
          {trendcnt}
        </Typography>
        <Box>
        <Button variant="contained"  className='trend-btn'>
      PLAY QUIZ
    </Button>
        </Box>
      </CardContent>
      </Card>

   </>
  )
}

export default TrendCard
