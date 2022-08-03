import React from 'react'
import {styled} from '@mui/material/styles'
import {Typography} from '@mui/material'

function Courses() {
  return (
    <Section id='courses'>
        <CustomTypography variant='h2'>Courses that I have gone through</CustomTypography>
    </Section>
  )
}

const Section = styled('div')`
    padding: 3rem 2rem 2rem 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
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

export default Courses