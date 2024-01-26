'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@700&family=Nunito+Sans:wght@400;700;800&family=Red+Hat+Display:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
