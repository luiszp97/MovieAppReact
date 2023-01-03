import { Typography } from '@mui/material'
import React from 'react'
import { PageLayout } from '../../layout/PageLayout'
import { FlexBox } from '../../theme/purpleTheme'

export const Footer = () => {
  return (
    <PageLayout>
      <FlexBox component='footer' sx={{justifyContent:'space-evenly', padding:'10px 0',boxShadow:'-7px 4px 8px 4px rgb(0 0 0 / 73%)'}}>
          <Typography variant='h6' fontSize={15} fontWeight={700} color="primary.white">Power by: Luis Zambrano</Typography>
          <Typography variant='h6' fontSize={15} fontWeight={700} color="primary.white">Design by: @nagyux</Typography>
      </FlexBox>
    </PageLayout>
  )
}
