import { screen } from '@testing-library/react'

import { NotFound } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<NotFound />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<NotFound />)

    expect(
      screen.getByRole('heading', { name: /404 - página não encontrada/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
