import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles'
import Header from './components/header/Header'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </Provider>
  )
}

export default App
