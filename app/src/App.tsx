import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles'
import RoutesApp from './routes/Routes'
import { store } from './redux/store'
import ToggleDarkMode from './components/toggleDarkMode/ToggleDarkMode'

function App() {
  const [darkmode, setDarkmode] = useState(true)
  return (
    <Provider store={store}>
      <ToggleDarkMode darkmode={darkmode} setDarkmode={setDarkmode} />
      <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RoutesApp />
      </ThemeProvider>
    </Provider>
  )
}

export default App
