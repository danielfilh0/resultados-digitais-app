import { screen } from '@testing-library/react'

import { Home } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Home />', () => {
  it('should render the section', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /gerador de cartão de visita/i })
    ).toBeInTheDocument()
  })
})
