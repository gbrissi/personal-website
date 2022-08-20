import React, {useState, useContext, useEffect} from 'react'
import {styled} from '@mui/material'
import {AppBar, Toolbar, Paper, Button, Typography, IconButton, Grid, Container, Fade } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {
}})

function Header(props:any) {

  //position and visibility of the appbar component
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 

  //hides the header when scrolling down and shows it when scrolling up
  useEffect(()=> {
    const handleScroll = () => {
      let moving = window.pageYOffset
      
      setVisible(position > moving);
      setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return(() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })
  const cls = visible ? {top: "0", transition: 'top 0.5s ease-in-out'} : {top: "-80px", transition: 'top 0.5s ease-in-out'};

  //use pallete theme
  const theme = useTheme();
  console.log(theme.palette.mode)
  const colorMode = React.useContext(ColorModeContext)

  return (
    <AppBar sx={cls} position='fixed' id='header'>
      <CustomToolbar variant='regular'>
        <Fade timeout={300} in unmountOnExit>
          <LinkContainer>
            <StyledDivision>
              <Redirect href='#about-me'>
                <Button color={props.color}>  
                  <CustomTypography sx={{cursor:'pointer'}} variant='body2'>About me</CustomTypography>
                </Button>
              </Redirect>
            </StyledDivision>            
            <StyledDivision>
              <Redirect href='#portfolio'>
                <Button color={props.color}>
                  <CustomTypography sx={{cursor:'pointer'}} variant='body2'>Portfolio</CustomTypography>
                </Button>
              </Redirect>
            </StyledDivision>
            {/*<StyledDivision>
              <Redirect href='#courses'>
                <Button color={props.color}>
                  <CustomTypography sx={{cursor:'pointer'}} variant='body2'>Courses</CustomTypography>
                </Button>
              </Redirect>
            </StyledDivision>*/}
          </LinkContainer>
        </Fade>
        <Fade timeout={1000} in>
          <IconButton sx={{padding: '1rem'}} onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>} 
          </IconButton>
        </Fade>
      </CustomToolbar>
    </AppBar>
  )
}

const StyledDivision = styled('div')`
  padding: 0 25px;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
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
/* background: ${(props) => props backgroundColor} */


const CustomToolbar = styled(Toolbar)`
  width: 75vw;
  align-self: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 900px) {
    width: 90vw;
  }
`

export default Header