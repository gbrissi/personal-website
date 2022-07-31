import React from 'react'
import {Grid, styled} from '@mui/material'
import {Typography, Zoom, Paper, Fade} from '@mui/material'

function Portfolio(props: any) {
  return (
        <PortfolioContainer sx={{backgroundColor: props.color}}>
            <Zoom timeout={300} in>
                <TitleContainer>
                    <CustomTypography variant='h2'>Check out my portfolio!</CustomTypography>
                </TitleContainer>
            </Zoom>
            <Fade timeout={500} in>
              <GridContainer sx={{color: props.gridFontColor}}container>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>                
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
                <ImageContainer sm={6} md={4} lg={3}>
                  <Image sx={{backgroundColor: props.gridColor}}>Testando o Grid</Image>
                </ImageContainer>
              </GridContainer>
            </Fade>
        </PortfolioContainer>
    )
}

const Image = styled('div')`
  padding: 5px;
  width: 100%;
  height: 100%;
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
  padding: 5px;
  height: 300px;
`

export default Portfolio