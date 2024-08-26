import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Couture',
    src: url('public/assets/COUTURE Bold.woff') format('woff'),
         url('public/assets/COUTURE Bold.woff2') format('woff2'),
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
