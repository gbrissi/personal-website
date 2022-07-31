import React from 'react'

import { styled } from '@mui/material/styles'
import {AppBar, Toolbar, Paper, Typography, Grid, Container, Fade } from '@mui/material'

function Header() {
  return (
    <AppBar color='primary'>
      <CustomToolbar variant='regular'>
        <Fade in unmountOnExit>
          <LinkContainer>
            <TypographyContainer>
              <CustomTypography sx={{cursor:'pointer'}} variant='body1'>Home</CustomTypography>
              <GradientUnderscore></GradientUnderscore>
            </TypographyContainer>
            <TypographyContainer>
              <CustomTypography sx={{cursor:'pointer'}} variant='body1'>About me</CustomTypography>
              <GradientUnderscore></GradientUnderscore>
            </TypographyContainer>          
            <TypographyContainer>
              <CustomTypography sx={{cursor:'pointer'}} variant='body1'>Portfolio</CustomTypography>
              <GradientUnderscore></GradientUnderscore>
            </TypographyContainer>
          </LinkContainer>
        </Fade>
      </CustomToolbar>
    </AppBar>
  )
}

const TypographyContainer = styled('div')`
`

const LinkContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CustomTypography = styled(Typography)`
  font-weight: bolder;
  :hover {
    font-size: 1.1rem
  }
`

const GradientUnderscore = styled('div')`
  margin-top: -4px;
  height: 3px;
  border-radius: 5px;
  background: linear-gradient(90deg, rgba(53,102,147,1) 0%, rgba(52,172,130,1) 100%);
`

const CustomToolbar = styled(Toolbar)`
  width: 75vw;
  align-self: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`

export default Header