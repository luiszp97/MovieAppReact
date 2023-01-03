import { styled, Box } from '@mui/material'
import React from 'react'
import { Footer } from '../ui/components/Footer'

const StyledBox = styled(Box) (({ theme }) => ({
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 20%, ${theme.palette.secondary.main} 100% )`,
}))

export const PageLayout = ({children}) => {
  return (
    <StyledBox>
        {children}
    </StyledBox>
  )
}
