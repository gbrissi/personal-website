import React, {useState, useContext} from 'react'
import {styled} from '@mui/material'
import {AppBar, Toolbar, Paper, Button, Typography, IconButton, Grid, Container, Fade } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {
}})

function Header(props:any) {
  const theme = useTheme();
  console.log(theme.palette.mode)
  const colorMode = React.useContext(ColorModeContext)
  return (
    <AppBar position='static' color='primary'>
      <CustomToolbar variant='regular'>
        <Fade timeout={300} in unmountOnExit>
          <LinkContainer>
            <StyledDivision>
              <Redirect href='#about-me'>
                <Button color={props.color}>  
                  <CustomTypography sx={{cursor:'pointer'}} variant='body1'>About me</CustomTypography>
                </Button>
              </Redirect>
            </StyledDivision>            
            <StyledDivision>
              <Redirect href='#portfolio'>
                <Button color={props.color}>
                  <CustomTypography sx={{cursor:'pointer'}} variant='body1'>Portfolio</CustomTypography>
                </Button>
              </Redirect>
            </StyledDivision>
          </LinkContainer>
        </Fade>
        <Fade timeout={1000} in>
            <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
              {theme.palette.mode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>} 
            </IconButton>
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
`

const Redirect = styled('a')`
  all: unset;
`

const CustomTypography = styled(Typography)`
  font-weight: bolder;
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
    padding: 0 2rem;
  }
`

export default Header