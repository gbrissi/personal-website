import React, {useState, useEffect} from 'react'
import Photo from '../assets/photo.png'
import { teal } from '@mui/material/colors'
import {styled} from '@mui/material/styles'
import SocialMediaRow from './SocialMediaRow'
import { Typography, Zoom, Avatar } from '@mui/material'

export default function Banner(props: any) {

  return (
    <Zoom in timeout={300}>
      <Wrapper id='about-me'>
        <BannerContainer>
          <SocialMediaRow/>
          <BannerComponents>
            <GradientTypography variant='body1'>Aspiring Software Developer </GradientTypography>
            <Typography variant='body1'>Software development student with experience in JavaScript, NodeJS and React among many other libraries and frameworks :D</Typography>
          </BannerComponents>
          <BannerComponents sx={{flexDirection: 'row'}}>
            <CustomTypography variant='h2'>Hello there, my name is <span style={{color: props.bannerText}}>Gabriel</span>! <span style={{position: 'relative', fontSize:'3rem', top: '-5px'}}>&#128075;</span></CustomTypography>
          </BannerComponents>
        </BannerContainer>
      </Wrapper>
    </Zoom>
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
  } @media (max-width: 600px) {
    font-size: 3rem;
  }
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh
`

const BannerContainer = styled('div')`
  width: 60%;
  justify-self: center;
  align-self: center;
  margin: 2rem 0;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 5rem;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

const GradientTypography = styled(Typography)`
  font-weight: bolder;
  color: transparent;
  margin-bottom: 10px;
  background: linear-gradient(90deg, rgba(53,102,147,1) 0%, rgba(52,172,130,1) 100%);
  background-clip: text;
`

const BannerComponents = styled('div')` 
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
`