import { Box, createTheme, styled } from "@mui/material";


export const purpleTheme = createTheme({
    palette:{
        background: {
            paper: 'linear-gradient(270deg, #4E4376 20%, #2B5876 100% )',
          },
        primary: {
            main:'#4E4376',
            smoothIcons:'#ffffff30',
            smoothText:'rgba(0, 0, 0, 78%)',
            white:'white',
            black:'black',
        },
        secondary: {
            main: '#2B5876',
            text: '#C4C4C4',
        },
    }
});

export const FlexBox = styled(Box) ({
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
})