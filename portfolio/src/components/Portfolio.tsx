import React from 'react'
import {Grid, styled} from '@mui/material'
import {Typography, Zoom, Paper, Fade} from '@mui/material'
import portfolioImg from '../assets/portfolio-v1.png'

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
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>Web Project made with React and Material UI</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>Web Project made with React and Material UI</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>Web Project made with React and Material UI</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>Web Project made with React and Material UI</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <ImageTypography sx={{color: props.imageContainerFontColor, fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</ImageTypography>
                  <ImageTypography sx={{color: props.imageContainerFontColor}} variant='body2'>Web Project made with React and Material UI</ImageTypography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <Typography sx={{color: props.imageContainerFontColor, alignSelf: 'start', fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</Typography>
                  <Typography sx={{color: props.imageContainerFontColor, alignSelf: 'start'}} variant='body2'>Web Project made with React and Material UI</Typography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <Typography sx={{color: props.imageContainerFontColor, alignSelf: 'start', fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</Typography>
                  <Typography sx={{color: props.imageContainerFontColor, alignSelf: 'start'}} variant='body2'>Web Project made with React and Material UI</Typography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
                <ImageContainer xs={12} sm={6} md={4} lg={3}>
                  <Typography sx={{color: props.imageContainerFontColor, alignSelf: 'start', fontWeight: 'bolder'}} variant='body1'>Portfolio v1.0</Typography>
                  <Typography sx={{color: props.imageContainerFontColor, alignSelf: 'start'}} variant='body2'>Web Project made with React and Material UI</Typography>
                  <ImageWrapper sx={{backgroundColor: props.gridColor}}>
                    <Image src={portfolioImg}></Image>
                  </ImageWrapper>
                </ImageContainer>
              </GridContainer>
            </Fade>
        </PortfolioContainer>
    )
}

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
    padding: 2rem;
    padding-top: 5rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
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
  height: 250px;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    height: 180px;
    margin: 0 3rem;
    margin-bottom: 3rem;
  }
`

const ImageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  } 
  ::-webkit-scrollbar-track {
    background: #ffffff92
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(53,102,147,1) 0%, rgba(52,172,130,1) 100%);    /* color of the scroll thumb */
  }
  @media (max-width: 600px) {
    align-self: center;
    max-width: 60vw;
  }
`

const ImageTypography = styled(Typography)`
  align-self: start;
  text-align: center;
  @media (max-width: 600px) {
    align-self: center;
  }
`

export default Portfolio