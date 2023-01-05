import React, { useState } from 'react'
import { Box, Button, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { PageLayout } from '../layout/PageLayout'
import { FlexBox } from '../theme/purpleTheme'
import { Footer, Navbar } from '../ui/components'
import { Stack, styled } from '@mui/system';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const StyledImg = styled('img') ({
  width:'100%',
  height:'100%',
  borderRadius:'8px',
  cursor:'pointer'
});

export const SearchPage = () => {

  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('');

    const {query} = useParams()
    
    const data = useApi();
    console.log(data)

    const handleSubmit = ()=>{

    }

  return (
    <PageLayout >

      <Navbar/>

      <Box sx={{minHeight:'calc(100vh - 64px - 44px)'}}>
        <FlexBox paddingTop={3} paddingBottom={3}>

            <ChevronLeftIcon onClick={()=>navigate(history.back())} sx={{textAlign:'center', color:'white', marginLeft:'10px', cursor:'pointer', marginRight:{sm:'50px', xs:'15px'},  marginTop:'10px',fontSize:'40px'}} />

            <form onSubmit={handleSubmit}>
              
              <TextField 
                sx={{marginTop:'10px',width:{sm:'50vw', xs:'70vw'}, border:'1px solid white', borderRadius:'4px'}}
                size = 'small'
                color = 'secondary'
                variant = 'outlined'
                type = 'text' 
                placeholder="Serch your favorite movie"
                value={searchValue}
                onChange={(e)=> {setSearchValue(e.target.value)}}
                required
              />

              <IconButton onClick={handleSubmit}>

                <SearchIcon fontSize="medium" sx={{marginTop:'8px', position:'absolute', right:'30px', top:'9px',color:'primary.white'}}/>
              
              </IconButton>

            </form>

            </FlexBox>

            <Grid container gap={4} justifyContent='space-evenly' mt={5} mb={5} sx={{padding:{sm:'0 60px', md:'0 100px',xs:'0 10px'}}}>

                <Grid item sm={12} lg={5} md={12} xs={12} display='flex' sx={{width:'20vw',height:{sm:'35vh', xs:'30vh'}, backgroundColor:'primary.smoothIcons', borderRadius:'8px'}}>
                <Box width={'30%'} padding={2} sx={{width:{xs:'35%'}}}>
                  <StyledImg src={`${imageUrl}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`}/>
                </Box>
                <Divider orientation='vertical' />
                <Box padding={2} width={'70%'} display="flex" flexDirection='column' justifyContent='space-between' sx={{width:{xs:'65%'}}}>

                    <Stack direction='row' justifyContent='space-evenly'>

                      <Typography variant='h5' fontWeight={700} color='primary.white' sx={{fontSize:{xs:'15px', sm:'20px'}}}>Avatar</Typography>

                      <Button variant='contained' size='small' sx={{backgroundColor:'primary.smoothIcons', borderRadius:'16px', fontSize:{xs:'10px', sm:'12px'},padding:{xs:'0', sm:'0 5px'}}}>Accion</Button>
                      <Button variant='contained' size ='small' sx={{backgroundColor:'primary.smoothIcons', borderRadius:'16px', fontSize:{xs:'10px', sm:'12px'},padding:{xs:'0', sm:'0 5px'}}}>Aventure</Button>
                      <Button variant='contained' size ='small' sx={{backgroundColor:'primary.smoothIcons', borderRadius:'16px', fontSize:{xs:'10px', sm:'12px'}, padding:{xs:'0', sm:'0 5px'}, display:{xs:'none', sm:'block'}}}>Sience Ficction</Button>

                    </Stack>

                    <Typography sx={{fontSize:{xs:'10px', sm:'15px'}}} textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi ipsum sunt debitis nobis explicabo. Commodi illo, cupiditate nesciunt quasi rem expedita voluptatibus fuga enim suscipit nisi saepe rerum nulla.
                    </Typography>

                    <Button variant='contained' fullWidth sx={{fontSize:{xs:'12px', sm:'15px'}}}>More</Button>
                </Box>
                </Grid>

            </Grid>
      </Box>

      <Footer/>
   
    </PageLayout>

  )
}
