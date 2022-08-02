import React from 'react'
import {Grid, styled} from '@mui/material'
import {Typography, Zoom, Paper, Fade} from '@mui/material'
import portfolioImg from '../assets/portfolio-v1.png'
import portfoliov2Img from '../assets/portfolio-v2.png'
import discover from '../assets/discover.png'
import figmaland from '../assets/figmaland.png'
import books from '../assets/books.png'
import timeTracking from '../assets/time-tracking.png'
import amazonClone from '../assets/amazon-clone.png'
import libraryProject from '../assets/biblioteca.png'

function Portfolio(props: any) {
  return (
        <PortfolioContainer sx={{backgroundColor: props.color}} id='portfolio'>
            <Zoom timeout={300} in>
                <TitleContainer>
                    <CustomTypography variant='h2'>Check out my portfolio!</CustomTypography>
                </TitleContainer>
            </Zoom>
            <Fade timeout={1000} in>
              <GridContainer sx={{color: props.gridFontColor}}container>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>A portfolio made with pure HTML + CSS + Javascript</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Portfolio v2.0</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>A personal project  made to pratice libraries used to create UI interfaces, such as React.js and Material UI</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfoliov2Img}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Discover</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>First web application ever made. Built along Rocketseat Discover course.</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={discover}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Figmaland</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>First time building a user interface without following any guides besides the design concept, HTML + CSS only</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={figmaland}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Books</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>First time trying to use Bootstrap Framework, website build along a online course in Youtube</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={books}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Time Tracking</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>FrontEndMentor challenge, responsive user interface built with Bootstrap framework</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={timeTracking}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Amazon Clone | Under Construction</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>A "Amazon Clone" built with react, built along a React course made by codedamn in Youtube</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={amazonClone}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Library Project</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>A college CRUD application that was built with HTML, CSS, JS, PHP and MYSQL</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={libraryProject}></Image>
                  </ImageWrapper>
                </ImageContainer>
              </GridContainer>
            </Fade>
            <Fade in>
              <CheckMore>
                <Typography variant='h5'>You can check out for more in: </Typography>
                <Typography component='a' target='_blank' href=' https://github.com/gbrissi' sx={{marginLeft:'10px', textDecoration:'inherit',color:'inherit', fontWeight:'bolder', cursor:'pointer'}}variant='h5'>github.com/gbrissi</Typography>
              </CheckMore>
            </Fade>
        </PortfolioContainer>
    )
}

const CheckMore = styled('div')`
  margin-top: 1.5rem;
  display: flex;
  width: 75vw;
  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 600px) {
    padding: 1rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const Image = styled('img')`
  width: 100%;
  min-height: 100%;
`

const TitleContainer = styled('div')`
  margin-bottom: 4rem;
    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
`

const GridContainer = styled(Grid)`
  padding: 5px;
  width: 75vw;
  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
` 

const PortfolioContainer = styled(Paper)`
  box-shadow: none;
  padding: 2rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  min-height: 50vh;
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

const ImageContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 300px;
  @media (max-width: 1200px) {
    height: 270px;
  }
  @media (max-width: 600px) {
    height: 240px;
    margin: 0 3rem;
    margin-bottom: 3rem;
  }
`

const ImageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  background: whitesmoke;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  } 
  ::-webkit-scrollbar-track {
    background: #ffffff92
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: linear-gradient(180deg, rgba(53,102,147,1) 0%, rgba(52,172,130,1) 100%);    /* color of the scroll thumb */
  }
  @media (max-width: 600px) {
    align-self: center;
    max-width: 60vw;
  }
`

const ImageTypography = styled(Typography)`
  align-self: start;
  text-align: start;
  @media (max-width: 600px) {
    align-self: center;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  
`

export default Portfolio