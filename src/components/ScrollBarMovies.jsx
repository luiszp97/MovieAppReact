import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'

import AddIcon from '@mui/icons-material/Add';
import { FlexBox } from '../theme/purpleTheme'
import { useNavigate } from 'react-router-dom';


const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const Item = styled(Box)(({theme})=>({
    border:`2px solid ${theme.palette.primary.black}`,
    borderRadius: '20px',
    overflow:'hidden',
    boxShadow: "0px 4px 8px rgb(0 0 0 / 45%)",
    cursor:'pointer'
  
}))

const StyledImg = styled('img') ({
    width:'100%',
    height:'150%'
})

const StyledText = styled(Typography) (({theme}) => ({
    width:'100%',
    height:'50px',
    padding:'5px 10px',
    background: `${theme.palette.primary.smoothText}`,

}))

const StyledBox = styled(Box) ({
    display:'flex',
    direction:'row',
    width:'90vw',
    overflowX:'scroll',
    '::-webkit-scrollbar': {background:'#0000', borderRadius:'8px', height:'10px'},
    '::-webkit-scrollbar-thumb': {background:'#ffffff35', borderRadius:'8px'},
})

export const ScrollBarMovies = ({movieName, title, type = '', data = []}) => {

    const navigate = useNavigate();

    const widthCartSm = ()=>{

        if(type === 'movie' ){
            return '350px'
        }
        
        return '250px'
    };
    
    const heightCartSm = ()=>{
        if(type === 'movie'){
            return '300px'
        }
        
        return '320px'
    };

    const widthCartXs = ()=>{
        
        if(type === 'movie'){
            return '65vw'
        }
        
        return '38vw'
    };

    const heightCartXs = ()=>{
        if(type === 'movie'){
            return '160px'
        }
        
        return '100%'
    };
    
  return (

    <FlexBox flexDirection='column' mt={5} id = {type}>

        <Typography variant='h6' sx={{fontSize:{xs:'16px'}}} alignSelf='start' ml={7} mb={2} color='primary.white' >{title}</Typography>

        {
             data === null || data.length === 0
            ? <StyledBox>
                <Stack direction='row' spacing={type === 'movie' ? 5 : 3} mb={2}>
                    <Item  onClick={()=> navigate(`#movie`)} position="relative" sx={{ border:'1px dashed white', display:'flex', justifyContent:'center', alignItems:'center' ,width:{sm: widthCartSm(), xs: widthCartXs()}, height:{sm: heightCartSm(), xs:heightCartXs()}}}>
                        <AddIcon sx={{ color:'primary.white', fontSize:'70px' }} />
                    </Item>
                </Stack>
             </StyledBox>
            : <StyledBox >

                    <Stack direction='row' spacing={type === 'movie' ? 5 : 3} mb={2}>
        
                    {data.map(item => (
                        <Item onClick={()=> navigate(`/${item.media_type !== undefined ? item.media_type : item.seasons !== undefined ? 'tv' : 'movie'}/${item.id}`)} key={item.id} position="relative" sx={{  width:{sm: widthCartSm(), xs: widthCartXs()}, height:{sm: heightCartSm(), xs:heightCartXs()}}}>
                
                            <StyledImg alt='photo' sx={{height:{sm: type !== 'movie' ?  '100%' : '150%', xs: type !== 'movie' ? '100%' : '150%'}}} src ={`${imageUrl}${item.poster_path}`} loading='lazy'/>
        
                            <StyledText variant='body2' position='absolute' top='85%' color = 'primary.white' display= {movieName ? 'block' : 'none'}>{item.title}</StyledText>
        
                        </Item>
        
                    ))}
                    
                    </Stack>
 
                </StyledBox> 
        }
    </FlexBox>
  )
}
