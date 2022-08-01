import Header from "./components/Header"
import Banner from "./components/Banner"
import Portfolio from './components/Portfolio'
import {styled} from '@mui/system'
import {Paper} from '@mui/material'
import React, {useState} from "react"
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles'
import {ColorModeContext} from './components/Header'

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#f5f5f5',
          },
          secondary: {
            main: '#000'
          }
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header color={mode === 'light' ? 'secondary' : 'primary'}/>
          <Container>
            <Banner/>
            <Portfolio imageContainerFontColor = {mode === 'light' ? '#000' : '#fff'} gridFontColor = {mode === 'light' ? '#fff' : '#000'} gridColor = {mode === 'light' ? '#333' : '#cecece'} color={mode === 'light' ? '#f5f5f5' : '#161616'}/>
          </Container>
        </AppContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

const AppContainer = styled(Paper)`
  min-height: 100vh;
`

const Container = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default App