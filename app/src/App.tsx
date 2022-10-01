import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle, darkTheme, lightTheme } from './styles/GlobalStyles'
import Header from './components/header/Header'
import NotesList from './components/notesList/NotesList'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NotesList />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
