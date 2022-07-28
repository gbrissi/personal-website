import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import { red, blue } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    }
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
