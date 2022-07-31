import Header from "./components/Header"
import Banner from "./components/Banner"
import {styled} from '@mui/system'
import {Container, Paper} from '@mui/material'

function App() {

  return (
    <AppContainer>
      <Header/>
      <Container>
        <Banner/>
      </Container>
    </AppContainer>
  )
}

const AppContainer = styled(Paper)`
  box-shadow: "none";
  min-height: 100vh;
`

export default App
