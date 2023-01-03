import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { getApiData } from '../helpers/getApiData'
import { PageLayout } from '../layout/PageLayout'


const StyledText = styled(Typography) (({theme})=>({
    padding:'8px 15px',
    height:"40px",
    
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

const StyledImg = styled('img') ({
    width:'100%',
    height:'100%',
    borderRadius:'8px',
    border:'2px solid black',
    cursor:'pointer'
})

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

export const CategoiesPage = () => {

    const navigate = useNavigate()

    const [data, setData] = useState(null);
    const [genres, setGenres] = useState(null);
    let info;
 
    const {query} = useParams()

    useEffect(()=>{
        
        const getMovies = async ()=>{
            
            const {results} = await getApiData(`discover/movie?with_genres=${query}`);
            const {genres} = await getApiData('/genre/movie/list');
            
            setGenres(genres)
            setData(results)
        };
        
        getMovies()
        
    }, [query])

    genres !== null && (info = genres[(genres.findIndex(element => element.id === parseFloat(query)))]) ; 
    
    console.log(info)
    
    

  return (
    <PageLayout>

        {
            genres === null
            ? <h1>Loading</h1>
            :<Box sx={{padding:'0 10px'}}> 
            <Stack padding={2} spacing={3} direction='row' sx={{overflowX:'scroll',     '::-webkit-scrollbar': {background:'#0000', borderRadius:'8px', height:'10px'},
                '::-webkit-scrollbar-thumb': {background:'#ffffff35', borderRadius:'8px'},}}>
                {genres.map(genre => (
                    <Box key={genre.id}>
                        <StyledText onClick={()=> navigate(`/categories/${genre.id}`)}>
                            {genre.name}
                        </StyledText>
                    </Box>
                       ))} 
            </Stack>
            <Box mt={5} sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
               
                <ChevronLeftIcon onClick={()=>navigate(history.back())} sx={{textAlign:'center', color:'white', marginLeft:'10px', cursor:'pointer'}} />
                
                <Typography variant='h6' ml={5} color='primary.white' fontWeight={700} textAlign='center' >{info.name}</Typography>
            </Box> 

            <Grid container spacing={2} mt={5} sx={{padding:{sm:'0 40px 40px 40px', xs:' 0 20px 40px 20px'}}}>
                {
                data.map(element => (
                        
                    <Grid item display='flex' alignItems='center' justifyContent='center' sm={4} xs={6} sx={{padding:'10px'}}>
                        <Box sx={{width:{sm:'20vw', xs:'40vw'}, height:{sm:'40vh', xs:'35vh'}}}>
                            <StyledImg onClick={()=>navigate(`/movie/${element.id}`)} src={`${imageUrl}${element.poster_path}`}/>
                        </Box>
                    </Grid>
                ))

                }
                

                
                
            </Grid>
            </Box>  

               
        }


    </PageLayout>
  )
}
