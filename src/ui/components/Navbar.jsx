import { LocalMovies } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography } from '@mui/material'

import { FlexBox } from '../../theme/purpleTheme';

const StyledTollbar = styled(Toolbar)(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 20%, ${theme.palette.secondary.main} 100% )`,
    boxShadow: '0px 4px 8px rgb(0 0 0 / 73%)'
     
}));

export const Navbar = () => {

  return (
    <AppBar position='static'>
        <StyledTollbar >
            <FlexBox sx={{cursor:'pointer'}}>
                <LocalMovies fontSize='large' sx={{marginRight:'5px' }}/>
                <Typography variant='h6' fontWeight={700} sx={{display:{sm: 'block', xs:'none'}}}>The MovieApp</Typography>
            </FlexBox>
            <Typography component='a' href='/' sx={{cursor:'pointer', padding :'5px 10px',textDecoration:'none', ':visited':{color:'primary.white'}, ':hover':{backgroundColor:'primary.smoothIcons', borderRadius:'8px'}}} fontWeight={700} variant='button'>My Account</Typography>
        </StyledTollbar>
    </AppBar>
  )
}
