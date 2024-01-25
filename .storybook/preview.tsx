import React from 'react'
// @ts-expect-error-ignore
import GlobalStyles from 'styles/global'
// @ts-expect-error-ignore
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
