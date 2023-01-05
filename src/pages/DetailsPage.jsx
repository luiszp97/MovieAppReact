import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Card, CardActions, CardContent, CardMedia, Stack, Typography,styled, IconButton, Box } from "@mui/material"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';

import { getApiData, localData } from "../helpers";
import { PageLayout } from "../layout/PageLayout"
import { FlexBox } from "../theme/purpleTheme"
import { LoadingPage } from "./LoadingPage";



const imageUrl = 'https://image.tmdb.org/t/p/w500/';
const imageUrlBig = 'https://image.tmdb.org/t/p/w1280/';

const StyledText = styled(Typography)(({theme})=>({
    textAlign:'center',
    background:`${theme.palette.primary.smoothIcons}`,
    color:`${theme.palette.primary.white}`,
    borderRadius:'16px'
}))


export const DetailsPage = ({type}) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [datos , setDatos] = useState(null);
    const [actors , setActors] = useState(null);
    const [fav , setFav] = useState(null);

    const favoriteData = JSON.parse(localStorage.getItem('fav'));


    const addToFav = ()=>{
        localData(datos)
        setFav(!fav)
    }

    useEffect(()=> {

        const getData = async() =>{
            const data = await getApiData(`${type}/${id}`);
            
            setDatos(data)
        }

        const getCast = async ()=>{
            const {cast} = await getApiData(`${type}/${id}/credits`);
            setActors(cast)
        }

        const getFav = ()=>{

            if(favoriteData !== null){
                const isFavorite = favoriteData.some(element => element.id === parseFloat(id));
                setFav(isFavorite)
            }
        }
                
        getData();
        getCast();
        getFav();

    }, [])

   if(datos !== null){

        const isAMovie = datos.seasons === undefined
        setDatos

   }

   
   
  return (
    <PageLayout>
        <FlexBox sx={{minHeight:'100vh', padding:'15px 0'}}>
            {
                datos === null || actors === null
                ? <LoadingPage/>
                :<Card sx={{height:"100%", borderRadius:'40px', width:{sm:'60%', xs:'90%'},boxShadow: "0px 4px 8px rgb(0 0 0 / 45%)", border:'1px solid black'}}>
                    <Box sx={{ height:{sm:'40vh', xs:'30vh'}, overflow:'hidden', position:'relative'}}>
                        <IconButton onClick={()=> navigate('/home')} sx={{position:'absolute', backgroundColor:'primary.smoothIcons', top:'10px', left:'10px', ':hover': {backgroundColor:'#ffffff69'}}}>
                            <ClearIcon/>
                        </IconButton>
                        <CardMedia
                            sx={{height:'100vh'}}
                            image={`${imageUrlBig}/${datos.poster_path}`}
                            title="green iguana"
                        />
                    </Box>
                <CardContent sx={{borderTop:'2px solid white',padding:'10px'}}>
                    <Typography variant="h5" textAlign='center' fontWeight={700} color='primary.white' component="div">
                        {type === 'tv' ? datos.name : datos.original_title}
                    </Typography>
                    <Typography variant="subtitle1" fontSize={12} fontWeight={300} textAlign='center' color="secondary.text">
                        {type === 'tv' ? datos.name : datos.original_title}
                    </Typography>
                </CardContent>

                <Stack direction='row' alignItems='center' justifyContent='space-evenly' >

                    <StyledText sx={{fontSize:{sm:'15px', xs:'13px' }, fontWeight:{xs:'300', sm:'500'}, padding:{xs:'3px 8px', sm:'3px 15px'}}} >

                        {datos.adult ? '+18' : '+16'}

                    </StyledText>

                    <StyledText sx={{backgroundColor:'#F5C518', color:'black', fontWeight:'700',fontSize:{sm:'15px', xs:'13px' }, padding:{xs:'3px 8px', sm:'3px 15px'}}}>

                       {`imdb : ${datos.vote_average}`}

                    </StyledText>

                    <StyledText sx={{fontSize:{sm:'15px', xs:'13px' }, fontWeight:{xs:'300', sm:'500'}, padding:{xs:'3px 8px', sm:'3px 15px'}}} >

                        {datos.genres[0].name}

                    </StyledText>


                    <StyledText sx={{fontSize:{sm:'15px', xs:'13px' }, fontWeight:{xs:'300', sm:'500'}, padding:{xs:'3px 8px', sm:'3px 15px'}}} >

                        {datos.genres[1].name}

                    </StyledText>

                    {
                        fav
                        ?<FavoriteIcon onClick={addToFav} fontSize="small" sx={{color:'primary.white', cursor:'pointer'}}/>
                        :<FavoriteBorderIcon onClick={addToFav} fontSize="small" sx={{color:'primary.white', cursor:'pointer'}} />

                    }
                </Stack>

                <Typography mt={2} textAlign='justify' color='secondary.text' variant='body2' sx={{padding:'0 15px'}}> 
                 
                {datos.overview}

                </Typography>

                <Typography variant="h6" ml={2} mt={1} fontSize={18} color="primary.white">
                    Cast
                </Typography>

                <CardActions sx={{overflowX:'scroll', padding:'0',  '::-webkit-scrollbar': {background:'#0000', borderRadius:'8px', height:'10px'},
                '::-webkit-scrollbar-thumb': {background:'#ffffff35', borderRadius:'8px'},}}>
                    <FlexBox sx={{padding:'0 10px'}} gap={3}>
                        { 
                            actors.map(actor => (
                                <FlexBox flexDirection='column' mb={2} key={actor.id}>
                                    <IconButton sx={{width:{xs:'60px', sm:'80px'}}}>
                                        <img style={{width:'100%', height:'100%',borderRadius:'8px', boxShadow: "0px 4px 8px rgb(0 0 0 / 45%)"}} src={`${imageUrl}/${actor.profile_path}`}/>
                                    </IconButton>
                                    <Typography fontSize={12} textAlign='center' fontWeight={500} color='secondary.text'>
                                       {actor.name}
                                    </Typography>
                                    <Typography fontSize={10} textAlign='center' color='secondary.text'>
                                        {actor.character}
                                    </Typography>
                            </FlexBox>
                            ))
                        
                        }
                    </FlexBox>
                </CardActions>
            </Card>
            }
        </FlexBox>
    </PageLayout>
  )
}
