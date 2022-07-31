import React from 'react'
import {styled} from '@mui/material/styles'
import { Typography, Fade} from '@mui/material'

function Banner() {
  return (
    <Fade in timeout={300}>
      <BannerContainer>
        <BannerComponents>
          <Typography variant='body1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita illum autem pariatur rerum. Laboriosam dolore molestias odit necessitatibus suscipit tempore veniam, expedita facere ducimus asperiores ut labore enim odio autem.</Typography>
        </BannerComponents>
        <BannerComponents>
          <CustomTypography variant='h2'>Olá, meu nome é Gabriel!</CustomTypography>
        </BannerComponents>
      </BannerContainer>
    </Fade>
  )
}

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

const BannerContainer = styled('div')`
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      flex-direction: column-reverse;
    }
`

const BannerComponents = styled('div')`  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex: 1;
`

export default Banner