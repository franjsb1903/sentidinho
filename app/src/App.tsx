import { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles'
import RoutesApp from './routes/Routes'
import { useAppSelector } from './redux/store'

function App() {
  const darkmode = useAppSelector(state => state.darkmode.darkmode)
  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </>
  )
}

export default App
