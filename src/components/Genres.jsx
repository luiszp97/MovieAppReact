import React from 'react'
import { Grid, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const StyledText = styled(Typography) (({theme})=>({
    padding:'10px 20px',
    height:"40px",
    width:'150px',
    overflow:'hidden',
    backgroundColor:'#ffffff18', 
    borderRadius:"8px", 
    cursor:'pointer', 
    color:`${theme.palette.primary.white}`,
    ":hover": {
        background: '#c5c5c518', 
        border: "1px solid #6666662a",
        boxShadow: "0px 4px 8px rgb(0 0 0 / 45%)"
    }   
}))

export const Genres = ({data = []}) => {

    const navigate = useNavigate()
    

  return (
    <>
        <Typography variant='h6' id='generos' ml={7} mt={3} color='primary.white'>Genres</Typography>

            <Grid container spacing={2} justifyContent='center' mt={5} alignItems="center" sx={{padding:{sm: '0 300px', xs: '0 10px'}}}>  
                {
                    data === null 
                    ? <h1> cargando </h1>
                    : data.map(item => (
                            <Grid item key={item.id} sm={3} xs={6} display='flex' justifyContent='center' alignItems='center' >
                                <StyledText component='a' onClick={()=> navigate(`/categories/${item.id}`)} textAlign='center'>{item.name}</StyledText>
                            </Grid>
                        ))
                    
                }
            </Grid>
    </>
  )
}
