import { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles'
import RoutesApp from './routes/Routes'
import { store, useSelector } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

function App() {
  const darkmode = useSelector(state => state.darkmode.darkmode)
  const persistor = persistStore(store)
  return (
    <>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <RoutesApp />
        </ThemeProvider>
      </PersistGate>
    </>
  )
}

export default App
