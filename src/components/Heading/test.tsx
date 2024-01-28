import { screen } from '@testing-library/react'

import { Heading } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import theme from '@/styles/theme'
import { nunito, redHatDisplay } from '@/styles/fonts'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })

  it('should render a dark heading when color is passed', () => {
    renderWithTheme(<Heading color="dark">Heading</Heading>)

    expect(screen.getByRole('heading', { name: /heading/i })).toHaveStyle({
      color: theme.colors.dark
    })
  })

  it('should render a heading with a small/medium size', () => {
    renderWithTheme(<Heading size="small">First Heading</Heading>)
    renderWithTheme(<Heading size="medium">Second Heading</Heading>)

    expect(screen.getByRole('heading', { name: /first heading/i })).toHaveStyle(
      {
        'font-size': theme.font.sizes.lg
      }
    )
    expect(
      screen.getByRole('heading', { name: /second heading/i })
    ).toHaveStyle({
      'font-size': theme.font.sizes.xlg
    })
  })

  it('should render a heading with a nunito or redHat font families', () => {
    renderWithTheme(<Heading font="nunito">First Heading</Heading>)
    renderWithTheme(<Heading font="redHat">Second Heading</Heading>)

    expect(screen.getByRole('heading', { name: /first heading/i })).toHaveClass(
      nunito.className
    )
    expect(
      screen.getByRole('heading', { name: /second heading/i })
    ).toHaveClass(redHatDisplay.className)
  })
})
