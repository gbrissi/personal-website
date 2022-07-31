import React from 'react'
import {styled} from '@mui/material'
import {Typography, Zoom, Paper} from '@mui/material'

function Portfolio(props: any) {
  return (
        <PortfolioContainer sx={{backgroundColor: props.color}}>
            <Zoom timeout={300} in>
                <TitleContainer>
                    <CustomTypography variant='h2'>Check out my portfolio!</CustomTypography>
                </TitleContainer>
            </Zoom>
        </PortfolioContainer>
    )
}

const TitleContainer = styled('div')`
    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
`

const PortfolioContainer = styled(Paper)`
    padding: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
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

export default Portfolio