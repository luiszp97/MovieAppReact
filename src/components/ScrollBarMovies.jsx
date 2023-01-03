import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
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

        if(type === 'tv' ){
            return '250px'
        }
        
        return '350px'
    };
    
    const heightCartSm = ()=>{
        if(type === 'tv'){
            return '320px'
        }
        
        return '300px'
    };

    const widthCartXs = ()=>{
        
        if(type === 'tv'){
            return '38vw'
        }
        
        return '65vw'
    };

    const heightCartXs = ()=>{
        if(type === 'tv'){
            return '100%'
        }
        
        return '160px'
    };

    // if(data === [] ){
    //     console.log(data[0].id)
    // }
  return (

    <FlexBox flexDirection='column' mt={5} id = {type}>

        <Typography variant='h6' sx={{fontSize:{xs:'16px'}}} alignSelf='start' ml={7} mb={2} color='primary.white' >{title}</Typography>

        {
            data === null 
            ? <h1>Loading</h1>
            : <StyledBox >

                    <Stack direction='row' spacing={type === 'tv' ? 3 : 5} mb={2}>
        
                    {data.map(item => (
                        <Item onClick={()=> navigate(`/${type === 'tv' ? 'tv' : 'movie'}/${item.id}`)} key={item.id} position="relative" sx={{  width:{sm: widthCartSm(), xs: widthCartXs()}, height:{sm: heightCartSm(), xs:heightCartXs()}}}>
                
                            <StyledImg alt='photo' sx={{height:{sm: type === 'tv' ?  '100%' : '150%', xs: type === 'tv' ? '100%' : '150%'}}} src ={`${imageUrl}${item.poster_path}`} loading='lazy'/>
        
                            <StyledText variant='body2' position='absolute' top='85%' color = 'primary.white' display= {movieName ? 'block' : 'none'}>{item.title}</StyledText>
        
                        </Item>
        
                    ))}
                    
                    </Stack>
 
                </StyledBox> 
        }
    </FlexBox>
  )
}
