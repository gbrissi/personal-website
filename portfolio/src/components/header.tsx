import React from 'react'
import {styled} from '@mui/material'
import {AppBar, Toolbar, Paper, Typography, Grid, Container, Fade } from '@mui/material'

function Header() {
  return (
    <AppBar position='static' color='primary'>
      <CustomToolbar variant='regular'>
        <Fade timeout={300} in unmountOnExit>
          <LinkContainer>
            <StyledDivision>
              <CustomTypography sx={{cursor:'pointer'}} variant='body1'>Home</CustomTypography>
            </StyledDivision>
            <StyledDivision>
              <CustomTypography sx={{cursor:'pointer'}} variant='body1'>Sobre mim</CustomTypography>
            </StyledDivision>            
            <StyledDivision>
              <CustomTypography sx={{cursor:'pointer'}} variant='body1'>Projetos</CustomTypography>
            </StyledDivision>
          </LinkContainer>
        </Fade>
      </CustomToolbar>
    </AppBar>
  )
}

const StyledDivision = styled('div')`
  padding: 0 25px;
`

const LinkContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

const CustomTypography = styled(Typography)`
  font-weight: bolder;
  :hover {
    font-size: 1.1rem
  }
  ::after {
    display: block;
    position: relative;
    content: '';
    margin-top: -4px;
    height: 3px;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(53,102,147,1) 0%, rgba(52,172,130,1) 100%);
  }
`

const CustomToolbar = styled(Toolbar)`
  width: 75vw;
  align-self: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100vw;
  }
`

export default Header