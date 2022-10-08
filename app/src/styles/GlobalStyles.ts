import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff',
  text: '#fff',
  headerText: '#000',
  cardDivider: 'rgba(0, 0, 0, 0.5)',
  card: 'rgba(255, 255, 255, 0.8)',
  textCard: '#000',
  style: 'light',
}

export const darkTheme = {
  body: '#000',
  text: '#fff',
  headerText: '#fff',
  cardDivider: 'rgba(255, 255, 255, 0.5)',
  card: 'rgba(0, 0, 0, 0.8)',
  textCard: '#fff',
  style: 'dark',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
      url('./assets/hero.jpg');
    background-size: cover;
    min-height: 500px;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }

  @font-face {
    font-family: Dancing;
    src: url('/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf');
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: white; 
    border-radius: 10px;
  }

  dialog::backdrop {
    backdrop-filter: blur(10px)
  }
`
