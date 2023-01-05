import { styled, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const StyledBox = styled(Box) (({theme}) => ({

    background: `${theme.palette.primary.smoothIcons}`,
    display: 'flex',
    flexDirection:'column',
    textDecoration:'none',
    width:'80px',
    height:'100px',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:'12px 0',
    borderRadius:'10px',
    cursor:'pointer',
    ":hover": {
        background: '#c5c5c518', 
        border: "1px solid #6666662a",
        boxShadow: "0px 4px 8px rgb(0 0 0 / 45%)"
    }   
}))

export const Categories = () => {
  return (

    <Stack direction='row'  justifyContent='center' mt={5} sx={{gap:{xs:'5px', sm:'30px'} ,padding:{sm:'0', xs:'15px'}}}>

        <StyledBox component='a' href = '#generos'>
            <FormatListBulletedIcon fontSize="large" sx={{color:'primary.white'}}/>
            <Typography color="primary.white">Generos</Typography>
        </StyledBox>

        <StyledBox component='a' href = '#tv'>
            <LiveTvIcon fontSize="large" sx={{color:'primary.white'}}/>
            <Typography color="primary.white">Tv Series</Typography>
        </StyledBox>

        <StyledBox component='a'>
            <TheaterComedyIcon fontSize="large" sx={{color:'primary.white'}}/>
            <Typography color="primary.white">Theater</Typography>
        </StyledBox>

        <StyledBox component='a' href = '#fav'>
            <LocalMoviesIcon fontSize="large" sx={{color:'primary.white'}}/>
            <Typography textAlign='center' color="primary.white">Your favorites</Typography>
        </StyledBox>

    </Stack>
  )
}
