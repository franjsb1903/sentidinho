import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles'
import RoutesApp from './routes/Routes'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </Provider>
  )
}

export default App
