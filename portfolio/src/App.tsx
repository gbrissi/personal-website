import Header from "./components/Header"
import {styled} from '@mui/system'

function App() {

  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  )
}

const AppContainer = styled('div')`
  min-height: 100vh;
  background-color: whitesmoke;
`

export default App
