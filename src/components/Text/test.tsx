import { screen } from '@testing-library/react'

import { Text } from '.'
import theme from '@/styles/theme'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Text />', () => {
  it('should render the white text as default ', () => {
    const { container } = renderWithTheme(<Text>Random text</Text>)

    expect(screen.getByText(/random text/i)).toHaveStyle({
      color: theme.colors.white
    })
    expect(screen.getByText(/random text/i)).toHaveStyle({
      'font-size': theme.font.sizes.xs
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the text with different sizes', () => {
    renderWithTheme(<Text size="medium">First text</Text>)
    renderWithTheme(<Text size="large">Second text</Text>)

    expect(screen.getByText(/first text/i)).toHaveStyle({
      'font-size': theme.font.sizes.sm
    })
    expect(screen.getByText(/second text/i)).toHaveStyleRule(
      'font-size',
      theme.font.sizes.lg,
      {
        media: '(min-width:  768px)'
      }
    )
  })
})
