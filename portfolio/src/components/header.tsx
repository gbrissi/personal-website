import { Typography, Container } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Container sx={{border: '1px solid red'}}>
      <Typography align='center' variant='h2' color='primary'>
        The  header is here!!!
      </Typography>
    </Container>

  )
}

export default Header