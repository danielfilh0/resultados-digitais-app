import React from 'react'
// @ts-expect-error-ignore
import GlobalStyles from 'styles/global'
// @ts-expect-error-ignore
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { Preview } from '@storybook/react'

import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      },
      defaultViewport: 'iphone6'
    }
  }
}

export default preview
