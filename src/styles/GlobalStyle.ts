import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Couture',
    src: url('/path-to-your-font/Couture-Bold.woff2') format('woff2'),
         url('/path-to-your-font/Couture-Bold.woff') format('woff'),
    font-weight: bold,
    font-style: normal,
  }

  body {
    font-family: 'Couture', sans-serif,
    margin: 0,
    padding: 0,
    box-sizing: border-box,
  }
`

export default GlobalStyle