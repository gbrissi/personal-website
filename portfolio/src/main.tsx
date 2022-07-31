import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import { teal } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#f5f5f5',
      main: '#fff',
      dark: '#424242'
    },
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
)
