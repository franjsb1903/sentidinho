import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
}

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
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
  }

  @font-face {
    font-family: Dancing;
    src: url('/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf');
  }
`
